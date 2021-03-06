import React from 'react';

// BEGIN (write your solution here)
export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    // console.log(children);
    return <ul className='list-group'>
            {React.Children.map(children, (child) => <li className='list-group-item'>{child}</li> )}
            </ul>
  }
}
// END