document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.vibro-thumb');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const newSrc = thumb.getAttribute('data-image');
      mainImage.src = newSrc;
    });
  });
});
