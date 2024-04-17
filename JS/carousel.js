document.addEventListener('DOMContentLoaded', (event) => {
    const cardsContainer = document.querySelector('.skills-container .cards');
    const cards = Array.from(document.querySelectorAll('.skill-card')); // Convert NodeList to Array
    const totalCards = cards.length;
    const gap = 50; // Gap between cards

    function updateActiveClass() {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));
        // Add active class to the middle card
        cards[Math.floor(totalCards / 2)].classList.add('active');
    }

    function fadeCardInOut(card, fadeOut = true) {
        if (fadeOut) {
          card.style.opacity = '0';
          setTimeout(() => card.style.opacity = '', 50); // Remove inline style for opacity after transition
        } else {
          const clone = card.cloneNode(true);
          clone.style.opacity = '0';
          card.parentNode.replaceChild(clone, card);
          setTimeout(() => clone.style.opacity = '', 50); // Fade card in
        }
      }

    // Function to move card to end or start of container
    function rotateCards(direction) {
        cardsContainer.style.transition = 'transform 0.5s ease';
        if (direction === 'next') {
            // Move the first card to the end
            cardsContainer.appendChild(cards.shift());
            cards.push(cardsContainer.lastElementChild);
        } else {
            // Move the last card to the start
            cardsContainer.insertBefore(cards.pop(), cardsContainer.firstChild);
            cards.unshift(cardsContainer.firstElementChild);
        }
        
        updateActiveClass();
        };

    document.getElementById('nextBtn').addEventListener('click', function() {
        rotateCards('next');
    });
  
    document.getElementById('prevBtn').addEventListener('click', function() {
        rotateCards('prev');
    });

    updateActiveClass(); // Set initial active class
});
