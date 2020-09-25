import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  // BEGIN (write your solution here)
  const { tasks: { byId, allIds }, tasksUIState } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks, tasksUIState }
  // END
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

class Tasks extends React.Component {
  // BEGIN (write your solution here)
  handleInverseTheme = (task) => (e) => {
    e.preventDefault();
    const { inverseTaskTheme } = this.props;
    inverseTaskTheme({ task });
  };

  renderTask = (task) => {
    const { tasksUIState } = this.props;
    const classesTheme = tasksUIState[task.id].theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
    const classesAll = cn(classesTheme, { 'list-group-item d-flex': true });

    console.log(classesAll);

    return (
      <li key={task.id} className={classesAll}>
        <span className="mr-auto">
          <a href="#" className="text-reset" onClick={this.handleInverseTheme(task)}>{task.text}</a>
        </span>
      </li>
    );
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(this.renderTask)}
        </ul>
      </div>
    );
  // END
  }
};

export default connect(mapStateToProps, actionCreators)(Tasks);
