export default class Album {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.release_date = obj.release_date;
    this.tracks = obj.tracks;
  }

  getAlbumTitle() {
    return this.title;
  }

  getAlbumReleaseDate() {
    return this.release_date;
  }

  getClassName() {
    return 'Album';
  }

  getTrackIds() {
    return this.tracks.map(track => track);
  }
}
