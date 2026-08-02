// ===============================
// КНОПКА НАВЕРХ
// ===============================

const toTop = document.getElementById('toTop');

if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,

      behavior: 'smooth',
    });
  });
}

// ===============================
// БУРГЕР
// ===============================

const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger-menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

// ===============================
// ЗАКРЫТИЕ МЕНЮ ПОСЛЕ НАЖАТИЯ
// ===============================

document.querySelectorAll('.burger-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu) {
      menu.classList.remove('open');
    }
  });
});
