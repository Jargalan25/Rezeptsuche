export default class Likes {
  constructor() {
    this.likes = [];
  }
  addLike(id, title, publisher, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);
    return like;
  }
  deleteLike(id) {
    // Get the index of an like id with id from massive
    const index = this.likes.findIndex((el) => el.id === id);
    // Delete the index with that id
    this.likes.splice(index, 1);
  }
  isLiked(id) {
    return this.likes.findIndex((el) => el.id === id) !== -1;
  }

  getNumberOfLikes() {
    return this.likes.length;
  }
}
