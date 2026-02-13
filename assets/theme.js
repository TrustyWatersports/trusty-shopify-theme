// Trusty Sail & Paddle Theme JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  
  // Add to cart functionality
  const addToCartForms = document.querySelectorAll('form[action*="/cart/add"]');
  addToCartForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();
        
        // Update cart count
        const cartResponse = await fetch('/cart.js');
        const cartData = await cartResponse.json();
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
          cartCount.textContent = cartData.item_count;
        }
        
        // Show success message
        alert('Added to cart!');
        
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('There was an error adding this item to your cart.');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
