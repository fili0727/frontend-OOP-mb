import { artists } from "../../controller/artistController.js";

export class updateArtist {
  render() {
    const html =
      /*html*/
      `<dialog id="dialog-update-artist">
      <form>
        <button id="dialog-close-btn">X</button>
      </form>
      <h2>Edit artist</h2>
      <form id="form-update" method="dialog">
        <button id="dialog-close-btn">X</button>
      </form>
      <h2></h2>
      <form id="form-edit-artist" method="dialog">
        <label for="name">Name:</label>
        <input
          type="text"
          id="edit-name"
          name="name"
          placeholder="Edit stage name"
          required
        />
        <label for="career-start">Career start:</label>
        <input
          type="text"
          id="edit-career-start"
          name="career-start"
          placeholder="Edit when the artist first started their career"
          required
        />
        <label for="image">Image: </label>
        <input
          type="url"
          id="edit-image"
          name="image"
          placeholder="Paste image url here"
          required
        />
        <button type="submit" id="form-update-btn">Update artist</button>
      </form>
    </dialog>
`;
    return html;
  }
}
