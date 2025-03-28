import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async doSearch() {
    try {
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );
      return (this.recipes = result.data.recipes);
    } catch (error) {
      alert("Got a problem here");
    }
  }
}
