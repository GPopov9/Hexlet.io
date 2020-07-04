const render = (element, value, name) => {
    element.innerHTML = '';
    (value === '') ? (element.innerHTML = `<i>${name}</i>`) : (element.append(value));
  };
  
  export default () => {
    const stateName = {
      name: 'name',
      value: '',
      formCreated: false,
    };
  
    const stateEmail = {
      name: 'email',
      value: '',
      formCreated: false,
    };
  
    const nameBlock = document.querySelector('div[data-editable-target="name"]');
    const emailBlock = document.querySelector('div[data-editable-target="email"]');
  
    const createForm = (div, state) => () => {
      const submitHandler = (form) => (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        state.value = formData.get(state.name);
        state.formCreated = false;
        render(div, state.value, state.name);
      };
  
      if (!state.formCreated) {
        const form = document.createElement('form');
        form.addEventListener('submit', submitHandler(form));
        const inputText = document.createElement('input');
        const inputSubmit = document.createElement('input');
  
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('name', `${state.name}`);
        inputText.setAttribute('value', `${state.value}`);
        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', 'Save');
        form.append(inputText, inputSubmit);
  
        render(div, form);
        state.formCreated = true;
  
        inputText.focus();
      }
    };
  
    nameBlock.addEventListener('click', createForm(nameBlock, stateName));
    emailBlock.addEventListener('click', createForm(emailBlock, stateEmail));
  };
  // END


  // BEGIN Tutor's solution
const buildText = (name, { value }) => {
    const processedValue = value.trim();
    if (processedValue === '') {
      const i = document.createElement('i');
      i.innerHTML = name;
      return i;
    }
    return document.createTextNode(value);
  };
  
  const buildForm = (element, name, state, rerender) => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.setAttribute('value', state.value);
    form.appendChild(input);
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Save';
    form.appendChild(submit);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      state.value = formData.get(name);
      state.mode = 'text';
      rerender(element, name, state);
    });
  
    return { form, input, submit };
  };
  
  const render = (element, name, state) => {
    element.innerHTML = '';
    switch (state.mode) {
      case 'form': {
        const result = buildForm(element, name, state, render);
        element.appendChild(result.form);
        result.input.select();
        break;
      }
      case 'text':
        element.appendChild(buildText(name, state));
        break;
      default:
        throw new Error(`Unknown mode: ${state.mode}`);
    }
  };
  
  const handle = (element, name, state) => () => {
    if (state.mode === 'text') {
      state.mode = 'form';
      render(element, name, state);
    }
  };
  
  
  export default () => {
    const elements = document.querySelectorAll('[data-editable-target]');
    elements.forEach((element) => {
      const state = {
        mode: 'text',
        value: '',
      };
      const name = element.dataset.editableTarget;
      element.addEventListener('click', handle(element, name, state));
    });
  };
  // END