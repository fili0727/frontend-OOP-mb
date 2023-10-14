import { albums } from "../controller/albumController.js";
import { artists } from "../controller/artistController.js";
import { tracks } from "../controller/trackController.js";
import { searchBackend, updateGrid } from "../rest.js";


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
        updateGrid();
    }

}

export async function showSort(event) {
    const sortValue = event.target.value;

    if (sortValue === 'default') {
        artists.sort((a, b) => a.name.localeCompare(b.name));
        tracks.sort((a, b) => a.title.localeCompare(b.title));
        albums.sort((a, b) => a.title.localeCompare(b.title));
        updateGrid();

    } else if (sortValue === 'reverse') {
        artists.sort((a, b) => b.name.localeCompare(a.name));
        tracks.sort((a, b) => b.title.localeCompare(a.title));
        albums.sort((a, b) => b.title.localeCompare(a.title));
        updateGrid();
    }
}