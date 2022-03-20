const modalWindow = () => {
  //const callBackBtn = document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];
  //const servicesBtn = document.getElementsByClassName("button-services")[0];
  const modalOpenBtns = document.querySelectorAll(".open-btn");
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeBtns = document.querySelectorAll('.close-btn');


  modalOpenBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = "block";
      modalOverlay.style.display = "block";
    });
  });

  // callBackBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   modal.style.display = "block";
  //   modalOverlay.style.display = "block";
  // });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
    });
  });

};

export default modalWindow;