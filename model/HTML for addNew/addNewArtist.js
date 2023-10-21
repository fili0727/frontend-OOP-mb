import { albums } from "../../controller/albumController.js";
import { tracks } from "../../controller/trackController.js";

export class addNewArtistForm {
    render() {
        const html = /*html*/
            `
            <form id="add-new-artist-form">
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
                            <label for="add-new-image">Add image url:</label>
                            <input required type="url" id="add-new-image" name="add-new-image">
                        </div>
                    </div>
                </fieldset>
                <fieldset style="margin-bottom:5px">
                    <legend style="font-size:20px"><strong>Music data for artist:</strong></legend>
                    <div id="input-musicData-addArtist">
                        <div>
                            <label for="add-album-title-newArtist">Album title:</label>
                            <input type="text" id="add-album-title-newArtist" name="add-album-title-newArtist">
                        </div>

                        <div>
                            <label for="add-album-date-newArtist">Release date:</label>
                            <input type="date" id="add-album-date-newArtist" name="add-album-date-newArtist">
                        </div>

                        <fieldset>
                            <legend style="font-size:16px"><strong>Track 1:</strong></legend>
                            <div id="addTracks-newArtist">
                                <div>
                                    <label for="add-track-title-newArtist1">Track title:</label>
                                    <input type="text" id="add-track-title-newArtist1" name="add-track-title-newArtist1">
                                </div>

                                <div>
                                    <label for="duration-input-newArtist1">Track duration:</label>
                                    <input id="duration-input-newArtist1" type="text" required pattern="([0-5][0-9]):[0-5][0-9]:[0-5][0-9]" placeholder="Format like 00:00:00">
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend style="font-size:16px"><strong>Track 2:</strong></legend>
                            <div id="addTracks-newArtist">
                                <div>
                                    <label for="add-track-title-newArtist2">Track title:</label>
                                    <input type="text" id="add-track-title-newArtist2" name="add-track-title-newArtist2">
                                </div>

                                <div>
                                    <label for="duration-input-newArtist2">Track duration:</label>
                                    <input id="duration-input-newArtist2" type="text" required pattern="([0-5][0-9]):[0-5][0-9]:[0-5][0-9]" placeholder="Format like 00:00:00">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </fieldset>

                <button class="submit-in-add-new" type="submit">Submit</button>
                <button class="cancel-in-add-new" type="button">Cancel</button>
            </form>
            `;

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