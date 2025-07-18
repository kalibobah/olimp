const popup = document.getElementById('popup');
const openBtn = document.getElementById('phone');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');


openBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});