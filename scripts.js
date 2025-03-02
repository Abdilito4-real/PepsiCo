let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

window.addEventListener('load', function() {
  // Hide loader after 1s (adjust delay if needed)
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 5000); // 5000ms = 5 second
});





function startSearch() {
  const btn = document.querySelector('.find-us-btn');
  const searching = document.querySelector('.searching');
  const message = document.querySelector('.hidden-message');
  const radar = document.querySelector('.radar');
  
  // Reset animations
  radar.style.animation = 'none';
  void radar.offsetWidth; // Trigger reflow
  radar.style.animation = 'rotateRadar 4s linear';
  
  // Show searching state
  btn.disabled = true;
  searching.style.display = 'block';
  message.style.display = 'none';
  
  // Simulate search completion
  setTimeout(() => {
      searching.style.display = 'none';
      message.style.display = 'block';
      btn.disabled = false;
  }, 4000); // Matches radar animation duration
}




// Add touch events to slideshow
let touchStartX = 0;
let touchEndX = 0;

const slider = document.querySelector('.slideshow-container');

slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        plusSlides(1);
    }
    if (touchEndX - touchStartX > 50) {
        plusSlides(-1);
    }
}, false);



// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector('.navbar ul');
  const hamburger = document.querySelector('.hamburger');
  
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
  }
});