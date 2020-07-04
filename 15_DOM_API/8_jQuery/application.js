// @ts-check

// import $ from 'jquery';

export default () => {
    const handleNext = (e) => {
      const { currentTarget } = e;
      const carouselDiv = currentTarget.closest('div').firstElementChild;
      const first = carouselDiv.firstElementChild;
      const last = carouselDiv.lastElementChild;
      const currentAct = carouselDiv.querySelector('.active');
      if (last.classList.contains('active')) {
        first.classList.add('active');
        last.classList.remove('active');
      } else {
        currentAct.nextElementSibling.classList.add('active');
        currentAct.classList.remove('active');
      }
    };
  
    const handlePrev = (e) => {
      const { currentTarget } = e;
      const carouselDiv = currentTarget.closest('div').firstElementChild;
      const first = carouselDiv.firstElementChild;
      const last = carouselDiv.lastElementChild;
      const currentAct = carouselDiv.querySelector('.active');
      if (first.classList.contains('active')) {
        last.classList.add('active');
        first.classList.remove('active');
      } else {
        currentAct.previousElementSibling.classList.add('active');
        currentAct.classList.remove('active');
      }
    };
  
    const prevs = document.querySelectorAll('a[data-slide="prev"]');
    const nexts = document.querySelectorAll('a[data-slide="next"]');
    prevs.forEach((prev) => prev.addEventListener('click', handlePrev));
    nexts.forEach((next) => next.addEventListener('click', handleNext));
  };
  