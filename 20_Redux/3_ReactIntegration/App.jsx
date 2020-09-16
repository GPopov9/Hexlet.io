/* eslint-disable react/static-property-placement */
import React from 'react';

// BEGIN (write your solution here)
export default class App extends React.Component {
  static defaultProps = {
    text: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    const { dispatch, updateText } = this.props;
    dispatch(updateText(e.target.value));
  }

  handleReset = (e) => {
    e.preventDefault();
    const { dispatch, resetText } = this.props;
    dispatch(resetText());
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <form>
          <input type="text" value={text} onChange={this.handleChange} />
          <button type="button" onClick={this.handleReset}>Reset</button>
        </form>
        {text && <div>{text}</div>}
      </div>
    );
  }
}
// END