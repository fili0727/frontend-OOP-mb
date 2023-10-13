"use strict";

import { albumList, instantiateAlbums } from "./controller/albumController.js";
import { artistList, instantiateArtists } from "./controller/artistController.js";
import { instantiateTracks, trackList } from "./controller/trackController.js";
import { updateArtistsGrid, searchBackend } from "./rest.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  const searchInput = document.querySelector("#searchbar");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchBackend(query);
  });

  await updateArtistsGrid();
  await instantiateArtists();
  await instantiateAlbums();
  await instantiateTracks();

  artistList.render();
  albumList.render();
  trackList.render();
}

