import { artists } from "../../controller/artistController.js";

export class addNewAlbumForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new album</strong></legend>
                    <div id="input-in-addNewAlbum">
                        <div>
                            <label for="add-album-title">Album title:</label>
                            <input type="text" id="add-album-title" name="add-album-title">
                        </div>

                        <div>
                            <label for="add-album-date">Release date:</label>
                            <input type="date" id="add-album-date" name="add-album-date">
                        </div>

                        <div>
                            <label for="artists-in-addNewAlbum">Add artist to track:</label>
                            <select id="artists-in-addNewAlbum" name="artists-in-addNewAlbum">
                            <option disabled selected>Select</option>
                            ${this.generateArtistsOptions()}
                            </select>  
                        </div>
                    </div>
                </fieldset>
                <button class="submit-in-add-new" type="submit">Submit</button>
                <button class="cancel-in-add-new" type="button">Cancel</button>
                
            </form>
            `;

        return html;
    }


    generateArtistsOptions() {
        let optionsHTML = '';

        artists.forEach(artist => {
            optionsHTML += /*HTML*/
                `
                <option value="${artist.id}">${artist.name}</option>
                `;
        });

        return optionsHTML;
    }
}