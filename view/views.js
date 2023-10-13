import { artistList, artists, searchedArtistList } from "../controller/artistController.js";
import { searchBackend, updateArtistsGrid } from "../rest.js";

export function showFilter(event) {
    const filterValue = event.target.value;
    const searchQuery = document.querySelector("#searchbar").value;

    console.log(filterValue);

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

export function showSort(event) {
    const sortValue = event.target.value;

    if (searchedArtistList.length === 0 && sortValue === 'reverse') {
        artists.sort((a, b) => b.name.localeCompare(a.name));
        artistList.render();
    } else if (searchedArtistList.length === 0 && sortValue === 'default') {
        artists.sort((a, b) => a.name.localeCompare(b.name));
        artistList.render();
    }
}