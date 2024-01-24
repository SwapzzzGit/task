
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('nav ul');
  const overlay = document.querySelector('.overlay');

  menuIcon.addEventListener('click', function () {
      navList.classList.toggle('show');
      overlay.classList.toggle('show');
  });
});
