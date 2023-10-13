import { ListRenderer } from "./view/listrenderer.js";
import { ArtistRenderer } from "./view/artistrenderer.js";
import { TrackRenderer } from "./view/trackrenderer.js";
import { AlbumRenderer } from "./view/albumrenderer.js";

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

async function searchBackend(event) {
  const query = event.target.value;
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


    const artistList = new ListRenderer('artists', ArtistRenderer, filteredArtists)

    const albumList = new ListRenderer('albums', AlbumRenderer, filteredAlbums)

    const trackList = new ListRenderer('tracks', TrackRenderer, filteredTracks)

    artistList.render()
    albumList.render()
    trackList.render()

  } else {
    console.log("Invalid search results data");
  }
}

export { searchBackend };
