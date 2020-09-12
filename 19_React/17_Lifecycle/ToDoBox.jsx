import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor() {
    super();
    this.state = {
      taskInput: '',
      tasks: []
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async () => {
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  }



  handleChangeInput = ({ target }) => {
    this.setState( { taskInput: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { taskInput, tasks } = this.state;
    const response = await axios.post(routes.tasksPath(), { text: taskInput });
    this.setState({ taskInput: '', tasks: [response.data, ...tasks] });
  }

  handleTaskActive = (id) => async () => {
    const { tasks } = this.state;
    await axios.patch(routes.activateTaskPath(id));
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    this.setState({ tasks: newTasks });

  }

  handleTaskFinish = (id) => async () => {
    const { tasks } = this.state;
    await axios.patch(routes.finishTaskPath(id));
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ tasks: newTasks });

  }

  renderActiveTasks(tasks) {
    return (
      <div className="todo-active-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleTaskFinish(task.id)} />
        ))}
      </div>
    );
  }

  renderFinishedTasks(tasks) {
    return (
      <div className="todo-finished-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleTaskActive(task.id)} />
        ))}
      </div>
    );
  }

  renderInput() {
    const { taskInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
        <div className="form-group">
          <input
            type="text"
            onChange={this.handleChangeInput}
            value={taskInput}
            required
            className="form-control mr-3"
            placeholder="I am going..."
          />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((t) => t.state === 'active');
    const finishedTasks = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderInput()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}
// END