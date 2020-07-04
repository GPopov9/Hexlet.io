// BEGIN (write your solution here) (write your solution here)
export default () => {
    const progressBar = document.querySelector('progress');
    let value = +progressBar.value;
  
    const recurrent = () => {
      value += 1;
      if (value > 100) {
        return;
      }
      progressBar.setAttribute('value', `${value}`);
      setTimeout(recurrent, 100);
    };
  
    setTimeout(recurrent, 0);
  };
  // END

  // BEGIN (write your solution here) - Tutor
export default () => {
    const element = document.querySelector('progress');
    const handler = (counter = 0) => {
      if (counter <= 100) {
        element.setAttribute('value', counter);
        setTimeout(() => handler(counter + 1), 1000);
      }
    };
    handler();
  };
  // END