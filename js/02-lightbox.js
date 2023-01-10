import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const cardsImg = createCardsImg(galleryItems);
galleryImg.insertAdjacentHTML('beforeend', cardsImg);

var lightbox = new SimpleLightbox('.gallery a', cardsImg);

function createCardsImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>`;
    })
    .join('');
}

const img = document.querySelectorAll('img');
addTitleForImg(img);
function addTitleForImg(arr) {
  return arr.forEach(element => {
    element.title = element.alt;
  });
}

console.log(galleryItems);
