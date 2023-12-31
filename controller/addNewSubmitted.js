import { createAlbum, createArtist, createTrack } from "./CRUD/create.js";
import { updateGrid } from "./rest.js";

export async function addNewSubmitted(event) {
    event.preventDefault();

    const container = document.querySelector("#add-new-selected-dialog");
    const form = event.target;

    if (form['add-new-image']) {
        const artist = {
            artist_name: form['add-artist-name'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            artist_career_start: form['add-career-start-year'].value,
            img: form['add-new-image'].value,
            album_title: form['add-album-title-newArtist'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            album_release_date: form['add-album-date-newArtist'].value,
            tracks: [
                {
                    "title": form['add-track-title-newArtist1'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
                    "duration": form['duration-input-newArtist1'].value
                },
                {
                    "title": form['add-track-title-newArtist2'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
                    "duration": form['duration-input-newArtist2'].value
                }
            ]
        };

        createArtist(artist);
        await updateGrid();


    } else if (form['duration-input']) {
        const track = {
            title: form['add-track-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            duration: form['duration-input'].value,
            album_id: form['albums-in-addNewTracks'].value,
            artist_id: form['artists-in-addNewTracks'].value

        };

        createTrack(track);
        await updateGrid();


    } else if (form['add-album-title']) {
        const album = {
            title: form['add-album-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            release_date: form['add-album-date'].value,
            artist_id: Number(form['artists-in-addNewAlbum'].value)
        };

        createAlbum(album);
        await updateGrid();

    }

    container.close();
};

