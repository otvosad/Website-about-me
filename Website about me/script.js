const image = document.getElementById('country-img');

image.addEventListener('mouseover', () => {
  image.classList.add('spin');
});

image.addEventListener('mouseout', () => {
  image.classList.remove('spin');
});