//main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNotification } from './js/render-function.js';
import 'izitoast/dist/css/iziToast.min.css';

let currentPage = 1;
let currentQuery = '';

document
  .getElementById('searchForm')
  .addEventListener('submit', async event => {
    event.preventDefault();

    currentQuery = event.target.elements.search.value.trim();
    if (!currentQuery) {
      showNotification('Please enter a search term');
      return;
    }

    currentPage = 1;
    document.getElementById('results').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'none';

    await loadImages()
    });

document.getElementById('loadMoreBtn').addEventListener('click', async () => {
  currentPage++;
  await loadImages();

});

async function loadImages() {
  document
    .getElementById('results')
    .insertAdjacentHTML('beforeend', '<div class="loader">Loading...</div>');

  try {
    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderGallery(data.hits);
      if (currentPage * 15 >= data.totalHits) {
        document.getElementById('loadMoreBtn').style.display = 'none';
        showNotification(
          "We're sorry, but you've reached the end of search results."
        );
      } else {
        document.getElementById('loadMoreBtn').style.display = 'block';
      }
    }
  } catch (error) {
    showNotification(error.message);
  } finally {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.remove();
    }
  }
}
