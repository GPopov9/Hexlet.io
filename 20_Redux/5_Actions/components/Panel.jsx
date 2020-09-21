import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import faker from '../faker.js';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const actionCreators = {
  cleanTasks: actions.cleanTasks,
  replaceTasks: actions.replaceTasks,
}

class Panel extends React.Component {
  handleCleanTasks = () => {
    const { cleanTasks } = this.props;
    cleanTasks();
  }

  handleGenerateTasks = () => {
    const { replaceTasks } = this.props;
    const getTask = () => ({ id: _.uniqueId(), text: faker.lorem.sentence() })
    const newTasks = Array.from({length: 5}).map(() => getTask());
    replaceTasks(newTasks);
  }

  render() {
    return (
      <div className="py-3">
        <button type="button" data-test="clean" className="btn btn-warning btn-sm mr-3" onClick={this.handleCleanTasks}>Clean</button>
        <button type="button" data-test="generate" className="btn btn-primary btn-sm" onClick={this.handleGenerateTasks}>Generate</button>
      </div>
    )
  }
}

export default connect(null, actionCreators)(Panel);
// END