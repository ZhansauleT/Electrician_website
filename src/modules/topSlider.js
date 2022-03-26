const topSlider = () => {
  const topSliderBlock = document.querySelector(".top-slider");
  const sliderItems = document.querySelectorAll(".table");
  const sliderContainers = document.querySelectorAll(".item.relative");
  const slickDots = document.querySelectorAll(".slick-dots>li");


  let currentSlide = 0;

  const prevSlide = (elems1, elems2, containers, index, strClass1, strClass2) => {
    elems1[index].classList.remove(strClass1);
    elems2[index].classList.remove(strClass2);
    containers[index].style.opacity = "0";
    containers[index].style.transition = "opacity 1s";
    containers[index].style.left = "-100%";
  };

  const nextSlide = (elems1, elems2, containers, index, strClass1, strClass2) => {
    elems1[index].classList.add(strClass1);
    elems2[index].classList.add(strClass2);
    containers[index].style.opacity = "1";
    containers[index].style.transition = "opacity 1s";
    containers[index].style.top = -index*100+"%";
    containers[index].style.left = "0%";
  };

  const autoSlide = () => {
    prevSlide(sliderItems, slickDots, sliderContainers, currentSlide, "active", "slick-active");

    currentSlide++;

    if(currentSlide >= sliderItems.length){
      currentSlide = 0;
    }
    
    nextSlide(sliderItems, slickDots, sliderContainers, currentSlide, "active", "slick-active");
  };

  const startSlide = () => {
    setInterval(autoSlide, 3000);
  };

  startSlide();

};

export default topSlider;