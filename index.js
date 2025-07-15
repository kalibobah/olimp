const popup = document.getElementById('popup');
const openBtn = document.getElementById('phone');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');


openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
});