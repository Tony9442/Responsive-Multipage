//change nav style when scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});




//show hidden faqs answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon
      
    const icon = faq.querySelector('.faqs-icon i');
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus'
    } else {
      icon.className = 'uil uil-plus';
    }
 
  });
});

//show hidden nav menu media queray

const menu = document.querySelector('.nav-menu');
const menu2 = document.querySelector('#open-menu-butt');
const close3 = document.querySelector('#close-menu-butt');

menu2.addEventListener('click', () => {
  menu.style.display = "flex";
  close3.style.display = "inline-block";
  menu2.style.display = "none";

});

const closeBar = () => {
  menu.style.display = "none";
  close3.style.display = "none";
  menu2.style.display = "inline-block";
}

close3.addEventListener('click', closeBar)