export default class Track {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.duration = obj.duration;
  }

  getClassName() {
    return 'Track';
  }
}
