// Initialize Google Map
function initMap() {
    // Coordinates for COMSATS Abbottabad
    const comsatsLocation = { lat: 34.1825, lng: 73.2287 };
    
    // Create map centered at COMSATS
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: comsatsLocation,
        mapTypeId: "terrain",
    });
    
    // Add marker
    new google.maps.Marker({
        position: comsatsLocation,
        map: map,
        title: "COMSATS University Islamabad, Abbottabad Campus",
    });
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Sending...
        `;
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            
            // Show success message
            formStatus.innerHTML = `
                <div class="alert alert-success">
                    <i class="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully.
                </div>
            `;
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
            
        }, 1500);
    });
    
    // Social media links (could be enhanced with actual functionality)
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split(' ')[1];
            console.log(`Redirecting to ${platform}...`);
            // In a real implementation, this would open the social media page
        });
    });
});