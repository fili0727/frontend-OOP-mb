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

        const html = /*html*/
            `<article class="dialog-item">
                <h2>${this.object.name}</h2>
                <p>Their carrer started in ${this.object.career_start}</p>
                <img src="${this.object.img}" alt='No image'>
                <button id='closeButton'>Close</button>
            </article>
            `;

        this.container.insertAdjacentHTML('beforeend', html);
    }
}