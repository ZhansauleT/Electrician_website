const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId);
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  //console.log(modal);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";


  const validate = (list) => {
    let success = true;

    list.forEach(input => {

      //to check name input
      if(input.name === "fio" && (/[^а-яА-Я]/g.test(input.value) || input.value === "" ||input.value.length < 2)){
        alert("Введите ваше имя на кириллице, имя должно состоять минимум из двух букв");
        success = false;
      }
      
      //to check phone number input
      if (input.name === "tel" && (!(/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(input.value)) || input.value === "")){
        alert("Введите корректный номер телефона: 11 цифр начиная с кода");
        success = false;
      }
      
    });

    return success;
  };


  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };



  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};


    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if(elem.type === 'block' && element.textContent !== "0"){
        formBody[elem.id] = element.textContent;
      }else if(elem.type === 'input' && element.value !== 0){
        formBody[elem.id] = element.value;
      }
    });

    if(validate(formElements)){

      statusBlock.textContent = loadText;
      statusBlock.style.color = "#000";
      statusBlock.style.font = "inherit";

      form.append(statusBlock);

      sendData(formBody).then(data => {
        statusBlock.textContent = successText;

        formElements.forEach(input => {
          if(input.type !== "submit"){
            input.value = '';
          }
        });

        setTimeout( () => {
          form.removeChild(statusBlock);
        }, 2000);

        setTimeout(() => {
          modal.style.display = "none";
          modalOverlay.style.display = "none"; 
        }, 1000);

      })
      .catch(error => {
        statusBlock.textContent = errorText;
      });
    } else {
      alert('Данные не валидны!!!');
    }

  };

  try {

    if(!form){
      throw new Error('Верните форму на место, пожалуйста!');
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    });
  }catch(error) {
    console.log(error.message);
  }
};

export default sendForm;