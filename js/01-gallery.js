import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');
galleryImg.addEventListener('click', onImgClick);

const cardsImg = createCardsImg(galleryItems);
galleryImg.insertAdjacentHTML('beforeend', cardsImg);

function createCardsImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
   `);
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
