import BaseHandler from "./baseHandler";

export default class CommentHandler extends BaseHandler {
  static itemTextAttribute = "body";
  static itemName = "Comment";

  getItems(...args) {
    return this.client.getComments(...args);
  }

  editItem(...args) {
    return this.client.editComment(...args);
  }

  deleteItem(...args) {
    return this.client.deleteComment(...args);
  }
}
