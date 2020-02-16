/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)
export default (moneyArray, currency) => {
    let result = 0;
    for (const item of moneyArray) {
      const money = item.slice(0, 3);
      const qty = Number(item.slice(4));
      if (money === currency) {
        result += qty;
      }
    }
    return result;
  };
  
  // END
  
  // BEGIN tutor
  const getTotalAmount = (money, currency) => {
    let sum = 0;
  
    for (const bill of money) {
      const currentCurrency = bill.slice(0, 3);
      if (currentCurrency !== currency) {
        continue;
      }
      const denomination = Number(bill.slice(4));
      sum += denomination;
    }
  
    return sum;
  };
  
  export default getTotalAmount;
  // END