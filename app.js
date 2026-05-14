const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('video').forEach(video => {
    video.muted = true;
    video.play().catch(() => {
      document.addEventListener('touchstart', () => {
        video.play();
      }, { once: true });
    });
  });
});