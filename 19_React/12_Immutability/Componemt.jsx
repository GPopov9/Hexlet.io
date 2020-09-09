import _ from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: []
    }
  }

  handleIncButton = () => {
    const { buttons } = this.state;
    const newCount = buttons.length === 0 ? 1 : buttons[0].value + 1;
    const button = { id: _.uniqueId(), value: newCount };
    this.setState({ count: newCount, buttons: [button, ...buttons]});
  }

  handleDecButton = () => {
    const { buttons } = this.state;
    const newCount = buttons.length === 0 ? -1 : buttons[0].value - 1;
    const button = { id: _.uniqueId(), value: newCount };
    this.setState({ count: newCount, buttons: [button, ...buttons]});
  }

  handleRemoveButton = (currentId) => () => {
    const { buttons } = this.state;
    this.setState({ buttons: buttons.filter(({ id }) => id !== currentId) });
  }

  renderButtons() {
    const { buttons } = this.state;
    if (buttons.length === 0) {
      return null
    }
    return (
      <div className="list-group">
        {buttons.map(({ id, value }) => (
          <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.handleRemoveButton(id)}>
            {value}
          </button>
      ))}
      </div>
    )
  }

  render () {
    return (
      <div>
        <div className="btn-group" role="group">
          <button type="button" className="btn hexlet-inc" onClick={this.handleIncButton}>+</button>
          <button type="button" className="btn hexlet-dec" onClick={this.handleDecButton}>-</button>
        </div>
        {this.renderButtons()}
      </div>
    );


  }
}
// END