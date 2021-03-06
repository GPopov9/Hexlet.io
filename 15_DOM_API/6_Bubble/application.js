// @ts-check

const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        //cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

const distance = (a, b) => {
  const active = Math.abs(a.cellIndex - b.cellIndex);
  const clicked = Math.abs(a.parentElement.rowIndex - b.parentElement.rowIndex);
  return active + clicked;
};

// BEGIN (write your solution here)
export default () => {
  const table = generatePlayingField();
  const root = document.querySelector('.gem-puzzle');
  root.append(table);

  const handle = (e) => {
    e.preventDefault();
    const cellClicked = e.target;
    const cellActive = document.querySelector('.table-active');

    if (distance(cellActive, cellClicked) === 1) {
      cellActive.classList.remove('table-active');
      cellActive.textContent = cellClicked.textContent;
      cellClicked.classList.add('table-active');
      cellClicked.textContent = '';
    }
  };

  table.addEventListener('click', handle);
};
// END

/* // BEGIN Tutor
const getDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export default () => {
  let currentPosition = { x: 3, y: 3 };
  const tableEl = generatePlayingField();

  tableEl.addEventListener('click', (e) => {
    const cell = e.target;
    const { cellIndex, parentElement: { rowIndex } } = cell;
    const newPosition = { y: rowIndex, x: cellIndex };
    const distance = getDistance(currentPosition, newPosition);
    if (distance !== 1) {
      return;
    }
    const point = tableEl.rows[currentPosition.y].cells[currentPosition.x];
    point.textContent = cell.textContent;
    point.classList.remove('table-active');
    cell.textContent = '';
    cell.classList.add('table-active');
    currentPosition = { x: cellIndex, y: rowIndex };
  });

  const root = document.querySelector('.gem-puzzle');
  root.append(tableEl);
};
// END */