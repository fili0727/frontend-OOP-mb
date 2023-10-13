export class TrackRenderer {
    constructor(track) {
        this.item = track
    }
    render() {
        const html =/*html*/
            `
            <article class="grid-item-artist">
                <h2>${this.item.title}</h2>
                <p>Duration: ${this.item.duration}</p>
            </article>
            `;
        return html
    }
}