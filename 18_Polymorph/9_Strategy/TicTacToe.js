// @ts-check
/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */

/* import Easy from './strategies/Easy.js';
import Normal from './strategies/Normal.js';

const  mapping = {
  'easy': new Easy,
  'normal':new Normal
} */
/* class TicTacToe {
  // BEGIN (write your solution here)
  constructor(strategy = 'easy') {
    this.strategy = mapping[strategy];
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  }

  go(row = null, col = null) {
    if (row === null || col === null) {
      const [rowPC, colPC] = this.strategy.getTurn(this.field);
      this.field[rowPC][colPC] = 'X';
      return this.isWinner('X');
    }
    this.field[row][col] = '0';
    return this.isWinner('0');
  }

  isWinner(type) {
    if (this.field.find((row) => this.check(row, type))) {
      return true;
    }

    for (let i = 0; i < 3; i += 1) {
      if (this.check(this.field.map((el) => el[i]), type)) {
        return true;
      }
    }

    const diagonal1 = [this.field[0][0], this.field[1][1], this.field[2][2]];
    if (this.check(diagonal1, type)) {
      return true;
    }

    const diagonal2 = [this.field[2][0], this.field[1][1], this.field[0][2]];
    if (this.check(diagonal2, type)) {
      return true;
    }

    return false;
  }

  check(row, type) {
    return row.every((value) => value === type);
  }
  // END
}


export default TicTacToe;
 */