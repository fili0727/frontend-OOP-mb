import { albums } from "../../controller/albumController.js";
import { tracks } from "../../controller/trackController.js";

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
                            <label for="add-career-start-date">Career start year:</label>
                            <input required type="number" id="add-career-start-year" name="add-career-start-year" min="1900" max="2099" step="1" placeholder="YYYY">
                        </div>

                        <div>
                            <label for="tracks-in-addNewArtist">Add track:</label>
                            <select id="tracks-in-addNewArtist" name="tracks-in-addNewArtist">
                            <option disabled selected>Select</option>
                            ${this.generateTrackOptions()}
                            </select>
                        </div>

                        <div>
                            <label for="tracks-in-addNewArtist">Add track:</label>
                            <select id="tracks-in-addNewArtist" name="tracks-in-addNewArtist">
                            <option disabled selected>Select</option>
                            ${this.generateTrackOptions()}
                            </select>
                        </div>

                        <div>
                            <label for="tracks-in-addNewArtist">Add track:</label>
                            <select id="tracks-in-addNewArtist" name="tracks-in-addNewArtist">
                            <option disabled selected>Select</option>
                            ${this.generateTrackOptions()}
                            </select>
                        </div>

                        <div>
                            <label for="tracks-in-addNewArtist">Add track:</label>
                            <select id="tracks-in-addNewArtist" name="tracks-in-addNewArtist">
                            <option disabled selected>Select</option>
                            ${this.generateTrackOptions()}
                            </select>
                        </div>

                        <div>
                        <label for="albums-in-addNewTracks">Add  to album:</label>
                        <select id="albums-in-addNewTracks" name="albums-in-addNewTracks">
                        <option disabled selected>Select</option>
                        ${this.generateAlbumsOptions()}
                        </select>
                    </div>

                        <div>
                            <label for="add-new-image">Add image url:</label>
                            <input type="url" id="add-new-image" name="add-new-image">
                        </div>
                    </div>
                </fieldset>
                        <button class="submit-in-add-new" type="submit">Submit</button>
                        <button class="cancel-in-add-new" type="button">Cancel</button>
            </form>
            `;
        // { album_title: string, album_release_date: string, artist_name: string, artist_career_start: string, tracks_title: [string], tracks_duration: [time]; }

        return html;
    }


    generateTrackOptions() {
        let optionsHTML = '';

        tracks.forEach(track => {
            optionsHTML += /*HTML*/
                `
                <option value="${track.id}">${track.title}</option>
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