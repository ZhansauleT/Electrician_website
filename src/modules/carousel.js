const carousel = () => {
  const services = document.querySelector(".services-elements");
  const servicesElems = document.querySelectorAll(".element.relative");
  const slideItems = document.querySelectorAll(".col-sm-6.col-md-4");
  const carouselModalBtn = document.querySelectorAll(".absolute.fancyboxModal");
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const screenWidth = window.innerWidth;

  //console.log(screenWidth);

  let slideSteps = 0;
  let slideAmount = 6;
  let slideAmountVisible;

  if(screenWidth >= 992){
    slideAmountVisible = 3;
  }else if(screenWidth <= 991 && screenWidth >= 768){
    slideAmountVisible = 2;
  }else if(screenWidth < 767){
    slideAmountVisible = 1;
  }


  const prevSlide = () => {
    if(slideSteps > 0){
      slideSteps--;
      slideItems[slideSteps].style.display = "block";
    }
  };

  //elems, containers, index, strClass1

  const nextSlide = () => {
    if(slideSteps < slideAmount - slideAmountVisible){
      //console.log(slideAmountVisible);
      slideItems.forEach((item, index) => {
        slideItems[slideSteps].style.display = "none";
      });
      slideSteps++;
      //console.log(slideSteps);
    }
  };

  arrowLeft.addEventListener('click', (e) => {
    prevSlide();
  });

  arrowRight.addEventListener('click', (e) => {
    nextSlide();
  });

  servicesElems.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      //console.log(e.target);
    
      if(e.target.classList.contains("img-wrapper")){
        modal.style.display = "block";
        modalOverlay.style.display = "block";
      }
      
    
    });
  });
  
  
};

export default carousel;