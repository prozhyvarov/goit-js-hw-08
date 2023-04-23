import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line

console.log(galleryItems);

const galeryContainer = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
    />
    </a>
    </li>`
  )
  .join('');

// console.log(galleryList);
galeryContainer.insertAdjacentHTML('beforeend', galleryList);
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});