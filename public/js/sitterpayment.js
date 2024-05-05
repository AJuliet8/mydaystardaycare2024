document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle form submission here
      console.log('Form submitted');
    });
  });
  