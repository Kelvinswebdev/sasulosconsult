
const track = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.news-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let autoSlide;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 30;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  updateDots();
}

function createDots() {
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.dots span');
  dots.forEach(dot => dot.classList.remove('active'));
  if(dots[index]) dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  if(index < cards.length - 3) index++;
  else index = 0;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  if(index > 0) index--;
  else index = cards.length - 3;
  updateSlider();
});

function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

track.addEventListener('mouseenter', stopAutoSlide);
track.addEventListener('mouseleave', startAutoSlide);

/* Swipe Support */
let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) nextBtn.click();
  if(endX - startX > 50) prevBtn.click();
});

createDots();
updateSlider();
startAutoSlide();