import Artist from "../model/artist.js";

export default class ArtistDialog {
  constructor(id) {
    this.dialog = document.createElement("dialog");
    this.dialog.id = id;
    document
      .querySelector("main")
      .insertAdjacentElement("afterend", this.dialog);
  }

  show() {
    this.dialog.showModal();
  }

  render() {
    const html =
      /*HTML*/
      `<h1>Create new artist</h1>
      <form action="" method="dialog" id="create-artist-form">
        <label for="create-name">Name:</label> <input type="text" id="create-name" name="name" placeholder="The artist's name - e.g. John">
        <label for="create-career-start">Career start:</label> <input type="date" id="create-career-start" name="career-start" >
        <label for="create-img">Image:</label> <input type="url" id="create-img" name="img">
        <button>Create</button>
      </form>`;

    this.dialog.innerHTML = html;

    this.dialog
      .querySelector("form")
      .addEventListener("submit", this.submit.bind(this));
  }
}
