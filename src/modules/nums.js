const nums = () => {

  const numSection = document.querySelector(".num-section");
  const nums = document.querySelectorAll(".num");
  const numSpan = document.querySelectorAll(".num>span");
  const speed = 200;
  const numValues = [200, 14, 20, 150];

  const isVisible = () => {
    let coords = numSection.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible && bottomVisible;
  };


  const countNumbers = () => {
        numSpan.forEach((num, index) => {

        if(isVisible()){
          const value = numValues[index];

          nums[index].classList.add("animated");

          const animate = setInterval(() => {
            const data = +num.innerText;
        
            const time = value / speed;

            if(data < value) {
              num.innerText = Math.ceil(data + time);
            } else {
              //num.innerText = value;
              clearInterval(animate);
              window.removeEventListener("scroll", countNumbers);
            }
          }, 1);
        }else{
          nums[index].classList.remove("animated");
          num.innerText = "0";
        }
      });
  };
  
  window.addEventListener("scroll", countNumbers);

  
  
};

export default nums;