// @ts-check

// BEGIN (write your solution here)
const make = (numer, denom) => {
    const result =  {
      numer,
      denom, 
      getNumer() {
        return this.numer;
      },
      getDenom() {
        return this.denom;
      },
      toString() {
        return `${this.numer}/${this.denom}`;
      },
      add(rat2) {
        const addNumer = this.numer * rat2.getDenom() + this.denom * rat2.getNumer();
        const addDenom = this.denom * rat2.getDenom();
        return make(addNumer, addDenom); 
      }
    }
    return result;
  };
  
  export default make;
  // END
  
/*   // BEGIN (Tutor)
const make = (numer, denom) => ({
    numer,
    denom,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
    add(rational) {
      const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
      const newDenom = this.getDenom() * rational.getDenom();
      return make(newNumer, newDenom);
    },
  });
  
  export default make;
  // END */