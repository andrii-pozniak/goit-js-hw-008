// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";


// new add
const imgGalleryCard = document.querySelector(`.gallery`);

const imgGallery = onCreateImgCard(galleryItems);

// Create card
imgGalleryCard.insertAdjacentHTML("beforeend", imgGallery);

function onCreateImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `
       <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
     </a>
    </li>
       ` ;       
    }).join("");
    
};

const light = new SimpleLightbox(`.gallery__item a`, { captionsData: 'alt',captionDelay: 250,});
console.log(galleryItems);
