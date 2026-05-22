const memories = document.getElementById('memories');

const pages = document.querySelectorAll('.memory-page');

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const showMemoriesBtn = document.getElementById('showMemoriesBtn');

let currentPage = 0;


/* =========================
   MOSTRAR MEMÓRIAS
========================= */

if (showMemoriesBtn) {

  showMemoriesBtn.addEventListener('click', () => {

    memories.scrollIntoView({
      behavior: 'smooth'
    });

  });

}


/* =========================
   MOSTRAR PÁGINA
========================= */

function showPage(index) {

  pages.forEach((page) => {

    page.classList.remove('active');

  });

  pages[index].classList.add('active');

}


/* =========================
   PRÓXIMA PÁGINA
========================= */

function nextPage() {

  currentPage++;

  if (currentPage >= pages.length) {
    currentPage = 0;
  }

  showPage(currentPage);

}


/* =========================
   PÁGINA ANTERIOR
========================= */

function prevPage() {

  currentPage--;

  if (currentPage < 0) {
    currentPage = pages.length - 1;
  }

  showPage(currentPage);

}


/* =========================
   BOTÕES
========================= */

if (nextBtn) {
  nextBtn.addEventListener('click', nextPage);
}

if (prevBtn) {
  prevBtn.addEventListener('click', prevPage);
}


/* =========================
   TECLADO
========================= */

document.addEventListener('keydown', (e) => {

  if (e.key === 'ArrowRight') {
    nextPage();
  }

  if (e.key === 'ArrowLeft') {
    prevPage();
  }

});


/* =========================
   TOUCH MOBILE
========================= */

let touchStartX = 0;
let touchEndX = 0;

if (memories) {

  memories.addEventListener('touchstart', (e) => {

    touchStartX = e.changedTouches[0].screenX;

  });

  memories.addEventListener('touchend', (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

  });

}


function handleSwipe() {

  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance < -50) {
    nextPage();
  }

  if (swipeDistance > 50) {
    prevPage();
  }

}


/* =========================
   INICIAR PRIMEIRA PÁGINA
========================= */

if (pages.length > 0) {
  showPage(currentPage);
}