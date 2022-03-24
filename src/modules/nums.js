const nums = () => {

  const numSection = document.querySelector(".num-section");
  const nums = document.querySelectorAll(".num");
  const numSpan = document.querySelectorAll(".num>span");
  const speed = 200;
  const numValues = [200, 14, 20, 150];
  
  //let isScrolling = false;

 
  // function throttleScroll() {
  //   if (isScrolling == false ) {
  //       window.requestAnimationFrame(function() {
  //         isVisible();
  //         isScrolling = false;
  //       });
  //   }
  //   isScrolling = true;
  // }  

  const isVisible = () => {
    let coords = numSection.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    //let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    
    if(topVisible){
      countNumbers();
    }

    console.log(topVisible);
    //return topVisible;
  };


  const countNumbers = () => {
      numSpan.forEach((num, index) => {
        nums[index].classList.add("animated");
        const value = numValues[index];

        const animate = setInterval(() => {
          const data = +num.innerText;
        
          const time = value / speed;

          if(data < value) {
            num.innerText = Math.ceil(data + time);
          }else {
            //num.innerText = value;
            clearInterval(animate);
          }
        }, 1);

      });
  };
  
  window.addEventListener("scroll", () => {
    return true;
  });
  window.removeEventListener("scroll", () => {
    isVisible();
  });
  //document.addEventListener("DOMContentLoaded", countNumbers, false);
  
};

export default nums;