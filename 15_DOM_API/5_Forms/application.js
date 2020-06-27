// BEGIN Tutor
const render = (element, data) => {
    const div = document.createElement('div');
    const { email, name, comment } = data;
    div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    `;
    element.replaceWith(div);
  };
  
  export default () => {
    const formElement = document.querySelector('.feedback-form');
    const handle = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
  
      render(formElement, Object.fromEntries(formData));
    };
    formElement.addEventListener('submit', handle);
  };
  // END

  // BEGIN (write your solution here) - Georgy
export default () => {
    const form = document.querySelector('.feedback-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const f = document.querySelector('.feedback-form');
      const div = document.createElement('div');
      const p = document.createElement('p');
      const textP = document.createTextNode('Feedback has been sent');
      p.appendChild(textP);
      div.appendChild(p);
      f.parentNode.replaceChild(div, f);    
      [...formData.entries()].forEach(([key, value]) => {
        const val = `${key[0].toUpperCase()}${key.slice(1)}: ${value}`;
        const textDiv = document.createTextNode(val);
        const newDiv = document.createElement('div');
        newDiv.appendChild(textDiv);
        div.appendChild(newDiv);
      });
    });
  };
  
  
  // END
  