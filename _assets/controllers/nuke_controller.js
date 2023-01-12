import { Controller } from "@hotwired/stimulus"
import Client from "./nuke_controller/client"
import CommentHandler from "./nuke_controller/commentHandler"
import PostHandler from "./nuke_controller/postHandler"

export default class extends Controller {
  async connect() {
    if (this.#getCookie("authorization_state") != this.#urlParams.get('state')) {
      throw new Error('Unable to verify authorization request');
    }

    this.#loading = "Loading Posts";

    let client = new Client(this.#urlParams.get('access_token'))
    let username = await client.getUser(response => { return response.name })

    let postHandler = new PostHandler(client, username);
    await postHandler.loadItems()
    this.#loading = "Deleting Posts";
    await postHandler.nuke()

    this.#loading = "Loading Comments";

    let commentHandler = new CommentHandler(client, username);
    await commentHandler.loadItems()
    this.#loading = "Deleting Comments";
    await commentHandler.nuke()

    this.#loading = "Done!";
    document.getElementById("loading").classList.remove("loading");
  }

  // private

  get #urlParams() {
    const queryString = window.location.hash.replace("#", "?")

    return new URLSearchParams(queryString)
  }

  #getCookie(cookieName) {
    let cookies = {}

    document.cookie.split(';').forEach(el => {
      let [key, value] = el.split('=')
      cookies[key.trim()] = value
    })

    return cookies[cookieName]
  }

  set #loading(string) {
    document.getElementById("loading").textContent = string;
  }
}
