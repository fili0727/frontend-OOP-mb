import { albums } from "../../controller/albumController.js";
import { artists } from "../../controller/artistController.js";

export class addNewTrackForm {
    render() {
        const html = /*html*/
            `
            <form>
                <fieldset style="margin-bottom:5px">
                <legend style="font-size:20px"><strong>Add new track</strong></legend>
                <div id="input-in-addNewTrack">
                    <div>
                        <label for="track-title">Track title:</label>
                        <input type="text" id="add-track-title" name="add-track-title">
                    </div>

                    <div>
                        <label for="duration-input">Track duration:</label>
                        <input id="duration-input" type="text" required pattern="([0-5][0-9]):[0-5][0-9]:[0-5][0-9]" placeholder="Format like 00:00:00">
                    </div>

                    <div>
                        <label for="albums-in-addNewTracks">Add  to album:</label>
                        <select id="albums-in-addNewTracks" name="albums-in-addNewTracks">
                        <option disabled selected>Select</option>
                        ${this.generateAlbumsOptions()}
                        </select>
                    </div>

                    <div>
                        <label for="artists-in-addNewTracks">Add artist:</label>
                        <select id="artists-in-addNewTracks" name="artists-in-addNewTracks">
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

    generateAlbumsOptions() {
        let optionsHTML = '';

        albums.forEach(album => {
            optionsHTML += /*HTML*/
                `
            <option  value="${album.id}">${album.title}</option>
        `;
        });

        return optionsHTML;
    }
}