export class addNewAlbumForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new album</strong></legend>
                <label for="album-title">Album title:</label>
                <input type="text" id="add-album-title" name="add-album-title">

                <label for="add-album-date">Release date:</label>
                <input type="date" id="add-album-date" name="add-album-date">
                </fieldset>
                <button class="submit-in-add-new" type="submit">Submit</button>
                <button class="cancel-in-add-new" type="button">Cancel</button>
            </form>
            `;

        return html;
    }
}