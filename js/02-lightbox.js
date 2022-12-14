import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const pictureEl = galleryItems.map(el => {
  const newElement = `<li><a class='gallery__item' href='${el.original}'>
  <img class='gallery__image' src='${el.preview}' alt='${el.description}'/>
  </a></li>`
return newElement
})
console.log(pictureEl.join(''));


galleryEl.insertAdjacentHTML('beforeend', [...pictureEl].join(''))

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});

const linkStyle = document.querySelectorAll('.gallery__item');
for (const el of linkStyle) {
  el.style.boxShadow = 'none'
}
