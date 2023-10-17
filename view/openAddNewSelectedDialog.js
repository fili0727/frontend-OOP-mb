import { addNewAlbumForm } from "../model/HTML for addNew/addNewAlbum.js";
import { addNewArtistForm } from "../model/HTML for addNew/addNewArtist.js";
import { addNewTrackForm } from "../model/HTML for addNew/addNewTrack.js";
import { addNewDialog } from "../model/addNewDialog.js";

export function openAddNewSelectedDialog(event) {
    const dialogToOpen = event.target.value;
    const previousDialog = document.querySelector("#add-new-dialog");
    const form = document.querySelector("#add-new-form");

    previousDialog.close();
    form.reset();


    if (dialogToOpen === 'album') {
        const addNewAlbumDialog = new addNewDialog(new addNewAlbumForm());
        addNewAlbumDialog.render();
        addNewAlbumDialog.open();
    } else if (dialogToOpen === 'track') {
        const addNewAlbumDialog = new addNewDialog(new addNewTrackForm());
        addNewAlbumDialog.render();
        addNewAlbumDialog.open();
    } else if (dialogToOpen === 'artist') {
        const addNewAlbumDialog = new addNewDialog(new addNewArtistForm());
        addNewAlbumDialog.render();
        addNewAlbumDialog.open();
    }
}