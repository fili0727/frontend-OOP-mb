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

            element.addEventListener('click', () => {
                const ArtistDetailDialog = new DetailDialog('detail-dialog', item);
                console.log(item);
                ArtistDetailDialog.render();
                ArtistDetailDialog.showDialog();
            });
        });

    }

    clear() {
        this.container.innerHTML = '';
    }
}