/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true // Set to true for animations to repeat on scroll
});

// Scroll animations
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
sr.reveal('.home__title', {}); 
sr.reveal('.button', { delay: 200 });
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 }); 
sr.reveal('.work__img', { interval: 200 }); 
sr.reveal('.contact__input', { interval: 200 }); 

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the experience container
//     const expContainer = document.querySelector('.experience-container');
//     const cards = document.querySelectorAll('.experience-card');
    
//     if (!expContainer || cards.length === 0) return;
    
//     // Add navigation buttons after the container
//     const navDiv = document.createElement('div');
//     navDiv.className = 'experience-nav';
    
//     const prevBtn = document.createElement('button');
//     prevBtn.innerHTML = '&lt;';
//     prevBtn.setAttribute('aria-label', 'Previous card');
    
//     const nextBtn = document.createElement('button');
//     nextBtn.innerHTML = '&gt;';
//     nextBtn.setAttribute('aria-label', 'Next card');
    
//     navDiv.appendChild(prevBtn);
//     navDiv.appendChild(nextBtn);
    
//     expContainer.insertAdjacentElement('afterend', navDiv);
    
//     // Set up auto-scroll functionality
//     let scrollInterval;
//     let currentIndex = 0;
    
//     // Function to scroll to a specific card
//     function scrollToCard(index) {
//       if (index < 0) index = cards.length - 1;
//       if (index >= cards.length) index = 0;
      
//       currentIndex = index;
//       cards[index].scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'nearest',
//         inline: 'center' 
//       });
//     }
    
//     // Start auto-scrolling
//     function startAutoScroll() {
//       clearInterval(scrollInterval);
//       scrollInterval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % cards.length;
//         scrollToCard(currentIndex);
//       }, 3000); // Change card every 3 seconds
//     }
    
//     // Stop auto-scrolling on user interaction
//     function stopAutoScroll() {
//       clearInterval(scrollInterval);
//     }
    
//     // Initialize auto-scroll
//     startAutoScroll();
    
//     // Add event listeners for manual navigation
//     prevBtn.addEventListener('click', () => {
//       stopAutoScroll();
//       scrollToCard(currentIndex - 1);
//       setTimeout(startAutoScroll, 5000);
//     });
    
//     nextBtn.addEventListener('click', () => {
//       stopAutoScroll();
//       scrollToCard(currentIndex + 1);
//       setTimeout(startAutoScroll, 5000);
//     });
    
//     // Pause auto-scroll when user interacts with container
//     expContainer.addEventListener('mouseenter', stopAutoScroll);
//     expContainer.addEventListener('touchstart', stopAutoScroll, {passive: true});
    
//     // Resume auto-scroll when user leaves container
//     expContainer.addEventListener('mouseleave', startAutoScroll);
//     expContainer.addEventListener('touchend', () => {
//       setTimeout(startAutoScroll, 3000);
//     }, {passive: true});
    
//     // Handle manual scrolling
//     let isScrolling;
//     expContainer.addEventListener('scroll', () => {
//       stopAutoScroll();
      
//       // Clear our timeout throughout the scroll
//       clearTimeout(isScrolling);
      
//       // Set a timeout to run after scrolling ends
//       isScrolling = setTimeout(() => {
//         // Find which card is most visible
//         let closestCard = cards[0];
//         let closestDistance = Infinity;
        
//         const containerCenter = expContainer.offsetWidth / 2 + expContainer.scrollLeft;
        
//         cards.forEach((card, index) => {
//           const cardCenter = card.offsetLeft + card.offsetWidth / 2;
//           const distance = Math.abs(containerCenter - cardCenter);
          
//           if (distance < closestDistance) {
//             closestDistance = distance;
//             closestCard = card;
//             currentIndex = index;
//           }
//         });
        
//         // Resume auto-scrolling after a delay
//         setTimeout(startAutoScroll, 3000);
//       }, 150);
//     }, {passive: true});
    
//     // Make sure cards are properly sized on window resize
//     window.addEventListener('resize', () => {
//       // Scroll to current card to ensure proper alignment after resize
//       setTimeout(() => {
//         scrollToCard(currentIndex);
//       }, 100);
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".experience-container");
  const cards = document.querySelectorAll(".experience-card");
  let index = 0;

  function scrollCards() {
    if (index >= cards.length) {
      index = 0; // Reset to first card
    }
    const cardWidth = cards[index].offsetWidth + 20; // Include gap
    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    index++;
  }

  // Scroll every 5 seconds
  setInterval(scrollCards, 5000);
});