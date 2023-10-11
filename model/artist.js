export default class Artist {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.career_start = obj.career_start;
    this.img = obj.img;
    this.albums = obj.albums
  }

  getAlbums() {
    return this.albums
  }

  setAlbum(album) {
    this.albums.push(album.id)
  }

  getArtistId() {
    return this.id
  }
}