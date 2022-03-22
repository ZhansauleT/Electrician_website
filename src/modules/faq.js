const faq = () => {
  const accordeon = document.querySelector(".accordeon");
  const accordeonItems = document.querySelectorAll(".accordeon>.element");
  const accordeonItemsTitle = document.querySelectorAll(".accordeon>.element>.title");
  const accordeonItemsContent = document.querySelectorAll(".accordeon>.element>.element-content");
  

  accordeon.addEventListener('click', (e) => {
    if(e.target.closest(".accordeon>.element")){
      const accordeonBtn = e.target.closest(".accordeon>.element");

      accordeonItems.forEach((item, index) =>{
        if(item === accordeonBtn && !item.classList.contains("active")){
          item.classList.add("active");
          accordeonItemsContent[index].style.display = "block";
        }else if(item === accordeonBtn && item.classList.contains("active")){
          item.classList.remove("active");
          accordeonItemsContent[index].style.display = "none";
        } else{
          item.classList.remove("active");
          accordeonItemsContent[index].style.display = "none";
        }
      });
    }
  });
};

export default faq;