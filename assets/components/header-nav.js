function loadNavbar() {
    const navbarHTML = `
        <header class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
                <div class="container">
                    <!-- Logo -->
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/images/ahura-logo.png" alt="Ahura Logo" class="logo-img">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Main Navigation Links -->
                    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul class="navbar-nav">
                            <!-- Company Dropdown -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
                                <div class="dropdown-menu" aria-labelledby="companyDropdown">
                                    <a class="dropdown-item" href="company.html">Team</a>
                                    <a class="dropdown-item" href="privacy-policy.html">Privacy Policy</a>
                                    <a class="dropdown-item" href="terms-of-use.html">Terms of Use</a>
                                    <a class="dropdown-item" href="sign-up.html">Contact Us</a>
                                    <a class="dropdown-item" href="#">Site Map</a>
                                </div>
                            </li>

                            <!-- Solutions Dropdown -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</a>
                                <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <div class="dropdown-submenu">
                                        <a class="dropdown-item dropdown-toggle" href="#">AI Tutor</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="features-and-use-cases.html">Use Cases</a></li>
                                            <li><a class="dropdown-item" href="benefits-and-learning.html">Learner Benefits</a></li>
                                            <li><a class="dropdown-item" href="benefits-for-supervisors.html">Mentor Benefits</a></li>
                                        </ul>
                                    </div>
                                    <a class="dropdown-item" href="manager-gen-ai-training.html">Gen AI Workshops</a>
                                </div>
                            </li>

                            <!-- Learn More Dropdown -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="learnMoreDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Learn More</a>
                                <div class="dropdown-menu" aria-labelledby="learnMoreDropdown">
                                    <a class="dropdown-item" href="success-stories.html">Success Stories</a>
                                    <a class="dropdown-item" href="https://blog.ahuraai.com" target="_blank" rel="noopener noreferrer">Insights</a>
                                    <a class="dropdown-item" href="https://blog.ahuraai.com/how-i-learn/" target="_blank" rel="noopener noreferrer">"How I Learn"</a>
                                </div>
                            </li>

                            <!-- Responsible AI Dropdown -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="responsibleAIDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Responsible AI</a>
                                <div class="dropdown-menu" aria-labelledby="responsibleAIDropdown">
                                    <a class="dropdown-item" href="#">Declaration of AI</a>
                                    <a class="dropdown-item" href="#">FoHS DC 2024</a>
                                    <a class="dropdown-item" href="davos-2024-the-ai-and-crypto-lounge.html">Davos 2024: The AI & Crypto Lounge</a>
                                    <a class="dropdown-item" href="necker-legacy-guardians.html">Legacy Guardians</a>
                                    <a class="dropdown-item" href="#">Future Events</a>
                                </div>
                            </li>
                        </ul>

                        <!-- Mobile buttons -->
                      <a href="sign-up.html" class="btn btn-outline-light btn-demo d-lg-none">Request Demo</a>
<a href="#" class="btn btn-outline-light btn-demo sign-in-button d-lg-none">
    <i class="fas fa-graduation-cap"></i>
</a>
                    </div>

                  <!-- Desktop buttons and contact info -->
<div class="navbar-contact-demo ml-auto d-none d-lg-flex align-items-center">
    <div class="contact-info d-flex align-items-center">
        <div class="phone-icon-wrapper">
            <i class="fas fa-phone-alt"></i>
        </div>
        <span class="contact-text ml-2">
            <a href="tel:1-855-AHURA-AI">CONTACT US<br>1-855-AHURA-AI</a>
        </span>
    </div>
    <a href="#" class="btn btn-outline-light btn-demo sign-in-button">
        <i class="fas fa-graduation-cap"></i> Sign In
    </a>
    <a href="sign-up.html" class="btn btn-outline-light btn-demo">Request Demo</a>
</div>

            </nav>
        </header>
    `;
    document.getElementById('navbar-container').innerHTML = navbarHTML;
}
