export class TrackRenderer {
    render(track) {
        const html =/*html*/
            `
            <article class="grid-item-artist track-item">
                <h2>${track.title}</h2>
                <p>Duration: ${track.duration}</p>
            </article>
            `;
        return html;
    }
}