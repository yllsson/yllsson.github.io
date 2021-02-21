// TITLE ANIMATION //
const titleImgContainer = document.getElementById('titleImages');

document.addEventListener('DOMContentLoaded', () => {
  titleImgContainer.classList.add('loaded');
});

// PROJECT SECTION CLASS ASSIGNMENT //

const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  if (index % 2 !== 0) {
    project.classList.add('projectReversed');
  }
});
