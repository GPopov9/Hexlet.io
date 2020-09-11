import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {


  render() {
    const { task, onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div>
            <button type="button" className="btn btn-primary btn-sm" onClick={onRemove(task)}>-</button>
          </div>
          <div className="col-10">{task.value}</div>
        </div>
        <hr/>
      </div>
    )
  }
}
// END

// BEGIN Tutor
export default class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;

    return (
      <div className="row">
        <div>
          <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
        </div>
        <div className="col-10">
          {task.text}
        </div>
      </div>
    );
  }
}
// END