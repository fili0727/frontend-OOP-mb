import { readAlbums, readArtists, readTracks, searchBackend } from "./rest.js";
import { AlbumRenderer } from "./view/albumrenderer.js";
import { ArtistRenderer } from "./view/artistrenderer.js";
import { ListRenderer } from "./view/listrenderer.js";
import { TrackRenderer } from "./view/trackrenderer.js";
import { showFilter } from "./view/view.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  const searchInput = document.querySelector("#searchbar");
  searchInput.addEventListener("keyup", searchBackend);

  document.querySelector("#filterByType").addEventListener("change", showFilter)

  const artists = await readArtists()
  const artistList = new ListRenderer('artists', ArtistRenderer, artists)

  const albums = await readAlbums()
  const albumList = new ListRenderer('albums', AlbumRenderer, albums)

  const tracks = await readTracks()
  const trackList = new ListRenderer('tracks', TrackRenderer, tracks)

  artistList.render()
  albumList.render()
  trackList.render()



}

