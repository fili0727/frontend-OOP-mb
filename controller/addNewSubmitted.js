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
            id: crypto.randomUUID(),
            name: form['add-artist-name'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            career_start: form['add-career-start-year'].value,
            img: form['add-new-image'].value
        };

        const newArtist = new Artist(artist);
        createArtist(newArtist);

    } else if (form['duration-input']) {
        const track = {
            id: crypto.randomUUID(),
            title: form['add-track-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            duration: form['duration-input'].value
        };

        const newTrack = new Track(track);

        createTrack(newTrack);

    } else if (form['add-album-title']) {
        const album = {
            id: crypto.randomUUID(),
            title: form['add-album-title'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
            release_date: form['add-album-date'].value
        };

        const newAlbum = new Album(album);

        createAlbum(newAlbum);
    }







    container.close();

};

