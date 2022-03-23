const faq = () => {
  const accordeon = document.querySelector(".accordeon");
  const accordeonItems = document.querySelectorAll(".accordeon>.element");
  const accordeonItemsTitle = document.querySelectorAll(".accordeon>.element>.title");
  const accordeonItemsContent = document.querySelectorAll(".accordeon>.element>.element-content");
  
  const height = getComputedStyle(accordeonItemsContent[0]).height;
  

  accordeonItems.forEach((item, index) => {
    accordeonItemsContent[index].style.height = "0px";
    accordeonItemsContent[index].style.padding = "0px 20px 0px 20px";
    accordeonItemsContent[index].style.padding = "0px";
    accordeonItemsContent[index].style.overflow = "hidden";
  });
  


  accordeon.addEventListener('click', (e) => {
    if(e.target.closest(".accordeon>.element")){
      const accordeonBtn = e.target.closest(".accordeon>.element");

      accordeonItems.forEach((item, index) => {
        if(item === accordeonBtn && !item.classList.contains("active")){
          item.classList.add("active");
          accordeonItemsContent[index].style.height = height;
          accordeonItemsContent[index].style.padding = "20px 20px 20px 20px";
          accordeonItemsContent[index].style.overflow = "visible";
          accordeonItemsContent[index].style.transition = "1s ease height";
          accordeonItemsContent[index].style.transition = "1s ease padding";
        }
        else if(item === accordeonBtn && item.classList.contains("active")){
          item.classList.remove("active");
          accordeonItemsContent[index].style.height = "0px";
          accordeonItemsContent[index].style.padding = "0px 20px 0px 20px";
          accordeonItemsContent[index].style.overflow = "hidden";
          accordeonItemsContent[index].style.transition = "1s ease height";
          accordeonItemsContent[index].style.transition = "1s ease padding";
        } else{
          item.classList.remove("active");
          accordeonItemsContent[index].style.height = "0px";
          accordeonItemsContent[index].style.padding = "0px 20px 0px 20px";
          accordeonItemsContent[index].style.transition = "1s ease height";
          accordeonItemsContent[index].style.transition = "1s ease padding";
          accordeonItemsContent[index].style.overflow = "hidden";
        }
      });
  }
});

};

export default faq;