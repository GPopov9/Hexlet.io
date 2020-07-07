

import i18next from 'i18next';
import onChange from 'on-change';
import resources from './locales';

const sorter = (value, key, arr) => {
  if (value === '(Asc)') {
    return arr.sort((a, b) => a[key].localeCompare(b[key], 'en'));
  }
  return arr.sort((a, b) => b[key].localeCompare(a[key], 'en'));
};

// BEGIN (write your solution here)
export default async () => {
  const en = {
    translation: {
      document: {},
      headers: {
        name: {
          name: 'Name',
          current: '(Asc)',
          valueUnsort: '(Unsorted)',
          valueAsc: '(Asc)',
          valueDesc: '(Desc)',
        },

        value: {
          name: 'Value',
          current: '(Unsorted)',
          valueUnsort: '(Unsorted)',
          valueAsc: '(Asc)',
          valueDesc: '(Desc)',
        },
      },
    },
  };

  await i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en,
    },
  });

  const container = document.querySelector('.container');
  const table = document.createElement('table');
  table.classList.add('table');
  container.append(table);
  const tbody = document.createElement('tbody');
  table.append(tbody);
  const rowHeader = document.createElement('tr');

  const headerName = document.createElement('th');
  const hrefName = document.createElement('a');
  hrefName.setAttribute('href', '');

  let innerName = i18next.t('headers.name.name');
  let statusName = i18next.t('headers.name.current');

  hrefName.innerHTML = `${innerName} ${statusName}`;
  headerName.append(hrefName);
  rowHeader.append(headerName);

  const headerValue = document.createElement('th');
  const hrefValue = document.createElement('a');
  hrefValue.setAttribute('href', '');

  let innerValue = i18next.t('headers.value.name');
  let statusValue = i18next.t('headers.value.current');

  hrefValue.innerHTML = `${innerValue} ${statusValue}`;
  headerValue.append(hrefValue);
  rowHeader.append(headerValue);

  tbody.append(rowHeader);

  const render = (value, element) => {
    while (tbody.children.length > 1) {
      tbody.removeChild(tbody.lastChild);
    }

    const objValues = Object.values(en.translation.document);
    innerValue = i18next.t('headers.value.name');
    statusValue = i18next.t('headers.value.current');
    innerName = i18next.t('headers.name.name');
    statusName = i18next.t('headers.name.current');
    hrefName.innerHTML = `${innerName} ${statusName}`;
    hrefValue.innerHTML = `${innerValue} ${statusValue}`;

    const sorted = sorter(value, element, objValues);
    sorted.forEach(({ name }) => {
      const rowTable = document.createElement('tr');
      const cellName = document.createElement('td');
      const cellValue = document.createElement('td');
      const nameInner = i18next.t(`document.${name}.name`);
      const valueInner = i18next.t(`document.${name}.value`);

      cellName.innerHTML = nameInner;
      cellValue.innerHTML = valueInner;

      rowTable.append(cellName, cellValue);
      tbody.appendChild(rowTable);
    });
  };

  const watcherEn = onChange(en, (path, value) => {
    let element;
    (path.includes('name')) ? element = 'name' : element = 'value';
    if (path.includes('name')) {
      en.translation.headers.value.current = i18next.t('headers.value.valueUnsort')
    } else {
      en.translation.headers.name.current = i18next.t('headers.name.valueUnsort')
    }
    render(value, element);
  });

  hrefName.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.textContent.includes('(Asc)')) {
      watcherEn.translation.headers.name.current = i18next.t('headers.name.valueDesc');
    } else if (e.target.textContent.includes('(Desc)')) {
      watcherEn.translation.headers.name.current = i18next.t('headers.name.valueAsc');
    } else {
      watcherEn.translation.headers.name.current = i18next.t('headers.name.valueAsc');
    }
  });

  hrefValue.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.textContent.includes('(Asc)')) {
      watcherEn.translation.headers.value.current = i18next.t('headers.value.valueDesc');
    } else if (e.target.textContent.includes('(Desc)')) {
      watcherEn.translation.headers.value.current = i18next.t('headers.value.valueAsc');
    } else {
      watcherEn.translation.headers.value.current = i18next.t('headers.value.valueAsc');
    }
  });
  const document1 = document.location;
  Object.entries(document1).forEach(([name, value]) => {
    if (typeof value !== 'object' && typeof value !== 'function' && value !== '') {
      en.translation.document[name] = { name, value };
    }
  });

  render('(Asc)', 'name');
};
