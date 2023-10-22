import { endpoint, updateGrid } from "../rest.js";

export async function deleteArtist(artist) {
    const container = document.querySelector("#detail-dialog");

    console.log(`artist deleted: ${artist}`);

    try {
        const response = await fetch(`${endpoint}artists/${artist.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(await data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) { console.log(error); }

    container.close();

    updateGrid();
}