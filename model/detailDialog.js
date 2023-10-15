import { albums } from "../controller/albumController.js";

export class DetailDialog {
    constructor(container, object) {
        this.container = document.querySelector(`#${container}`);
        this.object = object;
    }

    showDialog() {
        this.container.showModal();
    }

    closeDialog() {
        this.container.close();
    }

    clearDialog() {
        this.container.innerHTML = '';
    }

    render() {
        this.clearDialog();

        const albumIds = this.object.albums;
        const artistAlbums = albumIds.map(albumId => albums.find(album => albumId === album.id));
        const trackIds = artistAlbums.map(album => album.tracks);

        const html = /*html*/
            `<article class="dialog-item">
                <h2>${this.object.name}</h2>
                <h3>Carreer start:</h3>
                <p>${this.object.career_start}</p>
                <h3>Appears on albums:</h3>
                <ul>
                    ${artistAlbums.map(album => `<li>
                        ${album.title}
                    </li>`).join('')}
                </ul>
                <h3>Appears on tracks:</h3>
                <img class="detail-dialog-img" src="${this.object.img}" alt='No image'>
                <button id='closeButton'>X</button>
            </article>
            `;

        this.container.insertAdjacentHTML('beforeend', html);

        const closeButton = document.querySelector('#closeButton');
        closeButton.addEventListener('click', () => {
            this.closeDialog();
        });
    }
}