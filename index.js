const popup = document.getElementById('popup');
const openBtn = document.getElementById('phone');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');


openBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});