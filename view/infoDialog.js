"use strict"
export default class Dialog {
   constructor(id) {
    // create dialog-element
    this.dialog = document.createElement("dialog");
    this.dialog.id = id;
    document.querySelector("body").insertAdjacentElement("afterend", this.dialog);
  }
  

  show() {
    this.dialog.showModal();
  }

  render(artist) {
    const html = /*HTML*/
    `<h2>${artist.name}</h2>
      <img src="${artist.img}" alt="Picture of artist(s)">
      <form action="" method="dialog" id="artist-info-dialog">
      <p>Started career in: ${artist.career_start}</p>
      <p>Has had parents: Yes</p>
      <p>Is opposed to vaccines: Yes</p>
      <p>Zionist: No</p>
      <ul>Albums:
      <li>Best of ${artist.name} since ${artist.career_start}</li>
      </ul>
        <button>Close</button>
      </form>`

    this.dialog.innerHTML = html;

  }

  close() {
    const form = this.dialog.querySelector("form");

    // clear form
    form.reset();
    
  }
  
}

