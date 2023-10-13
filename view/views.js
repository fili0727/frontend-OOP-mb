import { artistList, artists, instantiateArtists } from "../controller/artistController.js";
import { searchBackend, updateArtistsGrid } from "../rest.js";
import { ArtistRenderer } from "./artistrenderer.js";
import { ListRenderer } from "./listrenderer.js";

export function showFilter(event) {
    const filterValue = event.target.value;
    const searchQuery = document.querySelector("#searchbar").value;

    document.querySelector("#artists-div").classList.remove('hide');
    document.querySelector("#tracks-div").classList.remove('hide');
    document.querySelector("#albums-div").classList.remove('hide');

    if (filterValue === 'albums') {
        document.querySelector("#artists-div").classList.add('hide');
        document.querySelector("#tracks-div").classList.add('hide');
        document.querySelector("#albums-div").classList.remove('hide');
    } else if (filterValue === 'tracks') {
        document.querySelector("#artists-div").classList.add('hide');
        document.querySelector("#tracks-div").classList.remove('hide');
        document.querySelector("#albums-div").classList.add('hide');
    } else if (filterValue === 'artists') {
        document.querySelector("#artists-div").classList.remove('hide');
        document.querySelector("#tracks-div").classList.add('hide');
        document.querySelector("#albums-div").classList.add('hide');
    }

    if (searchQuery !== '') {
        searchBackend(searchQuery);
    } else {
        updateArtistsGrid();
    }

}

export async function showSort(event) {
    const sortValue = event.target.value;

    if (sortValue === 'default') {
        artists.sort((a, b) => a.name.localeCompare(b.name));
        artistList.render();
    } else if (sortValue === 'reverse') {
        artists.sort((a, b) => b.name.localeCompare(a.name));
        artistList.render();
    }
}