const  link = () => {
  const logoLeft = document.querySelector(".logo.left>a");
  //const headerLinks = document.querySelector(".h-panel-right");
  const headerEmail = document.querySelector(".header-email");
  const headerTel = document.querySelector(".header-tel");


  logoLeft.href = "index.html";

  //header email link
  headerEmail.innerHTML = `<a>${headerEmail.innerHTML}</a>`;
  headerEmail.childNodes[0].href = "mailto:info@sitename.com";
  headerEmail.cursor = "pointer";

  //header phone number link
  headerTel.innerHTML = `<a>${headerTel.innerHTML}</a>`;
  headerTel.childNodes[0].href = "tel:8(987)654-32-10";
  headerTel.cursor = "pointer";

  // headerLinks.childNodes.forEach((link) => {
  //     link.innerHTML = `<a>${link.innerHTML}</a>`;

  //     if(link.childNodes[0] && link.childNodes[0].parentNode.className === 'header-email'){
  //       link.childNodes[0].href = "mailto:info@sitename.com";
  //     }else if(link.childNodes[0] && link.childNodes[0].parentNode.className === 'header-tel'){
  //       link.childNodes[0].href = "tel:8(987)654-32-10";
  //     }
      
  //     link.cursor = "pointer";
  // });

};

export default link;