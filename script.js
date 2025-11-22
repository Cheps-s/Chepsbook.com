//navbar dropdown
const dropBtn = document.getElementById("dropBtn");
  const dropContent = document.getElementById("dropContent");

  dropBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing instantly
    dropContent.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropContent.contains(e.target) && !dropBtn.contains(e.target)) {
      dropContent.classList.remove("show");
    }
  });
//Animation Text
const words = ["Chep", "Nyl", "Zheps"];
  const colors = ["#00b3ff", "#ff4b5c", "#0fdbd1ff"]; // blue for Chep, red for Nyl
  const span = document.getElementById("Chep");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const fullWord = currentWord.substring(0, charIndex);

    span.textContent = fullWord;
    span.style.color = colors[wordIndex]; // change color by word

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 800);
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
      }
    }
  }

  window.onload = typeEffect;
// --- Auto Sliding Animation for Multiple Sections ---
function setupAutoSlide(containerSelector, speed) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Clone children for seamless looping
  const items = Array.from(container.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });

  let scrollX = 0;
  function animate() {
    scrollX += speed;
    container.style.transform = `translateX(${-scrollX}px)`;

    // When scrolled past half (original width), reset position
    if (scrollX >= container.scrollWidth / 3) {
      scrollX = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// --- Initialize on page load ---
window.addEventListener("load", function() {
  setupAutoSlide("#Demon .slide-container", 0.6); // Demon Slayer
  setupAutoSlide("#Naruto .slide-container", 0.9); // Naruto
  setupAutoSlide("#mha .slide-container", 0.6); // mha
  setupAutoSlide("#chainsaw .slide-container", 0.9); //Chainsaw man
  setupAutoSlide("#days .slide-container", 0.5);//Days

});

const botoes = document.querySelectorAll('.botao:not(.disabled)');
const backgrounds = document.querySelectorAll('.bg > .bg');

botoes.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.querySelector('.botao.selected')?.classList.remove('selected');
    btn.classList.add('selected');

    document.querySelector('.bg.active')?.classList.remove('active');
    backgrounds[index].classList.add('active');
  });
});

// Scroll reveal animation
const cards = document.querySelectorAll("[data-animate]");

const reveal = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();
// open popup
document.querySelectorAll('.container-image .image-games img').forEach(img => {
  img.addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = img.getAttribute('src');
  });
});

// close popup when clicking X
document.querySelector('.popup-image span').addEventListener('click', () => {
  document.querySelector('.popup-image').style.display = 'none';
});

// close popup when clicking outside image
document.querySelector('.popup-image').addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-image')) {
    document.querySelector('.popup-image').style.display = 'none';
  }
});
