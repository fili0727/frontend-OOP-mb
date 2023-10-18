import { DetailDialog } from "../model/detailDialog.js";

export class ListRenderer {
    constructor(container, itemRenderer, list) {
        this.container = document.querySelector(`#${container}`);
        this.itemRenderer = itemRenderer;
        this.list = list;
    }

    render() {
        this.clear();

        this.list.forEach((item) => {
            const html = this.itemRenderer.render(item);

            this.container.insertAdjacentHTML('beforeend', html);

            const element = this.container.lastElementChild;
            if (item.getClassName() === 'Artist') {
                element.addEventListener('click', () => {
                    console.log(item);
                    const ArtistDetailDialog = new DetailDialog('detail-dialog', item);
                    ArtistDetailDialog.render();
                    ArtistDetailDialog.showDialog();
                });
            }

            if (item.getClassName() === 'Track') {
                element.addEventListener('click', () => {
                    console.log(item);
                });
            }
            if (item.getClassName() === 'Album') {
                element.addEventListener('click', () => {
                    console.log(item);
                });
            }
        });

    }

    clear() {
        this.container.innerHTML = '';
    }
}