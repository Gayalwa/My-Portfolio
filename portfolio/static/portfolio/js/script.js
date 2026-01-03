/* hamburger removed - no toggle/close functions needed */

// Open lightbox with clicked image
function openLightbox(imgEl) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const src = imgEl.getAttribute("data-full") || imgEl.src;
  lightboxImg.src = src;
  caption.textContent = imgEl.nextElementSibling ? imgEl.nextElementSibling.textContent : imgEl.alt || '';
  // set current index among visible items
  const allVisible = Array.from(document.querySelectorAll('.gallery-item:not(.hidden) img'));
  currentVisibleIndex = allVisible.indexOf(imgEl);
  lightbox.classList.remove("hidden");
}

function closeLightbox(event) {
  // prevent clicks on the image itself from closing
  if (event && event.target && (event.target.id === 'lightbox-img' || event.target.classList.contains('gallery-item'))) return;
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.add("hidden");
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg) lightboxImg.src = '';
  }
}

// close with ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// gallery filtering
function filterGallery(category, btn) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(it => {
    const cat = it.getAttribute('data-category');
    if (category === 'all' || cat === category) it.classList.remove('hidden');
    else it.classList.add('hidden');
  });
  // update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // no mobile menu to close
}

// lightbox navigation
let currentVisibleIndex = 0;

function showPrev(event) {
  if (event) event.stopPropagation();
  const imgs = Array.from(document.querySelectorAll('.gallery-item:not(.hidden) img'));
  if (imgs.length === 0) return;
  currentVisibleIndex = (currentVisibleIndex - 1 + imgs.length) % imgs.length;
  const imgEl = imgs[currentVisibleIndex];
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  lightboxImg.src = imgEl.getAttribute('data-full') || imgEl.src;
  caption.textContent = imgEl.nextElementSibling ? imgEl.nextElementSibling.textContent : imgEl.alt || '';
}

function showNext(event) {
  if (event) event.stopPropagation();
  const imgs = Array.from(document.querySelectorAll('.gallery-item:not(.hidden) img'));
  if (imgs.length === 0) return;
  currentVisibleIndex = (currentVisibleIndex + 1) % imgs.length;
  const imgEl = imgs[currentVisibleIndex];
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  lightboxImg.src = imgEl.getAttribute('data-full') || imgEl.src;
  caption.textContent = imgEl.nextElementSibling ? imgEl.nextElementSibling.textContent : imgEl.alt || '';
}
//scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const nextSection = document.querySelector('#projects');
    nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// initialize: ensure 'all' is active on load
document.addEventListener('DOMContentLoaded', function () { filterGallery('all', document.querySelector('.filter-btn.active')); });
