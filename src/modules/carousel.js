const carousel = () => {
  const services = document.querySelector(".services-elements");
  const servicesCarousel = document.querySelector(".services-carousel");
  const slideItems = document.querySelectorAll(".col-sm-6.col-md-4");
  //const styles = window.getComputedStyle(document.querySelector(".img-wrapper"),'::before');
  const carouselModalBtn = document.querySelector(".absolute.fancyboxModal");
  //const carouselModalBtn = styles[content];
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");


  //let currentSlide = 0;
  let slideSteps = 0;
  let slideAmountVisible = 3;
  let slideAmount = 6;


  const prevSlide = () => {
    if(slideSteps > 0){
      slideSteps--;
      slideItems[slideSteps].style.display = "block";
    }
  };

  //elems, containers, index, strClass1

  const nextSlide = () => {
    if(slideSteps < slideAmount - slideAmountVisible){
      slideItems.forEach((item, index) => {
        //item.style.transform = "translateX("+(-400)+"px)";
        slideItems[slideSteps].style.display = "none";
      });
      slideSteps++;
    }
  };

  arrowLeft.addEventListener('click', (e) => {
    prevSlide();
  });

  arrowRight.addEventListener('click', (e) => {
    nextSlide();
  });

  carouselModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    
  });
  
};

export default carousel;