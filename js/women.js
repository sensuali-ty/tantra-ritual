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

const overlay = document.getElementById('languageOverlay');

if (overlay) {
  const savedLanguage = localStorage.getItem('selectedLanguage');

  if (savedLanguage) {
    overlay.style.display = 'none';
  } else {
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.language-box button').forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;

      localStorage.setItem('selectedLanguage', lang);

      switch (lang) {
        case 'ua':
          window.location.href = 'women_ua.html';
          break;

        case 'ru':
          window.location.href = 'women.html';
          break;

        case 'en':
          window.location.href = 'women_en.html';
          break;

        case 'ro':
          window.location.href = 'women_ro.html';
          break;
      }
    });
  });
}

document.querySelectorAll('.language-box button').forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;

    localStorage.setItem('selectedLanguage', lang);

    switch (lang) {
      case 'ua':
        window.location.href = 'women_ua.html';
        break;

      case 'ru':
        window.location.href = 'women.html';
        break;

      case 'en':
        window.location.href = 'women_en.html';
        break;

      case 'ro':
        window.location.href = 'women_ro.html';
        break;
    }
  });
});
// ===============================
// ЗАКРЫТИЕ АККОРДЕОНА ПРИ ОТКРЫТИИ ДРУГОГО
// ===============================

document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', function () {
    if (this.open) {
      document.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== this) {
          other.open = false;
        }
      });
    }
  });
});
