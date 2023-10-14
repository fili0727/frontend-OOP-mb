"use strict";

import { updateArtistsGrid, readOneArtist, searchBackend } from "./rest.js";
import Dialog from "./view/infoDialog.js";


window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  const searchInput = document.querySelector("#searchbar");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchBackend(query);
  });
    initializeActionButtons();
  await updateArtistsGrid();
}



function showArtists(artists) {
  document.querySelector("#artists").innerHTML = "";
  for (const artist of artists) {
    const html =
    /*html*/
    `
    <article class="grid-item-artist" data-artist-id="${artist.id}">
    <h2>${artist.name}</h2>
    <p>Career start: ${artist.career_start}</p>
    </article>
    `;
    document.querySelector("#artists").insertAdjacentHTML("beforeend", html);
  }
}

function showAlbums(albums) {
  document.querySelector("#albums").innerHTML = "";
  for (const album of albums) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <h2>${album.title}</h2>
      <p>Release date: ${album.release_date}</p>
      </article>
    `;
    document.querySelector("#albums").insertAdjacentHTML("beforeend", html);
  }
}

function showTracks(tracks) {
  document.querySelector("#tracks").innerHTML = "";
  for (const track of tracks) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <h2>${track.title}</h2>
      <p>Duration: ${track.duration}</p>
      </article>
    `;
    document.querySelector("#tracks").insertAdjacentHTML("beforeend", html);
  }
}

function initializeActionButtons() {
  document.querySelector("#artists").addEventListener("click", (e) => {
    if (e.target.classList.contains("grid-item-artist")) {
      // Check if the clicked element has the "grid-item-artist" class
      showInfoDialog(e);
    }
  });}
  
async function showInfoDialog(e) {
  const artistGridItem = e.target.closest(".grid-item-artist");
  if (artistGridItem) {
    const artistId = artistGridItem.getAttribute("data-artist-id");
    try { 
    const artistInfo = await readOneArtist(artistId); 
    
    // Populate the dialog with artistInfo
    const infoDialog = new Dialog("info-dialog");
    infoDialog.render(artistInfo[0]);
    console.log(artistInfo);
    infoDialog.show();
  }
  catch (error){
    console.error(error.message);
  }
}
}

export { showArtists, showAlbums, showTracks };
