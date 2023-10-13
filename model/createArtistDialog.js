import Artist from "./artist.js";

export default class ArtistCreateDialog {
  constructor(container) {
    this.container = document.querySelector(`#${container}`);
  }

  show() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }

  render() {
    const html =
      /*HTML*/
      `<h1>Create new artist</h1>
      <form action="" method="dialog" id="create-artist-form">
        <label for="create-name">Name:</label> <input type="text" id="createName" name="name" placeholder="The artist's name - e.g. John">
        <label for="create-career-start">Career start:</label> <input type="date" id="createCareerStart" name="careerStart" >
        <label for="create-img">Image:</label> <input type="url" id="createImg" name="img">
        <button>Create</button>
      </form>`;

    this.container.insertAdjacentHTML('beforeend', html);

    this.container
      .querySelector("form")
      .addEventListener("submit", () => {
        console.log('clicked dialog');
      });
  }

  submit() {
    const form = this.dialog.querySelector("form");
    this.artist = new Artist({
      name: form.name.value,
      careerStart: form.careerStart.value,
      img: form.img.value,
    });

    form.reset();
  }
}
