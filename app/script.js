// TITLE ANIMATION //
const titleImgContainer = document.getElementById('titleImages');

document.addEventListener('DOMContentLoaded', () => {
  titleImgContainer.classList.add('loaded');
});

// CONTACT LINKS ANIMATION //

const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});
