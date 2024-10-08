const apiUrl = `${window.location.origin}/api/submit-form`;

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this); // Get form data
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(apiUrl, { // Use dynamic URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const confirmationMessage = document.getElementById('confirmation-message');

        if (response.ok) {
            const result = await response.json();
            confirmationMessage.innerText = result.message;
            confirmationMessage.style.display = 'block';
            this.reset(); // Reset form fields
        } else {
            throw new Error('Error submitting form');
        }
    } catch (error) {
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.innerText = 'Error submitting form'; // Show error message
        confirmationMessage.style.display = 'block';
    }
});

const headerMenu = document.getElementById('header-menu');
const headerNav = document.getElementById('header-nav');

headerMenu.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    headerNav.classList.toggle('active');
  }
});


window.addEventListener('scroll', function() {
  const heroGrid1 = document.querySelector('.hero-grid-1');
  const heroGrid3 = document.querySelector('.hero-grid-3');

  if (window.innerWidth > 768) {
      if (window.scrollY > 100) {
          heroGrid1.classList.add('swapped');
          heroGrid3.classList.add('swapped');
      } else {
          heroGrid1.classList.remove('swapped');
          heroGrid3.classList.remove('swapped');
      }
  } else {
      heroGrid1.classList.remove('swapped');
      heroGrid3.classList.remove('swapped');
  }
});
