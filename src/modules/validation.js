const validation = () => {
  const formNameInput = document.querySelector(".form-group>input[name='fio']");
  const formTelInput = document.querySelector(".form-group>input[name='tel']");


  // name input
  formNameInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-яА-Я]/g,"");
  });

  formNameInput.addEventListener('blur', (e) => {
    e.preventDefault();
    
    e.target.value = e.target.value.replace(/^[а-я]/g, function(letter) {
      return letter.toUpperCase(); });
    e.target.value = e.target.value.replace(/(?!^)[А-Я]/g, function(letter) {
      return letter.toLowerCase(); });
  });


  // phone number input
  formTelInput.addEventListener('input', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^0-9\+]/g,"");
  });

  formTelInput.addEventListener('blur', (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/\++/g,"+");
    e.target.value = e.target.value.replace(/[+]$/g,"");
  });
};

export default validation;