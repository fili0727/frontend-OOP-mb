"use strict";

import { albumList } from "./controller/albumController.js";
import { artistList } from "./controller/artistController.js";
import { trackList } from "./controller/trackController.js";

const endpoint = "https://mabi-testdata-01.azurewebsites.net/";

export async function readArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = response.json();
  return data;
}

export async function readAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = response.json();
  return data;
}

export async function readTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const data = response.json();
  return data;
}

async function updateArtistsGrid() {
  const artists = await readArtists();
  artistList.render();
  const albums = await readAlbums();
  albumList.render();
  const tracks = await readTracks();
  trackList.render();
}

async function searchBackend(query) {
  const response = await fetch(`${endpoint}/fullAlbums/search?q=${query}`);
  const searchData = await response.json();
  updateSearchResults(searchData);
}

function updateSearchResults(searchResults) {
  if (searchResults && Array.isArray(searchResults)) {
    const filteredArtists = [];
    const filteredAlbums = [];
    const filteredTracks = [];

    for (const result of searchResults) {
      if (result.name !== null && result.career_start !== null) {
        filteredArtists.push(result);
      }
      if (result.title !== null && result.release_date !== null) {
        filteredAlbums.push(result);
      }
      if (result.title !== null && result.duration !== null) {
        filteredTracks.push(result);
      }
    }

    showArtists(filteredArtists);
    showAlbums(filteredAlbums);
    showTracks(filteredTracks);
  } else {
    console.log("Invalid search results data");
  }
}

export { updateArtistsGrid, searchBackend };
