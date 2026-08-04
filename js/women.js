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

const images = [...document.querySelectorAll('.gallery img')];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';

  overlay.innerHTML = `
        <button class="lightbox-prev">&#10094;</button>
        <img src="${images[index].src}">
        <button class="lightbox-next">&#10095;</button>
    `;

  document.body.appendChild(overlay);

  const img = overlay.querySelector('img');

  function show(i) {
    currentIndex = (i + images.length) % images.length;
    img.src = images[currentIndex].src;
  }

  overlay.querySelector('.lightbox-prev').onclick = (e) => {
    e.stopPropagation();
    show(currentIndex - 1);
  };

  overlay.querySelector('.lightbox-next').onclick = (e) => {
    e.stopPropagation();
    show(currentIndex + 1);
  };

  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {
    if (e.key === 'ArrowRight') show(currentIndex + 1);

    if (e.key === 'ArrowLeft') show(currentIndex - 1);

    if (e.key === 'Escape') close();
  }

  function close() {
    document.removeEventListener('keydown', keyHandler);

    overlay.remove();
  }

  overlay.onclick = close;

  img.onclick = (e) => e.stopPropagation();
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});
