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

async function updateGrid() {
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
    updateGrid();
  }
}

export function updateSearchResults(artists, tracks, albums) {
  if (artists.length !== 0) {
    updatedArtistList.render();
    searchedArtistList.length = 0;
  } else {
    document.querySelector("#artists-list").innerHTML = `<h3>NO ARTISTS FOUND</h3>`;
  }

  if (tracks.length !== 0) {
    updatedTrackList.render();
    searchedTrackList.length = 0;
  } else {
    document.querySelector("#tracks-list").innerHTML = `<h3>NO TRACKS FOUND</h3>`;
  }

  if (albums.length !== 0) {
    updatedAlbumList.render();
    searchedAlbumList.length = 0;
  } else {
    document.querySelector("#albums-list").innerHTML = `<h3>NO ALBUMS FOUND</h3>`;
  }
}

export { updateGrid, searchBackend };
