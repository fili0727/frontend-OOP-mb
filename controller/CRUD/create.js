import { endpoint, updateGrid } from "../../rest.js";

export async function createArtist(artist) {

    console.log(artist);

    try {
        const response = await fetch(`${endpoint}artists`, {
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

    updateGrid();
}

export async function createTrack(track) {

    console.log(track);

    try {
        const response = await fetch(`${endpoint}tracks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(track)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(await data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) { console.log(error); }

    updateGrid();
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

    updateGrid();
}