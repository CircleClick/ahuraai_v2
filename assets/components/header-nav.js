function loadNavbar() {
    const header = document.createElement('header');
    header.classList.add('container-fluid');

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <!-- Add the logo here -->
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/ahura-logo.png" alt="Ahura Logo" class="logo-img">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Main Navigation Links shifted to the left -->
                <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="https://ahura.ai/" target="_blank" rel="noopener noreferrer">Product</a>
                        </li>
                        <!-- Solutions Dropdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Solutions</a>
                            <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
                                <a class="dropdown-item" href="employee-retention.html">Employee Retention</a>
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">AI Tutor</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="features-and-use-cases.html">Features & Use Cases</a></li>
                                        <li><a class="dropdown-item" href="benefits-and-learning.html">Benefits & Learning</a></li>
                                        <li><a class="dropdown-item" href="benefits-for-supervisors.html">Benefits For Supervisors</a></li>
                                    </ul>
                                </div>
                                <a class="dropdown-item" href="manager-gen-ai-training.html">Manager Gen AI Training</a>
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Events On Responsible Tech</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="davos-2024-the-ai-and-crypto-lounge.html">Davos 2024: The AI & Crypto Lounge</a></li>
                                        <li><a class="dropdown-item" href="necker-legacy-guardians.html">Necker Legacy Guardians</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- Other Dropdowns and Links -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="thinkingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Learn</a>
                            <div class="dropdown-menu" aria-labelledby="thinkingDropdown">
                                <a class="dropdown-item" href="success-stories.html">Success Stories</a>
                                <a class="dropdown-item" href="https://blog.ahuraai.com" target="_blank" rel="noopener noreferrer">Blog</a>
                                <a class="dropdown-item" href="https://blog.ahuraai.com/how-i-learn/" target="_blank" rel="noopener noreferrer">How We Learn</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="company.html">Team</a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Us and Request Demo -->
                <div class="navbar-contact-demo ms-auto d-flex align-items-center">
                    <div class="contact-info d-flex align-items-center">
                        <div class="phone-icon-wrapper">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <span class="contact-text ms-2">
                            <a href="tel:1-800-AHURA-AI">CONTACT US<br>1-800-AHURA-AI</a>
                        </span>
                    </div>
                    <a href="sign-up.html" class="request-demo btn btn-outline-light btn-demo ms-3">Request Demo</a>
                </div>
            </div>
        </nav>
    `;

    document.body.prepend(header);  // Add the header at the top of the body
}

// Adding animations and submenu handling
document.addEventListener("DOMContentLoaded", function () {
    // Add slideDown animation to Bootstrap dropdown when expanding
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('show.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('slide-down');
            dropdownMenu.style.display = 'block';
            setTimeout(function() {
                dropdownMenu.classList.remove('slide-down');
            }, 200); // This matches the animation duration
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('slide-up');
            setTimeout(function() {
                dropdownMenu.style.display = 'none';
                dropdownMenu.classList.remove('slide-up');
            }, 200); // This matches the animation duration
        });
    });

    // Submenu handling to prevent parent dropdown from closing
    document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(function(submenuToggle) {
        submenuToggle.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent adding "#" to the URL
            e.stopPropagation(); // Stop the dropdown from closing

            const subMenu = this.nextElementSibling;

            // Hide any other open submenus
            const parentMenu = this.closest('.dropdown-menu');
            parentMenu.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                if (menu !== subMenu) {
                    menu.classList.remove('show');
                }
            });

            // Toggle the clicked submenu
            subMenu.classList.toggle('show');
        });
    });
});

// Call the function to load the navbar when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
});
