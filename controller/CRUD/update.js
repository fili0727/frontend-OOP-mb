import { initApp } from "../../app.js";
import { endpoint, readArtists, updateGrid } from "../rest.js";
import { artists, instantiateArtists } from "../artistController.js";

export async function updateArtist(artist) {
  console.log(artist);
  try {
    const response = await fetch(`${endpoint}artists/${artist.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artist),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(await data);
    } else {
      const errorData = await response.json();
      console.log({ message: errorData });
    }
  } catch (error) {
    console.log(error);
  }

  artists.length = 0;
  await instantiateArtists();
  await updateGrid();
}
