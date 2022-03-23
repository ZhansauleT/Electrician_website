const topSlider = () => {
  const topSliderBlock = document.querySelector(".top-slider");
  const sliderItems = document.querySelectorAll(".table");
  const sliderContainers = document.querySelectorAll(".item.relative");


  let currentSlide = 0;

  const prevSlide = (elems, containers, index, strClass1) => {
    elems[index].classList.remove(strClass1);
    //containers[index].style.opacity = "0";
    containers[index].style.transition = "opacity 1s";
    //containers[index].style.display = "none";
  };

  const nextSlide = (elems, containers, index, strClass1) => {
    containers[index].style.opacity = "1";
    containers[index].style.transition = "opacity 1s";
    elems[index].classList.add(strClass1);
    //containers[index].style.display = "block";
  };

  const autoSlide = () => {
    prevSlide(sliderItems, sliderContainers, currentSlide, "active");

    currentSlide++;

    if(currentSlide >= sliderItems.length){
      currentSlide = 0;
    }
    
    nextSlide(sliderItems, sliderContainers, currentSlide, "active");
  };

  const startSlide = () => {
    setInterval(autoSlide, 3000);
  };

  // const stopSlide = () => {

  // };

  startSlide();

};

export default topSlider;