
// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Sticky Navigation
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Countdown Timer
function updateCountdown() {
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  
  let h = parseInt(hours.textContent);
  let m = parseInt(minutes.textContent);
  let s = parseInt(seconds.textContent);
  
  s--;
  
  if (s < 0) {
    s = 59;
    m--;
    if (m < 0) {
      m = 59;
      h--;
      if (h < 0) {
        h = 24;
      }
    }
  }
  
  hours.textContent = h.toString().padStart(2, '0');
  minutes.textContent = m.toString().padStart(2, '0');
  seconds.textContent = s.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Menu Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get category value
    const category = button.getAttribute('data-category');
    
    // Filter menu items
    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Testimonial Slider
const reviewCards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');
let currentReview = 0;

function showReview(index) {
  // Hide all reviews
  reviewCards.forEach(card => {
    card.classList.remove('active');
  });
  
  // Remove active from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show the selected review
  reviewCards[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentReview = index;
    showReview(currentReview);
  });
});

// Auto change review every 5 seconds
setInterval(() => {
  currentReview = (currentReview + 1) % reviewCards.length;
  showReview(currentReview);
}, 5000);

// Form Submission
const reservationForm = document.querySelector('.reservation-form');

reservationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;
  
  // Here you would typically send this data to your backend
  console.log('Reservation submitted:', { name, email, date, time, guests });
  
  // Show a success message
  alert('Thank you! Your reservation has been submitted.');
  
  // Reset the form
  reservationForm.reset();
});

// Add animation on scroll
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.menu-item, .blog-card, .chef-card, .reason-card');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    // If element is in viewport
    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});

// Initialize (show the first review)
showReview(currentReview);
