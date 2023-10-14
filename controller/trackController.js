import Track from "../model/track.js";
import { readTracks } from "../rest.js";
import { TrackRenderer } from "../view/trackrenderer.js";
import { ListRenderer } from "../view/listrenderer.js";

export const tracks = [];
export const searchedTrackList = [];

export const trackList = new ListRenderer('tracks-list', new TrackRenderer(), tracks);
export const updatedTrackList = new ListRenderer('tracks-list', new TrackRenderer(), searchedTrackList);

export async function instantiateTracks() {
    const trackData = await readTracks();
    for (const data of trackData) {
        const track = new Track(data);
        tracks.push(track);
    }
}

