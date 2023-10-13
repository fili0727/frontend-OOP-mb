export class ListRenderer {
    constructor(container, itemRenderer, list) {
        this.container = document.querySelector(`#${container}`)
        this.renderers = list.map(item => new itemRenderer(item));
        this.list = list
    }

    render() {
        this.clear();

        this.renderers.forEach((renderer) => {
            const html = renderer.render()

            this.container.insertAdjacentHTML('beforeend', html)
        })

    }

    clear() {
        this.container.innerHTML = '';
    }

}