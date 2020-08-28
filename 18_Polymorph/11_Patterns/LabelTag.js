export default class LabelTag {
  constructor(text, tag) {
    this.text = text;
    this.tag = tag;
  }

  render() {
    return `<label>${this.text}${this.tag}</label>`;
  }

  toString() {
    return this.render();
  }
}