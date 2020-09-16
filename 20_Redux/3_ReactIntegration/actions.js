// BEGIN (write your solution here)
export const resetText = () => ({
  type: 'RESET_TEXT',
  payload: {},
});

export const updateText = (value) => ({
  type: 'UPDATE_TEXT',
  payload: {
    value
  },
});
// END