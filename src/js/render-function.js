// render-function
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('results');
  gallery.innerHTML = '';

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
}

export function showNotification(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}