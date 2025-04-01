export default class Likes {
  constructor() {
    this.readLocalStorage();
    if (!this.likes) this.likes = [];
  }
  addLike(id, title, publisher, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);
    // Save to local storage
    this.saveLocalStorage();
    return like;
  }
  deleteLike(id) {
    // Get the index of an like id with id from massive
    const index = this.likes.findIndex((el) => el.id === id);
    // Delete the index with that id
    this.likes.splice(index, 1);
    // Save to local storage
    this.saveLocalStorage();
  }
  isLiked(id) {
    return this.likes.findIndex((el) => el.id === id) !== -1;
  }

  getNumberOfLikes() {
    return this.likes.length;
  }

  saveLocalStorage() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }

  readLocalStorage() {
    this.likes = JSON.parse(localStorage.getItem("likes"));
  }
}
