import { updateArtist } from "../../controller/CRUD/update.js";

export class updateArtistForm {
  constructor(id, name, career_start, img) {
    this.selector = document.querySelector("#dialog-update-artist");
    this.id = id;
    this.name = name;
    this.career_start = career_start;
    this.img = img;
  }
  render() {
    const html =
      /*html*/
      `
      <button id="dialog-close-btn">X</button>
        <h2>Edit artist</h2>
         <form id="form-edit-artist" method="dialog">
           <label for="name">Name: </label>
             <input
              type="text"
              id="edit-name"
              name="name"
              value="${this.name}"
              required
              />
           <label for="career_start">Career start:</label>
            <input
              type="text"
              id="edit-career-start"
              name="career_start"
              value="${this.career_start}"
              required
            />
          <label for="img">Image: </label>
            <input
              type="url"
              id="edit-image"
              name="img"
              value="${this.img}"
              required
            />
          <button type="submit" id="form-update-btn">Update artist</button>
        </form>
  `;
    return html;
  }
  sendForm(event) {
    console.log(event);
    console.log(this);
    const id = this.id;
    const name = event.target.name.value;
    const career_start = event.target.career_start.value;
    const img = event.target.img.value;
    updateArtist({ id: id, name: name, career_start: career_start, img: img });
  }

  showDialog() {
    console.log(this.selector);
    document
      .querySelector("#dialog-close-btn")
      .addEventListener("click", () => {
        this.closeDialog();
      });
    this.selector.showModal();
    document
      .querySelector("#form-edit-artist")
      .addEventListener("submit", event => {
        this.sendForm(event);
      });
  }

  closeDialog() {
    console.log("tis");
    this.selector.close();
  }

  clearDialog() {
    this.selector.innerHTML = "";
  }
}
