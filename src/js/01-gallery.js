// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems); const gallery = document.querySelector('div.gallery');

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

galleryItems.map(el => {
    
    // const galleryItem = document.createElement('div');
    const galleryLink = document.createElement('a');
    galleryLink.href = el.original;

    const galleryImage = document.createElement('img');
    
    // galleryItem.classList.add('gallery__item');
    galleryLink.classList.add('gallery__item');
    
    galleryImage.classList.add('gallery__image');
    galleryImage.src = el.preview;
    galleryImage.alt = el.description;
    // galleryImage.title = el.description;

    galleryLink.append(galleryImage);
    // galleryItem.append(galleryLink);
    
    gallery.append(galleryLink);
    return gallery;
});


new SimpleLightbox('.gallery a', { captionsData: 'alt'});

