const toTop = () => {
  const arrowToTop = document.querySelector(".up");
  const servicesSection = document.querySelector(".services-section");
  const sliderSection = document.querySelector(".top-slider");

  arrowToTop.style.display = "none";

  window.addEventListener("scroll", (e) => {
    let coordsServices = servicesSection.getBoundingClientRect();
    let coordsSlider = sliderSection.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisibleServices = coordsServices.top > 0 && coordsServices.top < windowHeight;
    let bottomVisibleSlider = (coordsSlider.bottom-100) > 0 && coordsSlider.bottom < windowHeight;


    //console.log(sliderSection.clientHeight);
    if(bottomVisibleSlider){
      arrowToTop.style.display = "none";
    }else{
      arrowToTop.style.display = "block";
    }
  });
  

  arrowToTop.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });
    
};

export default toTop;