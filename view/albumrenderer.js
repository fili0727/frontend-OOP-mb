export class AlbumRenderer {
    render(album) {
        const html =/*html*/
            `
            <article class="grid-item-artist album-item">
                <h2>${album.title}</h2>
                <p>Release date: ${album.release_date}</p>
            </article>
            `;
        return html;
    }
}