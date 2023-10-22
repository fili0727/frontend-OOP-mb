import { deleteArtist } from "../controller/CRUD/delete.js";
import { albums } from "../controller/albumController.js";
import { tracksForArtist } from "../controller/rest.js";
import Track from "./track.js";
import { updateArtistForm } from "./HTML for addNew/updateArtist.js";

export class DetailDialog {
  constructor(container, object) {
    this.container = document.querySelector(`#${container}`);
    this.object = object;
    this.updateForm = new updateArtistForm(
      this.object.id,
      this.object.name,
      this.object.career_start,
      this.object.img
    );
  }

  showDialog() {
    this.container.showModal();
  }

  closeDialog() {
    this.container.close();
  }

  clearDialog() {
    this.container.innerHTML = "";
  }

  getTracks() {
    const tracks = [];

    for (const data of tracksForArtist) {
      const track = new Track(data);
      tracks.push(track);
    }
    return tracks;
  }

  render() {
    this.clearDialog();

    const albumIds = this.object.albums;
    const artistAlbums = albumIds.map(albumId =>
      albums.find(album => albumId === album.id)
    );

    const trackIds = [];
    const artistTracks = [];
    const tracks = [];

    artistAlbums.forEach(album =>
      album.tracks.forEach(track => trackIds.push(track))
    );

    trackIds.forEach(trackId => {
      const found = this.getTracks().filter(track => track.id === trackId);
      if (found) {
        artistTracks.push(found);
      }
    });

    for (let i = 0; i < artistTracks.length; i++) {
      for (let j = 0; j < artistTracks[i].length; j++) {
        tracks.push(artistTracks[i][j]);
      }
    }

    const html =
      /*html*/
      `<article class="dialog-item">
                <h2>${this.object.name}</h2>
                <h3>Carreer start:</h3>
                <p>${this.object.career_start}</p>
                <h3>Appears on albums:</h3>
                <ul>
                    ${artistAlbums
        .map(
          album => `<li>
                        ${album.title}
                    </li>`
        )
        .join("")}
                </ul>
                <h3>Appears on tracks:</h3>
                <ul>
                    ${tracks
        .map(
          track => `<li>
                        ${track.title}
                    </li>`
        )
        .join("")}
                </ul>
                <img class="detail-dialog-img" src="${this.object.img
      }" alt='No image'>
                <div class="crud-button-container">
                <button class="crud-button clickable update-button">Update</button>
                <button class="crud-button clickable delete-button">Delete</button>
                </div>
                <button class='close-button clickable'>X</button>
            </article>
            `;

    this.container.insertAdjacentHTML("beforeend", html);

    const closeButton = document.querySelector(".close-button");

    const deleteButton = document.querySelector(".delete-button");

    const updateButton = document.querySelector(".update-button");

    closeButton.addEventListener("click", () => {
      this.closeDialog();
    });

    deleteButton.addEventListener("click", () => {
      deleteArtist(this.object);
    });

    updateButton.addEventListener("click", () => {
      this.closeDialog();
      this.updateForm.clearDialog();
      this.updateForm.selector.insertAdjacentHTML(
        "beforeend",
        this.updateForm.render()
      );
      this.updateForm.showDialog();
    });
  }
}
