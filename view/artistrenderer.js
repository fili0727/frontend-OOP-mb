export class ArtistRenderer {
    render(artist) {
        const html =/*html*/
            `
            <article class="grid-item-artist">
                <h2>${artist.name}</h2>
                <p>Career start: ${artist.career_start}</p>
                <img src="${artist.img}" alt='No image'>
            </article>
            `;
        return html;
    }
}