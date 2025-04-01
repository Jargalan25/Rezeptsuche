import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }
  deleteItem(id) {
    // Get the index of an id with id from massive
    const index = this.items.findIndex((el) => el.id === id);

    // Delete the index with that id
    this.items.splice(index, 1);
  }
  addItem(item) {
    let newItem = {
      id: uniqid(),
      item,
    };
    this.items.push(newItem);
    return newItem;
  }
}
