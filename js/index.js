const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav--open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
       document.body.classList.remove('nav--open');
    });
});

//copy email
const item = document.querySelector(".copy");
const tooltiptext = document.querySelector(".tooltiptext--copy");

item.onclick = function() {
  document.execCommand("copy");
}

item.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", item.textContent);

    tooltiptext.classList.add('active');
    setTimeout(() => {
      tooltiptext.classList.remove('active');
    }, 1500);
  }
});
