import { galleryItems } from './JS/galleryItems.JS';

console.log(galleryItems);

const galleryListEl = document.querySelector(`.js-gallery`);
console.log(galleryListEl);

const createGalleryItems = arr => {
  return arr
    .map(item => {
      return `<li class="gallery__item">
            <a
                class="gallery__link"
                href="${item.original}"
            >
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="Tulips"
                />
            </a>
            </li>`;
    })
    .join(' ');
};

const markup = createGalleryItems(galleryItems);
console.log(markup);
galleryListEl.innerHTML = markup;
