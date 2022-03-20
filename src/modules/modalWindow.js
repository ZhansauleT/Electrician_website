const modalWindow = () => {
  const callBackBtn = document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector('.modal-close');
  const btn = document.querySelectorAll('a');

  //console.log(closeBtn);



  callBackBtn.addEventListener('click', () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    //console.log("opened");
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  });

  modalOverlay.addEventListener('click', () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  });


  console.log(btn);
};

export default modalWindow;