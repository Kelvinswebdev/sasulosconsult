const images = document.querySelectorAll('.hero-image');
const heading = document.getElementById('hero-heading');
const paragraph = document.getElementById('hero-paragraph');

const messages = [
  {
    title: "We supply competent Ghanaian manpower to Saudi companies",
    text: "Reliable Ghanaian workers delivered with structure, integrity, and speed."
  },
  {
    title: "Connecting Saudi companies to Ghana’s most reliable workforce",
    text: "A trusted bridge between skilled labour and serious employers."
  },
  {
    title: "Recruit Smarter From Ghana",
    text: "Streamline your hiring process with insight-driven strategies and real human connection."
  },
  {
    title: "Connect with our sourced, screened and ready Ghanaian workers",
    text: "Connect with skilled Ghanaian workers without the stress of recruitment delays."
  }
];

let current = 0;

function showNextImage() {
  images[current].classList.remove('active');

  current = (current + 1) % images.length;

  images[current].classList.add('active');

  heading.textContent = messages[current].title;
  paragraph.textContent = messages[current].text;
}

setInterval(showNextImage, 5000);
