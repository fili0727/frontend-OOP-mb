
export default class Dialog {
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
        <label for="create-name">Name:</label> <input type="text" id="createName" name="name" placeholder="The artist's name - e.g. John">
        <label for="create-career-start">Career start:</label> <input type="date" id="createCareerStart" name="careerStart" >
        <label for="create-img">Image:</label> <input type="url" id="createImg" name="img">
        <button>Create</button>
      </form>`;

    this.dialog.innerHTML = html;

    this.dialog
      .querySelector("form")
      .addEventListener("submit", this.submit.bind(this));
  }

  submit() {
    const form = this.dialog.querySelector("form");
    this.artist = new this.artist({
      name: form.name.value,
      careerStart: form.careerStart.value,
      img: form.img.value,
    });

    form.reset();

    controller.createArtist(this.artist);
  }
}
