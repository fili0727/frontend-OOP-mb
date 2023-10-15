"use strict";

import { albumList, instantiateAlbums } from "./controller/albumController.js";
import { artistList, instantiateArtists } from "./controller/artistController.js";
import { instantiateTracks, trackList } from "./controller/trackController.js";
import { InitializeFilterInput, InitializeSearchInput, InititializeSortInput } from "./eventlisteners.js";
import { updateGrid } from "./rest.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");

  await updateGrid();
  await instantiateTracks();
  await instantiateArtists();
  await instantiateAlbums();


  InitializeSearchInput();
  InitializeFilterInput();
  InititializeSortInput();

  artistList.render();
  albumList.render();
  trackList.render();

}

