const modalWindow = () => {
  const callBackBtn = document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];
  //const servicesBtn = document.querySelector(".button-services");
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".modal-close");


  document.addEventListener('click', (e) => {
    if (e.target.matches('.callback-btn') || e.target.matches('.button-services')) {
      e.preventDefault();
      modal.style.display = "block";
      modalOverlay.style.display = "block";
    } 

    if (e.target.matches('.modal-overlay') || e.target.closest('.modal-close')) {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
    } 

  });

};

export default modalWindow;