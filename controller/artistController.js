import Artist from "../model/artist.js";
import { readArtists } from "../rest.js";
import { ArtistRenderer } from "../view/artistrenderer.js";
import ArtistCreateDialog from "../view/createArtistDialog.js";
import { ListRenderer } from "../view/listrenderer.js";

export const artists = []
export const createDialog = new ArtistCreateDialog('create-artist-dialog')
export const artistList = new ListRenderer('artistClass', new ArtistRenderer(), artists)

export async function instantiateArtists() {
    const artistData = await readArtists();
    for (const data of artistData) {
        const artist = new Artist(data)
        artists.push(artist)
    }
}



