export class addNewTrackForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new track</strong></legend>
                    <label for="track-title">Track title:</label>
                    <input type="text" id="add-track-title" name="add-track-title">

                    <label for="duration-input">Track duration:</label>
                    <input id="duration-input" type="text" required pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}" placeholder="Format like 00:00:00">
                </fieldset>
                <button class="submit-in-add-new" type="submit">Submit</button>
                <button class="cancel-in-add-new" type="button">Cancel</button>
            </form>
            `;

        return html;
    }
}