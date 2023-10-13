export default class Album {
  constructor(obj) {
    this.title = obj.title;
    this.release_date = obj.release_date;
  }

  getAlbumTitle() {
    return this.title;
  }

  getAlbumReleaseDate() {
    return this.release_date;
  }
}
