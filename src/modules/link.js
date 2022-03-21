const  link = () => {
  const logoLeft = document.querySelector(".logo.left>a");
  const headerLinks = document.querySelector(".h-panel-right");


  logoLeft.href = "index.html";

  headerLinks.childNodes.forEach((link) => {
      link.innerHTML = `<a>${link.innerHTML}</a>`;

      if(link.childNodes[0] && link.childNodes[0].parentNode.className === 'header-email'){
        link.childNodes[0].href = "mailto:info@sitename.com";
      }else if(link.childNodes[0] && link.childNodes[0].parentNode.className === 'header-tel'){
        link.childNodes[0].href = "tel:8(987)654-32-10";
      }
      
      link.cursor = "pointer";
  });

};

export default link;