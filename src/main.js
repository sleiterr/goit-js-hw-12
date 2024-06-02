//main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNotification } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .getElementById('searchForm')
  .addEventListener('submit', async event => {
    event.preventDefault();

    const query = event.target.elements.search.value.trim();
    if (!query) {
      showNotification('Please enter a search term');
      return;
    }

    document.getElementById('results').innerHTML =
      '<div class="loader">Loading...</div>';

    try {
      const data = await fetchImages(query);

      if (data.hits.length === 0) {
        showNotification(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderGallery(data.hits);
      }
    } catch (error) {
      showNotification(error.message);
    } finally {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.remove();
      }
    }
  });
