import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["comments", "posts", "selection", "number", "period"];

  start() {
    const endpoint = new URL("https://www.reddit.com/api/v1/authorize.compact")
    const state = this.#state
    console.log(state);
    document.cookie = `authorization_state=${state}`

    endpoint.searchParams.append("client_id", "WUsmJjSSfPholQRih6D2Rw")
    endpoint.searchParams.append("response_type", "token")
    endpoint.searchParams.append("state", state)
    endpoint.searchParams.append("redirect_uri", "https://rnuke.github.io/start")
    endpoint.searchParams.append("duration", "temporary")
    endpoint.searchParams.append("scope", "identity edit history")

    window.location.href = endpoint.href
  }

  get #state() {
    const data = {
      nonce: Math.random().toString(36).slice(2),
      comments: this.commentsTarget.checked,
      posts: this.postsTarget.checked,
      period: this.periodTarget.value,
      number: this.numberTarget.value
    };

    return Buffer.from(JSON.stringify(data)).toString('base64');
  }
}
