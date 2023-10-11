export class ListRenderer {
    constructor(container, itemRenderer, list) {
        this.container = document.querySelector(`#${container}`)
        this.itemRenderer = itemRenderer
        this.list = list
    }

    render() {
        this.clear();

        this.list.forEach((item) => {
            const html = this.itemRenderer.render(item)

            this.container.insertAdjacentHTML('beforeend', html)
        })

    }

    clear() {
        this.container.innerHTML = '';
    }
}