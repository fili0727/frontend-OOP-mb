import { endpoint, updateGrid } from "../../rest.js";

export async function createArtist(artist) {

    console.log(artist);

    try {
        const response = await fetch(`${endpoint}artists`, {
            method: 'POST',
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