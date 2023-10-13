export class ArtistRenderer {

  constructor(artist) {
    this.item = artist
  }
  render() {
    const html =/*html*/
      `
            <article class="grid-item-artist">
                <h2>${this.item.name}</h2>
                <p>Career start: ${this.item.career_start}</p>
            </article>
            `;
    return html
  }
}