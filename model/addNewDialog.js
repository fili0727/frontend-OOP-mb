import { addNewSubmitted } from "../controller/addNewSubmitted.js";

export class addNewDialog {
    constructor(dialog) {
        this.dialog = dialog;
    }

    render() {
        const container = document.querySelector("#add-new-selected-dialog");
        container.innerHTML = '';
        const html = this.dialog.render();

        container.insertAdjacentHTML('beforeend', html);

        container.lastElementChild.addEventListener('submit', (event) => {
            addNewSubmitted(event);
        });

        container.lastElementChild.querySelector(".cancel-in-add-new").addEventListener('click', () => container.close());
    }

    open() {
        const container = document.querySelector("#add-new-selected-dialog");

        container.showModal();
    }

}