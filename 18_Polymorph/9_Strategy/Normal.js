// @ts-check
/* eslint-disable class-methods-use-this */

class Normal {
  // BEGIN (write your solution here)
  getTurn(field) {
    return field.reduceRight((acc, item, i) => {
      const j = item.indexOf(null);
      if (acc.length === 0 && j !== -1) {
        return [i, j];
      }
      //console.log(acc);
      return acc;

    }, []);

  }
  // END
}

export default Normal;
