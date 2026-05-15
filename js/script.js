// ===== BURGER MENU =====

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}

// ===== FAQ =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Закрываем все FAQ
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove('active');

      const otherAnswer = otherItem.querySelector('.faq-answer');
      otherAnswer.style.display = 'none';
    });

    // Если текущий был закрыт — открываем его
    if (!isActive) {
      item.classList.add('active');
      answer.style.display = 'block';
    }
  });
});
// ===== GALLERY LIGHTBOX =====

// const galleryImages = document.querySelectorAll('.gallery img');

// let currentIndex = 0;

// const lightbox = document.createElement('div');
// lightbox.classList.add('lightbox');

// const lightboxImg = document.createElement('img');

// lightbox.appendChild(lightboxImg);

// document.body.appendChild(lightbox);

// galleryImages.forEach((img, index) => {
//   img.addEventListener('click', () => {
//     lightbox.style.display = 'flex';
//     lightboxImg.src = img.src;

//     currentIndex = index;
//   });
// });

// lightbox.addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });

// ===== PREMIUM GALLERY LIGHTBOX =====

const galleryImages = document.querySelectorAll('.gallery img');

if (galleryImages.length > 0) {
  let currentIndex = 0;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';

  const lightboxImg = document.createElement('img');

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '×';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-prev';
  prevBtn.innerHTML = '‹';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-next';
  nextBtn.innerHTML = '›';

  const counter = document.createElement('div');
  counter.className = 'lightbox-counter';

  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(nextBtn);
  lightbox.appendChild(counter);
  document.body.appendChild(lightbox);

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentIndex);
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('active')) return;

    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
  });
}

// ===== SCROLL ANIMATION =====

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

sections.forEach((section) => {
  section.classList.add('hidden');

  observer.observe(section);
});

// ===== SCROLL TO TOP =====

const toTop = document.createElement('div');

toTop.innerText = '↑';

toTop.classList.add('to-top');

document.body.appendChild(toTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    toTop.style.display = 'flex';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// ===== LANGUAGE OVERLAY =====

const languageOverlay = document.getElementById('languageOverlay');
const languageButtons = document.querySelectorAll('.language-btn');

if (languageOverlay && languageButtons.length > 0) {
  const selectedLanguage = localStorage.getItem('selectedLanguage');

  if (selectedLanguage) {
    languageOverlay.classList.add('hidden');
  } else {
    document.body.style.overflow = 'hidden';
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;

      localStorage.setItem('selectedLanguage', lang);

      languageOverlay.classList.add('hidden');

      document.body.style.overflow = '';

      /*
        Когда будут отдельные языковые страницы,
        сюда можно будет добавить переходы:
      */
      if (lang === 'ua') window.location.href = 'index_ua.html';
      if (lang === 'ru') window.location.href = 'index.html';
      if (lang === 'en') window.location.href = 'index_en.html';
      if (lang === 'ro') window.location.href = 'index_ro.html';
    });
  });
}
