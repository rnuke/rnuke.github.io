import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  start() {
    const endpoint = new URL("https://www.reddit.com/api/v1/authorize")
    const state = Math.random().toString(36).slice(2)

    document.cookie = `authorization_state=${state}`

    endpoint.searchParams.append("client_id", "sTwm7bm3nY-AE8xr7LjAkA")
    endpoint.searchParams.append("response_type", "token")
    endpoint.searchParams.append("state", state)
    endpoint.searchParams.append("redirect_uri", "https://f1d6-2a00-23c7-409-f401-6c2c-842-300e-4a92.eu.ngrok.io/start")
    endpoint.searchParams.append("duration", "temporary")
    endpoint.searchParams.append("scope", "identity edit history")

    window.location.href = endpoint.href
  }
}
