src/actions/index.js
// BEGIN
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS');

export const addTask = ({ task }) => async (dispatch) => {
  const response = await axios.post(routes.tasksUrl(), { task });
  dispatch(addTaskSuccess({ task: response.data }));
};

export const removeTask = (task) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    const url = routes.taskUrl(task.id);
    await axios.delete(url);
    dispatch(removeTaskSuccess({ id: task.id }));
  } catch (e) {
    dispatch(removeTaskFailure());
    throw e;
  }
};
// END
src/components/NewTaskForm.jsx
  // BEGIN
  handleSubmit = async (values) => {
    const { addTask, reset } = this.props;
    try {
      await addTask({ task: values });
    } catch (e) {
      throw new SubmissionError({ _error: e.message });
    }
    reset();
  }
  // END
src/components/NewTaskForm.jsx
    // BEGIN
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-3">
          <Field name="text" required disabled={submitting} component="input" type="text" />
        </div>
        <input type="submit" disabled={pristine || submitting} className="btn btn-primary btn-sm" value="Add" />
        {error && <div className="ml-3">{error}</div>}
      </form>
    );
    // END
src/index.jsx
    // BEGIN
    applyMiddleware(thunk),
    // END
src/reducers/index.js
// BEGIN
const taskRemovingState = handleActions({
  [actions.removeTaskRequest]() {
    return 'requested';
  },
  [actions.removeTaskFailure]() {
    return 'failed';
  },
  [actions.removeTaskSuccess]() {
    return 'finished';
  },
}, 'none');
// END