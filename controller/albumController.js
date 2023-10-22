import Album from "../model/album.js";
import { readAlbums } from "./rest.js";
import { AlbumRenderer } from "../view/albumrenderer.js";
import { ListRenderer } from "../view/listrenderer.js";

export const albums = [];
export const searchedAlbumList = [];

export const albumList = new ListRenderer('albums-list', new AlbumRenderer(), albums);
export const updatedAlbumList = new ListRenderer('albums-list', new AlbumRenderer, searchedAlbumList);

export async function instantiateAlbums() {
    const albumData = await readAlbums();
    for (const data of albumData) {
        const album = new Album(data);
        albums.push(album);
    }
}