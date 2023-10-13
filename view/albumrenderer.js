export class AlbumRenderer {
    constructor(albums) {
        this.item = albums
    }
    render() {
        const html =/*html*/
            `
            <article class="grid-item-artist">
                <h2>${this.item.title}</h2>
                <p>Release date: ${this.item.release_date}</p>
            </article>
            `;
        return html;
    }
}