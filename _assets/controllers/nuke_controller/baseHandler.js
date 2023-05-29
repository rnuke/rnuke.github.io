export default class BaseHandler {
  constructor(client, username, since) {
    this.client = client;
    this.username = username;
    this.since = since;
    this.allItemsLoaded = false;
  }

  async nuke() {
    if (this.#elements.length < 50) {
      await this.loadItems();
    }

    const nextElement = this.#elements[0];

    if (!nextElement) {
      console.log("done!");
      return;
    }

    await this.#nukeItem(nextElement);

    return this.nuke();
  }

  async loadItems() {
    if (this.allItemsLoaded) return;

    return this.getItems(this.username, { limit: "100", sort: "new", after: this.after }, response => {
      this.after = response.data.after;
      this.allItemsLoaded = !this.after;

      this.#createItems(response);

      // Because items were loaded that were newer than this.since
      if (this.#elements.length < 50 && !this.allItemsLoaded) {
        return this.loadItems();
      }
    });
  }

  // private

  #createItems(response) {
    const ul = document.getElementById("items");
    const template = document.getElementById("item-template");
    let li;

    response.data.children.forEach(item => {
      if (!this.since || (item.data.created_utc < this.since)) {
        li = template.content.cloneNode(true).querySelector("li");
        li.textContent = item.data[this.constructor.itemTextAttribute];
        li.dataset.id = item.data.id;
        ul.appendChild(li);
      }
    });
  }

  async #nukeItem(element) {
    const id = element.dataset.id;
    const updateText = "Deleted by rnuke (https://rnuke.github.io)";

    element.classList.add("deleted");

    await this.editItem(id, updateText);
    await this.deleteItem(id);

    element.addEventListener('animationend', event => event.currentTarget.remove());
    element.classList.add("slide-out");

  }

  get #elements() {
    return document.getElementById("items").querySelectorAll("li:not(.deleted)");
  }
}
