import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const pictureEl = galleryItems.map(el => {
  const newElement = `<a class='gallery__link' href='${el.original}'>
  <img class='gallery__image' src='${el.preview}' data-source='${el.original}' alt='${el.description}' />
  </a>`
return newElement
})
console.log(pictureEl.join(''));


galleryEl.insertAdjacentHTML('beforeend', [...pictureEl].join(''))

galleryEl.addEventListener('click', onLinkClick);

function onLinkClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const newImage = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${newImage}"'/>`)
  instance.show()
  
  document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    instance.close();
  }
})
}

