import { searchBackend } from "./rest.js";
import { openAddNewDialog } from "./view/openAddNewDialog.js";
import { openAddNewSelectedDialog } from "./view/openAddNewSelectedDialog.js";
import { showFilter, showSort } from "./view/views.js";

export const searchInput = document.querySelector("#searchbar");
export const artistsInput = document.querySelector("#artistBtn");
export const albumsInput = document.querySelector("#albumBtn");
export const tracksInput = document.querySelector("#trackBtn");
export const sortInput = document.querySelector("#sortBy");
export const addNewButton = document.querySelector("#create-artist-button");
export const radioButtons = document.getElementsByName("add-new-type");

export function InitializeSearchInput() {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchBackend(query);
  });
}

export function InitializeFilterInput() {
  artistsInput.addEventListener("change", event => {
    showFilter(event);
  });
}

export function InititializeSortInput() {
  sortInput.addEventListener("change", event => {
    showSort(event);
  });
}

export function InitializeAddNewButton() {
  addNewButton.addEventListener("click", openAddNewDialog);
}

export function InitializeAddNewRadio() {
  radioButtons.forEach(button =>
    button.addEventListener("change", event => {
      openAddNewSelectedDialog(event);
    })
  );
}
