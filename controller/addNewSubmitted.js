import { createAlbum, createArtist, createTrack } from "./CRUD/create.js";

export function addNewSubmitted(event) {
    event.preventDefault();

    const container = document.querySelector("#add-new-selected-dialog");
    const form = event.target;

    // { album_title: string, album_release_date: string, artist_name: string, artist_career_start: string, tracks_title: [string], tracks_duration: [time]; }

    if (form['add-new-image']) {
        const artist = {
            name: form['add-artist-name'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            career_start: form['add-career-start-year'].value,
            img: form['add-new-image'].value,
            tracks_title: [],
            tracks_duration: []
        };

        console.log(artist);
        // createArtist(artist);

    } else if (form['duration-input']) {
        const track = {
            title: form['add-track-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            duration: form['duration-input'].value,
            album_id: form['albums-in-addNewTracks'].value,
            artist_id: form['artists-in-addNewTracks'].value

        };

        console.log(track);
        // createTrack(track);

    } else if (form['add-album-title']) {
        const album = {
            title: form['add-album-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            release_date: form['add-album-date'].value,
            artist_id: form['artists-in-addNewAlbum'].value
        };

        console.log(album);
        // createAlbum(album);
    }

    container.close();
};

