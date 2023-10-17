export class addNewArtistForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new artist</strong></legend>
                <div id="input-add-artist">
                    <div>
                        <label  for="add-artist-name">Artist name</label>
                        <input required type="text" id="add-artist-name" name="add-artist-name">
                    </div>

                    <div>
                        <label for="add-career-start-date">Career start date:</label>
                        <input required type="date" id="add-career-start-date" name="add-career-start-date">
                    </div>

                    <div>
                        <label for="add-new-image">Add image url:</label>
                        <input required type="url" id="add-new-image" name="add-new-image">
                        </fieldset>
                        <button class="submit-in-add-new" type="submit">Submit</button>
                        <button class="cancel-in-add-new" type="button">Cancel</button>
                    </div>
                </div>
            </form>
            `;

        return html;
    }
}