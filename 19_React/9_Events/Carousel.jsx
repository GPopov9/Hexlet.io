import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { images } = props;

    this.state = {
      current: 0,
      images: images.map((url) => {
        const key = `${url}_${_.uniqueId()}`;
        return { url, key };
      }),
    };
  }

  getNext = (e) => {
    e.preventDefault();
    const { current, images } = this.state;
    const next = ((current + 1) % images.length);
    this.setState({ current: next });
  }

  getPrev = (e) => {
    e.preventDefault();
    const { current, images } = this.state;
    const prev = ((current + (images.length - 1)) % images.length);
    this.setState({ current: prev });
  }

  getImages() {
    const { current, images } = this.state;
    return images.map(({ url, key }, id) => {
      const classes = cn({
        'carousel-item': true,
        active: current === id,
      });
      return (
        <div key={key} className={classes}>
          <img alt="" className="d-block w-100" src={url} />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.getImages()}
        </div>
        <a href="#carousel" className="carousel-control-prev" onClick={this.getPrev} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a href="#carousel" className="carousel-control-next" onClick={this.getNext} role="button" data-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
// END