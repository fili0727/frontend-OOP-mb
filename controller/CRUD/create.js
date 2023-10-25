import { albums, instantiateAlbums } from "../albumController.js";
import { artists, instantiateArtists } from "../artistController.js";
import { endpoint, readTracks, updateGrid } from "../rest.js";
import { instantiateTracks, tracks } from "../trackController.js";

export async function createArtist(artist) {

    console.log(artist);

    try {
        const response = await fetch(`${endpoint}fullAlbums`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(artist)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(await data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) { console.log(error); }

    artists.length = 0;
    tracks.length = 0;
    albums.length = 0;

    await instantiateArtists();
    await instantiateTracks();
    await instantiateAlbums();
    await updateGrid();
}

export async function createTrack(track) {

    try {
        const response = await fetch(`${endpoint}tracks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(track)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(await data);
            console.log(await readTracks());
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) { console.log(error); }

    tracks.length = 0;
    await instantiateTracks();
    await updateGrid();
}
export async function createAlbum(album) {
    try {
        const response = await fetch(`${endpoint}albums`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(album)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(await data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) { console.log(error); }

    albums.length = 0;
    await instantiateAlbums();
    await updateGrid();
}