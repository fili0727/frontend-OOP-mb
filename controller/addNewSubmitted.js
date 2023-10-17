import Album from "../model/album.js";
import Artist from "../model/artist.js";
import Track from "../model/track.js";
import { createAlbum, createArtist, createTrack } from "./CRUD/create.js";

export function addNewSubmitted(event) {
    event.preventDefault();

    const container = document.querySelector("#add-new-selected-dialog");
    const form = event.target;

    if (form['add-new-image']) {
        const artist = {
            name: form['add-artist-name'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            career_start: form['add-career-start-year'].value,
            img: form['add-new-image'].value
        };

        const newArtist = new Artist(artist);
        createArtist(newArtist);

    } else if (form['duration-input']) {
        const track = {
            title: form['add-track-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            duration: form['duration-input'].value,
            album_id: form['albums-in-addNewTracks'].value,
            artist_id: form['artists-in-addNewTracks'].value

        };

        createTrack(track);

    } else if (form['add-album-title']) {
        const album = {
            title: form['add-album-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            release_date: form['add-album-date'].value,
            artist_id: form['artists-in-addNewAlbum'].value
        };

        createAlbum(album);
    }

    container.close();

};

