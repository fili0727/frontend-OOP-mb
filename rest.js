"use strict";

import { albumList, albums, searchedAlbumList, updatedAlbumList } from "./controller/albumController.js";
import { artistList, artists, searchedArtistList, updatedArtistList } from "./controller/artistController.js";
import { searchedTrackList, trackList, tracks, updatedTrackList } from "./controller/trackController.js";

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
  artistList.render();
  albumList.render();
  trackList.render();
}

async function searchBackend(query) {
  if (query !== '') {
    const response = await fetch(`${endpoint}/fullAlbums/search?q=${query}`);
    const searchData = await response.json();

    searchData.forEach(item => {
      if (item.career_start) {
        const searchedArtist = item;
        const updatedArtist = artists.find(artist => artist.name === searchedArtist.name);
        searchedArtistList.push(updatedArtist);
      } else if (item.duration) {
        const searchedTrack = item;
        const updatedTrack = tracks.find(track => track.title === searchedTrack.title);
        searchedTrackList.push(updatedTrack);
      } else if (item.release_date) {
        const searchedAlbum = item;
        const updatedAlbum = albums.find(album => album.title === searchedAlbum.title);
        searchedAlbumList.push(updatedAlbum);
      }
    });

    updateSearchResults(searchedArtistList, searchedTrackList, searchedAlbumList);
  } else {
    updateArtistsGrid();
  }
}

export function updateSearchResults(artists, tracks, albums) {
  if (artists != []) {
    updatedArtistList.render();
    searchedArtistList.length = 0;
  }
  if (tracks != []) {
    updatedTrackList.render();
    searchedTrackList.length = 0;
  }
  if (albums != []) {
    updatedAlbumList.render();
    searchedAlbumList.length = 0;
  }
}
export { updateArtistsGrid, searchBackend };
