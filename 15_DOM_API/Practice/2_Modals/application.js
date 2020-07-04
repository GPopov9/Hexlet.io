// BEGIN (write your solution here)
export default () => {
    const modals = document.querySelectorAll('button[data-toggle="modal"]');
    const dismisses = document.querySelectorAll('button[data-dismiss="modal"]');
    
    const handlerModal = (e) => {
      const { currentTarget } = e;
      const id = (currentTarget.dataset.target).slice(1);
      const current = document.getElementById(id); 
      current.classList.add('show');
      current.style.display = 'block';
  
      dismisses.forEach((dismiss) => dismiss.addEventListener('click', () => {
        current.classList.remove('show');
        current.style.display = 'none';
      }));
    };
  
    modals.forEach((modal) => modal.addEventListener('click', handlerModal));
  };
  // END

  // BEGIN
const openHandler = (modal) => {
    modal.classList.add('show');
    modal.style.display = 'block'; // eslint-disable-line
  };
  
  const closeHandler = (modal) => {
    modal.classList.remove('show');
    modal.style.display = 'none'; // eslint-disable-line
  };
  
  export default () => {
    const buttons = document.querySelectorAll('[data-toggle="modal"]');
    buttons.forEach((element) => {
      const id = element.dataset.target;
      const modal = document.querySelector(id);
      element.addEventListener('click', openHandler.bind(null, modal));
      const closeButton = modal.querySelector('[data-dismiss="modal"]');
      closeButton.addEventListener('click', closeHandler.bind(null, modal));
    });
  };
  // END