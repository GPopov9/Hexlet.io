import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      right: false,
    }
  }

  onClick = (e) => {
    const elements = e.target.classList;
    elements.contains('left') ? this.setState({ left: true, right: false }) : this.setState({ left: false, right: true }) ;
  }

  render() {
    const buttonsClassLeft = cn({'btn': true, 'btn-secondary': true, 'left': true, 'active': this.state.left});
    const buttonsClassRight = cn({'btn': true, 'btn-secondary': true, 'right': true, 'active': this.state.right});
    return <div className="btn-group" role="group">
            <button type="button" className={buttonsClassLeft} onClick={this.onClick}>Left</button>
            <button type="button" className={buttonsClassRight} onClick={this.onClick}>Right</button>
           </div>
  }
}