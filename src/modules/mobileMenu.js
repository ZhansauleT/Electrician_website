const mobileMenu = () => {
  const menuBtn = document.querySelector('.mob-menu-btn');
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuOverlay = document.querySelector(".overlay");
  const menuCloseBtn = document.querySelector(".mobile-menu-close");
  const menuItems = mobileMenu.querySelectorAll("ul>li>a");


  const  handleMenu = () => {
    mobileMenu.classList.toggle('open');
  };

  menuBtn.style.cursor = "pointer";
  menuCloseBtn.style.cursor = "pointer";

  menuBtn.addEventListener('click', handleMenu);
  menuCloseBtn.addEventListener('click', handleMenu);
  mobileMenuOverlay.addEventListener('click', handleMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      handleMenu();

      let href = e.target.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 50; 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    
    });
  });

  
};

export default mobileMenu;