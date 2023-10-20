import { endpoint, updateGrid } from "../../rest.js";

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

  updateGrid();
}

// <dialog id="dialog-update-artist">
//   <form>
//     <button id="dialog-close-btn">X</button>
//   </form>
//   <h2>Edit artist</h2>
//   <form id="form-update" method="dialog">
//     <button id="dialog-close-btn">X</button>
//   </form>
//   <h2></h2>
//   <form id="form-edit-artist" method="dialog">
//     <label for="name">Name:</label>
//     <input
//       type="text"
//       id="edit-name"
//       name="name"
//       placeholder="Edit stage name"
//       required
//     />
//     <label for="career-start">Career start:</label>
//     <input
//       type="text"
//       id="edit-career-start"
//       name="career"
//       placeholder="Edit when the artist started their career"
//       required
//     />
//     <label for="image">Image: </label>
//     <input
//       type="url"
//       id="edit-image"
//       name="image"
//       placeholder="Paste image url here"
//       required
//     />
//     <button type="submit" id="form-update-btn">
//       Update artist
//     </button>
//   </form>
// </dialog>;
