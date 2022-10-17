
function modalsFunctions() {
const modal = document.querySelector('.modal-background');
const searchBtn = document.querySelector('.search-button');
const modalCloseBtn = document.querySelector('.modal-btn-close');

if(!searchBtn) {
  return
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  modal.classList.remove('close');
})

modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('close')
})
}


document.addEventListener("DOMContentLoaded", modalsFunctions);
