import { searchBackend } from "./rest.js";
import { showFilter, showSort } from "./view/views.js";

export const searchInput = document.querySelector("#searchbar");
export const filterInput = document.querySelector("#filterByType");
export const sortInput = document.querySelector("#sortBy");

export function InitializeSearchInput() {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value;
        searchBackend(query);
    });
}

export function InitializeFilterInput() {
    filterInput.addEventListener('change', (event) => {
        showFilter(event);
    });
}

export function InititializeSortInput() {
    sortInput.addEventListener('change', (event) => {
        showSort(event);
    });
}