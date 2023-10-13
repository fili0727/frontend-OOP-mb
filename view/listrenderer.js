
export class ListRenderer {
    constructor(container, itemRenderer, list) {
        this.container = document.querySelector(`#${container}`);
        this.itemRenderer = itemRenderer;
        this.list = list;
    }

    open() {
        createDialog.show();
    }

    render() {
        this.clear();

        this.list.forEach((item) => {
            const html = this.itemRenderer.render(item);

            this.container.insertAdjacentHTML('beforeend', html);

            const element = this.container.lastElementChild;

            element.addEventListener('click', () => {
                this.open();
            });
        });

    }

    clear() {
        this.container.innerHTML = '';
    }
}