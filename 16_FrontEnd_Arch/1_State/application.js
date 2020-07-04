// @ts-check

const notebooks = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

// BEGIN (write your solution here)

const render = (state) => {
  const div = document.querySelector('.result');
  const filterModel = (item) => {
    const { processor, memory, frequency } = item;
    const isProcessor = state.processor === processor || state.processor === '';
    const isMemory = +state.memory === memory || state.memory === '';
    const isFrequencyMin = +state.frequencyMin <= frequency || state.frequencyMin === '';
    const isFrequencyMax = +state.frequencyMax >= frequency || state.frequencyMax === '';

    return isProcessor && isMemory && isFrequencyMin && isFrequencyMax;
  };

  const renderModel = ({ model }) => `<li>${model}</li>`;
  const result = notebooks.filter(filterModel).map(renderModel).join('');

  div.innerHTML = result.length ? `<ul>${result}</ul>` : '';
};

const run = () => {
  const state = {
    processor: '',
    memory: '',
    frequencyMin: '',
    frequencyMax: '',
  };

  const selectProcessor = document.querySelector('select[name="processor_eq"]');
  const selectMemory = document.querySelector('select[name="memory_eq"]');
  const inputFreqGte = document.querySelector('input[name="frequency_gte"]');
  const inputFreqLte = document.querySelector('input[name="frequency_lte"]');

  const changeProcessor = (e) => {
    state.processor = e.target.value;
    render(state);
  };

  const changeMemory = (e) => {
    state.memory = e.target.value;
    render(state);
  };

  const inputMin = (e) => {
    state.frequencyMin = e.target.value;
    render(state);
  };

  const inputMax = (e) => {
    state.frequencyMax = e.target.value;
    render(state);
  };

  selectProcessor.addEventListener('change', changeProcessor);
  selectMemory.addEventListener('change', changeMemory);
  inputFreqGte.addEventListener('input', inputMin);
  inputFreqLte.addEventListener('input', inputMax);

  render(state);
};

export default run;

/* // BEGIN tutor
// This solution is kind of library. It can work with any forms without changing main logic.
// Just by adding as many predicates as needed
const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
};

const filterItems = (query, items) => {
  const fields = Object.keys(query);
  const activeFields = fields.filter((field) => query[field]);
  const result = activeFields.reduce((acc, field) => {
    const [name, predicateName] = field.split('_');
    const match = predicates[predicateName];
    return acc.filter((item) => match(query[field])(item[name]));
  }, items);
  return result;
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  const filteredNotebooks = filterItems(state.filter, notebooks);
  if (filteredNotebooks.length === 0) {
    resultElement.innerHTML = '';
    return;
  }
  const html = `<ul>${filteredNotebooks.map((n) => `<li>${n.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
};

export default () => {
  const state = {
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_gte: null,
      frequency_lte: null,
    },
  };

  const items = [
    { name: 'processor_eq', eventType: 'change' },
    { name: 'memory_eq', eventType: 'change' },
    { name: 'frequency_gte', eventType: 'input' },
    { name: 'frequency_lte', eventType: 'input' },
  ];
  items.forEach(({ name, eventType }) => {
    const element = document.querySelector(`[name="${name}"]`);
    element.addEventListener(eventType, ({ target }) => {
      state.filter[target.name] = target.value === '' ? null : target.value;
      render(state);
    });
  });
  render(state);
};
// END */