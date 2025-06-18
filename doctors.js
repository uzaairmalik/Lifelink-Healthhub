// ===== DOCTORS SECTION FUNCTIONALITY =====
// DOM Elements
const doctorsList = document.getElementById('doctorsList');
const doctorSearchForm = document.getElementById('doctorSearchForm');
const appointmentForm = document.getElementById('appointmentForm');
const appointmentModal = new bootstrap.Modal('#appointmentModal');

// Doctor Data (Would normally come from API)
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Khan",
        specialty: "Cardiology",
        location: "Islamabad",
        hospital: "Shifa International Hospital",
        experience: "12 years",
        rating: 4.8,
        image: "doctor1.jpg",
        fee: 2500,
        availableDays: ["Mon", "Wed", "Fri"]
    },
    {
        id: 2,
        name: "Dr. Ali Ahmed",
        specialty: "Dermatology",
        location: "Karachi",
        hospital: "Aga Khan Hospital",
        experience: "8 years",
        rating: 4.5,
        image: "doctor2.jpg",
        fee: 2000,
        availableDays: ["Tue", "Thu", "Sat"]
    },
    {
        id: 3,
        name: "Dr. Fatima Malik",
        specialty: "Pediatrics",
        location: "Lahore",
        hospital: "Children's Hospital",
        experience: "15 years",
        rating: 4.9,
        image: "doctor3.jpg",
        fee: 1800,
        availableDays: ["Mon", "Tue", "Wed", "Thu"]
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderDoctors(doctors);
    setupEventListeners();
});

// Render doctors list
function renderDoctors(doctorsData) {
    doctorsList.innerHTML = '';
    
    if (doctorsData.length === 0) {
        doctorsList.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    No doctors found matching your criteria. Please try different filters.
                </div>
            </div>
        `;
        return;
    }
    
    doctorsData.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'col-md-4 mb-4';
        doctorCard.innerHTML = createDoctorCardHTML(doctor);
        doctorsList.appendChild(doctorCard);
    });
    
    // Add event listeners to new book buttons
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', handleBookAppointment);
    });
}

// Create HTML for doctor card
function createDoctorCardHTML(doctor) {
    return `
        <div class="card doctor-card h-100">
            <img src="assets/images/doctors/${doctor.image}" class="card-img-top doctor-img" alt="${doctor.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${doctor.name}</h5>
                <span class="doctor-specialty">${doctor.specialty}</span>
                
                <div class="doctor-details mt-2">
                    <p class="text-muted mb-1">
                        <i class="fas fa-hospital me-2"></i>${doctor.hospital}
                    </p>
                    <p class="text-muted mb-1">
                        <i class="fas fa-map-marker-alt me-2"></i>${doctor.location}
                    </p>
                    <p class="text-muted mb-1">
                        <i class="fas fa-briefcase me-2"></i>${doctor.experience} experience
                    </p>
                    <p class="text-muted mb-2">
                        <i class="fas fa-calendar-alt me-2"></i>Available: ${doctor.availableDays.join(', ')}
                    </p>
                </div>
                
                <div class="rating mb-2">
                    ${generateRatingStars(doctor.rating)}
                    <span class="ms-1">${doctor.rating}</span>
                </div>
                
                <div class="mt-auto">
                    <p class="fw-bold mb-3">Consultation Fee: Rs. ${doctor.fee}</p>
                    <button class="btn btn-primary btn-book book-btn" data-doctor-id="${doctor.id}">
                        <i class="fas fa-calendar-check me-2"></i>Book Appointment
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

// Set up event listeners
function setupEventListeners() {
    // Search form submission
    doctorSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const specialization = document.getElementById('specialization').value;
        const location = document.getElementById('location').value;
        
        const filteredDoctors = doctors.filter(doctor => {
            const matchesSpecialty = !specialization || doctor.specialty === specialization;
            const matchesLocation = !location || doctor.location === location;
            return matchesSpecialty && matchesLocation;
        });
        
        renderDoctors(filteredDoctors);
    });
    
    // Appointment form submission
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitAppointment();
    });
}

// Handle book appointment click
function handleBookAppointment(e) {
    const doctorId = parseInt(e.currentTarget.getAttribute('data-doctor-id'));
    const doctor = doctors.find(d => d.id === doctorId);
    
    if (doctor) {
        document.getElementById('doctorId').value = doctor.id;
        document.querySelector('.modal-title').textContent = `Book Appointment with ${doctor.name}`;
        
        // Set minimum appointment date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.getElementById('appointmentDate').min = tomorrow.toISOString().split('T')[0];
        
        appointmentModal.show();
    }
}

// Submit appointment form
function submitAppointment() {
    const formData = {
        doctorId: document.getElementById('doctorId').value,
        patientName: document.getElementById('patientName').value.trim(),
        contactNumber: document.getElementById('contactNumber').value.trim(),
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value
    };
    
    // Basic validation
    if (!formData.patientName || !formData.contactNumber || !formData.date || !formData.time) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Appointment data:', formData);
    
    // Show success message
    const doctor = doctors.find(d => d.id == formData.doctorId);
    alert(`Appointment booked successfully with ${doctor.name} on ${formData.date} at ${formData.time}`);
    
    // Reset form and close modal
    appointmentForm.reset();
    appointmentModal.hide();
    
    // You would typically redirect or update UI here
}