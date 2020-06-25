// @ts-check

export default () => {
    // BEGIN (write your solution here)
    const links = [...document.querySelectorAll('a[data-toggle="tab"]')];
    links.forEach((link) => {
      link.addEventListener('click', () => {
        const parent = [...link.closest('.nav').children];
        parent.forEach((child) => {
          const link1 = [...child.children];
          link1.forEach((linkIn) => (linkIn.className = 'nav-link'));
        });
  
        link.className = 'nav-link active';
        const newID = link.getAttribute('href').slice(1); 
  
  
  
        const tabs = [...document.getElementById(newID).closest('.tab-content').children];
        tabs.forEach((tab) => tab.id === newID ? tab.className = 'tab-pane active' : tab.className = 'tab-pane' ); 
  
     
      });
      
    })
  
  
  };
  // END

    // BEGIN
    const handle = (e) => {
        e.preventDefault();
    
        const { target } = e;
        if (target.classList.contains('active')) {
          return;
        }
    
        const nav = target.closest('.nav');
        const current = nav.querySelector('a.active');
        current.classList.remove('active');
    
        const currentTabContent = document.querySelector(current.hash);
        currentTabContent.classList.remove('active');
    
        target.classList.add('active');
    
        const nextTabContent = document.querySelector(target.hash);
        nextTabContent.classList.add('active');
      };
    
      const links = document.querySelectorAll('a[data-toggle]');
      links.forEach((element) => {
        element.addEventListener('click', handle);
      });
      // END

