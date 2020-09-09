
import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = { opened };
    //console.log(text);
  }

  toggleText = (e) => {
    e.preventDefault();
    this.setState(({ opened }) => ({ opened: !opened}));
  }

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    //console.log(text);
    const divClasses = cn({'collapse': true, 'show': opened})
    return (
      <div>
        <p>
          <a className="btn btn-primary" onClick={this.toggleText} href="#">Link with href</a>
        </p>
        <div className={divClasses}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}