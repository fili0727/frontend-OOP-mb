"use strict";

import { albumList, albums, instantiateAlbums } from "./controller/albumController.js";
import { artistList, artists, instantiateArtists } from "./controller/artistController.js";
import { instantiateTracks, trackList, tracks } from "./controller/trackController.js";
import { InitializeAddNewButton, InitializeAddNewRadio, InitializeFilterInput, InitializeSearchInput, InititializeSortInput } from "./controller/eventlisteners.js";
import { updateGrid } from "./controller/rest.js";

window.addEventListener("load", initApp);

export async function initApp() {
  console.log("JS kører");

  await updateGrid();
  await instantiateTracks();
  await instantiateArtists();
  await instantiateAlbums();


  InitializeSearchInput();
  InitializeFilterInput();
  InititializeSortInput();
  InitializeAddNewButton();
  InitializeAddNewRadio();

  artistList.render();
  albumList.render();
  trackList.render();

}


