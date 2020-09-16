import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask, removeTask } from '../actions/index.js';

// BEGIN (write your solution here)
const mapStateToProps = ({ tasks, text }) => {
  const props = { tasks, text };
  return props;
};

class App extends React.Component {
  handleUpdateNewTaskText = (e) => {
    const { dispatch } = this.props;
    dispatch(updateNewTaskText(e.target.value));
  };


  handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = this.props;
    const task = { text, id: _.uniqueId() };
    dispatch(addTask(task));
  };

  handleRemoveTask = (id) => () => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  };



  renderTasks = (tasks) => {
    if (tasks.length === 0) {
      return null;
    }
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">{text}</span>
              <button type="button" className="close" onClick={this.handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { tasks, text } = this.props;
    return (
      <div className="col-5">
        <form action="" className="form-inline" onSubmit={this.handleAddTask}>
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={this.handleUpdateNewTaskText} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Add</button>
        </form>
        {this.renderTasks(tasks)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
// END