import modalWindow from './modules/modalWindow';
import menuList from './modules/menuList';
import mobileMenu from './modules/mobileMenu';
import link from './modules/link';
import validation from './modules/validation';
import topSlider from './modules/topSlider';
import faq from './modules/faq';
import nums from './modules/nums';
import toTop from './modules/toTop';
import sendForm from './modules/sendForm';
import carousel from './modules/carousel';

modalWindow();
menuList();
mobileMenu();
link();
validation();
topSlider();
faq();
nums();
toTop();
sendForm({
  formId: 'form1', 
  someElem: [
    {
      //type: 'block',
      //id: 'total'
    }
  ]
});
carousel();