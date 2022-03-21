const menuList = () => {
  const menuItems = document.querySelectorAll(".top-menu>ul>li");
  
  
  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

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

export default menuList;