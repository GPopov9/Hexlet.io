// @ts-check
/* eslint-disable no-param-reassign, no-console  */

// import _ from 'lodash';
import * as yup from 'yup';

import onChange from 'on-change';
import axios from 'axios';

// Never hardcore urls
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required()
    .oneOf(
      [yup.ref('password'), null],
      'Password confirmation does not match to password',
    ),
});

const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// BEGIN (write your solution here)

export default () => {
  const state = {
    form: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    errors: {},
  };

  const form = document.querySelector('[data-form="sign-up"]');
  const submit = form.querySelector('input[type="submit"]');
  const container = document.querySelector('[data-container="sign-up"]');

  const renderErrors = (values) => {
    if (Object.keys(values).length === 0) {
      submit.disabled = false;
    }
    const invalidFeedbacks = [...document.querySelectorAll('.invalid-feedback')];
    invalidFeedbacks.forEach((invalidFeedback) => invalidFeedback.remove());
    const invalidInputs = [...document.querySelectorAll('.is-invalid')];
    invalidInputs.forEach((invalidInput) => invalidInput.classList.remove('is-invalid'));

    Object.entries(values).forEach(([name, message]) => {
      const input = document.querySelector(`[name=${name}]`);
      input.classList.add('is-invalid');
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('invalid-feedback');
      errorDiv.textContent = message;
      input.parentElement.append(errorDiv);
    });
  };

  const renderSignUp = () => {
    submit.disabled = true;
    container.innerHTML = 'User Created!';
  };

  const watcherErrors = onChange(state, () => {
    renderErrors(state.errors);
  });

  form.addEventListener('input', (e) => {
    state.form[e.target.name] = e.target.value;
    try {
      schema.validateSync(state.form, { abortEarly: false });
    } catch (error) {
      watcherErrors.errors = error.inner.reduce((acc, { path, message }) => (
        { ...acc, [path]: message }
      ), {});
      return;
    }
    watcherErrors.errors = {};
  });

  const signUp = async (formReady) => {
    try {
      await axios.post(routes.usersPath(), formReady);
      errorMessages.network.error = '';
    } catch (error) {
      errorMessages.network.error = error.message;
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderSignUp();
    signUp(state.form);
  });
};
