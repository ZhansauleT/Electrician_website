const nums = () => {

  const numSection = document.querySelector(".num-section");
  const nums = document.querySelectorAll(".num");
  const numSpan = document.querySelectorAll(".num>span");
  const speed = 100;
  const numValues = [200, 14, 20, 150];


  nums.forEach((num, index) => {
    num.style.opacity = "1";

    const animate = () => {
      const value = numValues[index];
      const data = +numSpan[index].innerText;
     
      const time = value / speed;

      if(data < value) {
        numSpan[index].innerText = Math.ceil(data + time);
        setTimeout(animate(), 1);
      }else {
        numSpan[index].innerText = value;
        //console.log(value);
      }
    };

    animate();

  });
  

  const isVisible = () => {
    let coords = numSection.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    //let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible;
  };
  
  //window.addEventListener("scroll", isVisible);
  //window.removeEventListener("scroll", isVisible);
  
  //if(isVisible){
    
  //}
  
  
};

export default nums;