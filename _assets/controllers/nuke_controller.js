import { Controller } from "@hotwired/stimulus";
import Client from "./nuke_controller/client";
import CommentHandler from "./nuke_controller/commentHandler";
import PostHandler from "./nuke_controller/postHandler";

export default class extends Controller {
  async connect() {
    if (this.#getCookie("authorization_state") != this.#urlParams.get('state')) {
      throw new Error('Unable to verify authorization request');
    }

    let client = new Client(this.#urlParams.get('access_token'));
    let username = await client.getUser(response => { return response.name });

    if (this.#state.posts) {
      this.#loading = "Loading Posts";

      let postHandler = new PostHandler(client, username, this.#since);
      await postHandler.loadItems();
      this.#loading = "Deleting Posts";
      await postHandler.nuke();
    }

    if (this.#state.comments) {
      this.#loading = "Loading Comments";

      let commentHandler = new CommentHandler(client, username, this.#since);
      await commentHandler.loadItems();
      this.#loading = "Deleting Comments";
      await commentHandler.nuke();
    }

    this.#loading = "Done!";
    document.getElementById("loading").classList.remove("loading");
  }

  // private

  get #urlParams() {
    const queryString = window.location.hash.replace("#", "?");

    return new URLSearchParams(queryString);
  }

  get #state() {
    return JSON.parse(Buffer.from(this.#urlParams.get('state'), 'base64').toString('utf-8'));
  }

  get #since() {
    const number = Math.min(Math.max(parseInt(this.#state.number), 1), 5);
    const period = this.#state.period;

    if (!number) return;

    let seconds;
    switch (period) {
      case "hours":
        seconds = 60 * 60 * number;
        break;
      case "days":
        seconds = 60 * 60 * 24 * number;
        break;
      case "weeks":
        seconds = 60 * 60 * 24 * 7 * number;
        break;
      default:
        return;
    }

    return Math.round(Date.now() / 1000) - seconds;
  }

  #getCookie(cookieName) {
    let cookies = {};

    document.cookie.split(';').forEach(el => {
      let [key, ...rest] = el.split('=');
      const value = rest.join('=');
      cookies[key.trim()] = value;
    })

    return cookies[cookieName];
  }

  set #loading(string) {
    document.getElementById("loading").textContent = string;
  }
}
