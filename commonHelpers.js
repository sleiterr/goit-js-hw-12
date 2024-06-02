import{S as c}from"./assets/vendor-338edac8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const l="44080316-241692617940885c4f90d7de4",d="https://pixabay.com/api/";async function u(n){const r=`${d}?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,t=await fetch(r);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}function f(n){const r=document.getElementById("results");r.innerHTML="",n.forEach(s=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
      <a href="${s.largeImageURL}" class="gallery-link">
        <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image"/>
      </a>
      <div class="card-body">
        <p>${s.tags}</p>
        <div class="stats">
          <span>Likes: ${s.likes}</span>
          <span>Views: ${s.views}</span>
          <span>Comments: ${s.comments}</span>
          <span>Downloads: ${s.downloads}</span>
        </div>
      </div>
    `,r.appendChild(e)}),new c(".gallery-link").refresh()}function i(n){iziToast.error({title:"Error",message:n})}document.getElementById("searchForm").addEventListener("submit",async n=>{n.preventDefault();const r=n.target.elements.search.value.trim();if(!r){i("Please enter a search term");return}document.getElementById("results").innerHTML='<div class="loader">Loading...</div>';try{const t=await u(r);t.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):f(t.hits)}catch(t){i(t.message)}finally{const t=document.querySelector(".loader");t&&t.remove()}});
//# sourceMappingURL=commonHelpers.js.map
