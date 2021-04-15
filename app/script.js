// TITLE ANIMATION //
const titleImgContainer = document.getElementById('titleImages');
const titleHeadersContainer = document.getElementById('titleHeaders');

const loadAnimations = () => {
  titleImgContainer.classList.add('loaded');
  titleHeadersContainer.classList.add('loaded');
};

document.addEventListener('DOMContentLoaded', loadAnimations);
document.addEventListener('beforeunload', loadAnimations);

// PROJECT SECTION CLASS ASSIGNMENT //

const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  if (index % 2 !== 0) {
    project.classList.add('projectReversed');
  }
});
