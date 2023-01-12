import BaseHandler from "./baseHandler";

export default class PostHandler extends BaseHandler {
  static itemTextAttribute = "title";
  static itemName = "Post";

  getItems(...args) {
    return this.client.getPosts(...args);
  }

  editItem(...args) {
    return this.client.editPost(...args);
  }

  deleteItem(...args) {
    return this.client.editPost(...args);
  }
}
