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
    item.classList.toggle('active');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
// ===== GALLERY LIGHTBOX =====

const galleryImages = document.querySelectorAll('.gallery img');

let currentIndex = 0;

const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

const lightboxImg = document.createElement('img');

lightbox.appendChild(lightboxImg);

document.body.appendChild(lightbox);

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;

    currentIndex = index;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

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
