import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "name",
    "email",
    "message",
    "submit"
  ]

  static values = {
    url: String
  }

  submit(event) {
    event.preventDefault()
    const submit = this.submitTarget
    const form = this.element

    submit.disabled = true

    fetch(this.urlValue, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.nameTarget.value,
        email: this.emailTarget.value,
        message: this.messageTarget.value
      })
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    }).then((json) => {
      form.reset()
      submit.disabled = false
    }).catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    })
  }
}
