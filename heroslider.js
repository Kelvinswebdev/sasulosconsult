const images = document.querySelectorAll('.hero-image');
const heading = document.getElementById('hero-heading');
const paragraph = document.getElementById('hero-paragraph');

const messages = [
  {
    title: "Recruit Skilled Ghanaians Today",
    text: "Discover top-tier talent tailored to your organization’s needs."
  },
  {
    title: "Build Your Dream Team ",
    text: "We connect visionary companies with professionals who drive innovation and elevate culture."
  },
  {
    title: "Recruit Smarter From Ghana",
    text: "Streamline your hiring process with insight-driven strategies and real human connection."
  }
];

let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');

  heading.textContent = messages[current].title;
  paragraph.textContent = messages[current].text;

  // Re-trigger text animation
  const overlay = document.querySelector('.hero-overlay');
  overlay.style.animation = 'none';
  overlay.offsetHeight; // trigger reflow
  overlay.style.animation = '';
}

setInterval(showNextImage, 5000); // Change every 5 seconds

