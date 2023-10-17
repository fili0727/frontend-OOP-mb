export class addNewTrackForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new album</strong></legend>
                <label for="track-title">Album title:</label>
                <input type="text" id="add-track-title" name="add-track-title">

                <label for="duration-input">Track Duration:</label>
                <input id="duration-input" type="text" required pattern="[0-9]{2}:[0-9]{2}" placeholder="Format like mm:ss">
                </fieldset>
                <button class="submit-in-add-new" type="submit">Submit</button>
                <button class="cancel-in-add-new" type="button">Cancel</button>
            </form>
            `;

        return html;
    }
}