const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const itemsContainer = document.querySelector('.items-container');

// Solo ejecutar el código del carrusel si los elementos existen
if (leftBtn && rightBtn && itemsContainer) {
    function updateClasses() {
      const items = itemsContainer.querySelectorAll('.carousel-item');
      if (items.length === 0) return;

      items.forEach(item => {
        item.classList.remove('center', 'side-1', 'side-2');
      });

      const middleIndex = Math.floor(items.length / 2);
      items[middleIndex].classList.add('center');

      if (items[middleIndex - 1]) items[middleIndex - 1].classList.add('side-1');
      if (items[middleIndex + 1]) items[middleIndex + 1].classList.add('side-1');

      if (items[middleIndex - 2]) items[middleIndex - 2].classList.add('side-2');
      if (items[middleIndex + 2]) items[middleIndex + 2].classList.add('side-2');
    }

    function shiftRight() {
      const first = itemsContainer.firstElementChild;
      itemsContainer.appendChild(first);
      updateClasses();
    }

    function shiftLeft() {
      const last = itemsContainer.lastElementChild;
      itemsContainer.prepend(last);
      updateClasses();
    }

    leftBtn.addEventListener('click', shiftLeft);
    rightBtn.addEventListener('click', shiftRight);

    updateClasses();

    let autoSlide = setInterval(shiftRight, 4000);

    itemsContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    itemsContainer.addEventListener('mouseleave', () => {
      autoSlide = setInterval(shiftRight, 4000);
    });
}