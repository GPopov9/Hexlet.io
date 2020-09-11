import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form : {
        input: ''
      },
      tasks: []
    }
  }

  handleChangeInput = ( { target }) => {
    const value = target.value;
    this.setState({ form: { input: value } })
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { form, tasks } = this.state;
    const task = { id: uniqueId(), value: form.input };
    this.setState({ form: { input: '' }, tasks: [task, ...tasks] });
  }

  handleRemove = (task) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const newItems = tasks.filter(({ id , value }) => id !== task.id );
    this.setState({tasks: newItems});
  }

  render() {
    const { form, tasks } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3" onSubmit={this.handleAdd}>
            <div className="form-group">
              <input type="text" value={form.input} onChange={this.handleChangeInput} className="form-control mr-3" placeholder="I am going..." required />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {tasks.map(({id, value}) => <Item key ={id} onRemove={this.handleRemove} task={{id, value}} /> )}
      </div>
    )
  }
}
// END

// BEGIN Tutor
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: '', tasks: [] };
  }

  handleChangeTask = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  }

  handleRemoveTask = (removingId) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(({ id }) => id !== removingId) });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { tasks, newTaskText } = this.state;
    const newTask = { id: uniqueId(), text: newTaskText };
    this.setState({ newTaskText: '', tasks: [newTask, ...tasks] });
  }

  renderForm() {
    const { newTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className="todo-form form-inline mx-3">
        <div className="form-group">
          <input
            type="text"
            onChange={this.handleChangeTask}
            value={newTaskText}
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
    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Item task={task} onRemove={this.handleRemoveTask(task.id)} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
// END