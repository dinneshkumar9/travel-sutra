 // ==== Lightbox Functionality ====
 const galleryImages = document.querySelectorAll('.gallery-grid img');
 const lightbox       = document.getElementById('lightbox');
 const lightboxImg    = document.querySelector('.lightbox-img');
 const closeBtn       = document.querySelector('.lightbox-close');
 const prevBtn        = document.querySelector('.lightbox-prev');
 const nextBtn        = document.querySelector('.lightbox-next');
 
 let currentIndex = 0;
 function showLightbox(idx) {
   currentIndex = idx;
   lightboxImg.src = galleryImages[idx].src;
   lightbox.style.display = 'flex';
 }
 
 // open on click
 galleryImages.forEach((img, i) =>
   img.addEventListener('click', () => showLightbox(i))
 );
 
 // close handlers
 closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
 lightbox.addEventListener('click', e => {
   if (e.target === lightbox) lightbox.style.display = 'none';
 });
 
 // prev/next
 prevBtn.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
   lightboxImg.src = galleryImages[currentIndex].src;
 });
 nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % galleryImages.length;
   lightboxImg.src = galleryImages[currentIndex].src;
 });