import{a as u,S as m,i as y}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const f="44080316-241692617940885c4f90d7de4",p="https://pixabay.com/api/";async function g(t,o=1,n=15){const r=`${p}?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`,e=await u.get(r);if(e.status!==200)throw new Error(`HTTP error! status: ${e.status}`);return e.data}function h(t){const o=document.getElementById("results");t.forEach(r=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
      <a href="${r.largeImageURL}" class="gallery-link">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image"/>
      </a>
      <div class="card-body">
        <p>${r.tags}</p>
        <div class="stats">
          <span>Likes: ${r.likes}</span>
          <span>Views: ${r.views}</span>
          <span>Comments: ${r.comments}</span>
          <span>Downloads: ${r.downloads}</span>
        </div>
      </div>
    `,o.appendChild(e)}),new m(".gallery-link").refresh(),E()}function a(t){y.error({title:"Error",message:t})}function E(){const t=document.getElementById("results"),{height:o}=t.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}let l=1,c="";document.getElementById("searchForm").addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements.search.value.trim(),!c){a("Please enter a search term");return}l=1,document.getElementById("results").innerHTML="",document.getElementById("loadMoreBtn").style.display="none",await d()});document.getElementById("loadMoreBtn").addEventListener("click",async()=>{l++,await d()});async function d(){document.getElementById("results").insertAdjacentHTML("beforeend",'<div class="loader">Loading...</div>');try{const t=await g(c,l);t.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(h(t.hits),l*15>=t.totalHits?(document.getElementById("loadMoreBtn").style.display="none",a("We're sorry, but you've reached the end of search results.")):document.getElementById("loadMoreBtn").style.display="block")}catch(t){a(t.message)}finally{const t=document.querySelector(".loader");t&&t.remove()}}
//# sourceMappingURL=commonHelpers.js.map
