import Bottleneck from "bottleneck"

const limiter = new Bottleneck({
  minTime: 1000
})

const limitedFetch = limiter.wrap(fetch)

export default class Client {
  constructor(token) {
    this.token = token;
  }

  async getUser(callback) {
    return this.#request({
      url: "https://oauth.reddit.com/api/v1/me",
      method: "GET",
      callback: callback
    })
  }

  async getComments(username, params, callback) {
    return this.#request({
      url: `https://oauth.reddit.com/user/${username}/comments`,
      method: "GET",
      params: params,
      callback: callback
    })
  }

  async getPosts(username, params, callback) {
    return this.#request({
      url: `https://oauth.reddit.com/user/${username}/submitted`,
      method: "GET",
      params: params,
      callback: callback
    })
  }

  async editComment(id, text, callback) {
    return this.#request({
      url: "https://oauth.reddit.com/api/editusertext",
      method: "POST",
      params: {
        thing_id: `t1_${id}`,
        text: text,
        api_type: "json"
      },
      callback: callback
    })
  }

  async deleteComment(id, callback) {
    return this.#request({
      url: "https://oauth.reddit.com/api/del",
      method: "POST",
      params: {
        id: `t1_${id}`
      },
      callback: callback
    })
  }

  async editPost(id, text, callback) {
    return this.#request({
      url: "https://oauth.reddit.com/api/editusertext",
      method: "POST",
      params: {
        thing_id: `t3_${id}`,
        text: text,
        api_type: "json"
      },
      callback: callback
    })
  }

  async deletePost(id, callback) {
    return this.#request({
      url: "https://oauth.reddit.com/api/del",
      method: "POST",
      params: {
        id: `t3_${id}`
      },
      callback: callback
    })
  }

  #request({ url, method, params, callback } = {}) {
    // if (method == "POST") {
    //   return new Promise(resolve => setTimeout(resolve, 1000)).then(() => console.log(url));
    // }

    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.token} `)
    headers.append("Content-Type", "application/json")

    const options = {
      method: method,
      headers: headers
    }

    const endpoint = new URL(url)
    for (const key in params) {
      endpoint.searchParams.append(key, params[key])
    }

    return limitedFetch(endpoint.href, options)
      .then(response => response.json())
      .catch(error => console.error(error))
      .then(response => typeof callback === 'function' && callback(response))
  }
}
