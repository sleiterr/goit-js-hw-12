// render-function
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('results');

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image"/>
      </a>
      <div class="card-body">
        <p>${image.tags}</p>
        <div class="stats">
          <span>Likes: ${image.likes}</span>
          <span>Views: ${image.views}</span>
          <span>Comments: ${image.comments}</span>
          <span>Downloads: ${image.downloads}</span>
        </div>
      </div>
    `;
    gallery.appendChild(card);
  });

  const lightbox = new SimpleLightbox('.gallery-link');
  lightbox.refresh();

  smoothScroll();
}

export function showNotification(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function smoothScroll() { 
  const gallery = document.getElementById('results');
  const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
