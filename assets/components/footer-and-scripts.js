function loadFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('container-fluid', 'py-4', 'bg-light');
    footer.id = 'footer';
    
    footer.innerHTML = `
        <div class="success-call-to-action text-center mt-4">
            <h3>Start Customizing Your AI Training Today</h3>
            <button class="mt-4 btn-lg btn-primary" style="background: linear-gradient(to right, black, #ff9966); border-color: yellow; border-radius: 50px;">
                <a href="manager-gen-ai-training.html" style="text-decoration: none !important; color: white;">
                    Fill Out The Form
                </a>
            </button>
        </div>
        <div class="row align-items-center">
            <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
                <img src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/custom-landing-page-gradient/ahura_logo_bottom.png" alt="Ahura Logo" class="img-fluid">
            </div>
            <div class="col-md-4 text-center">
                <p class="mb-0" style="color: #003366; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
                    Boost your learning power. Meet your future.
                </p>
            </div>
            <div class="col-md-4 text-center text-md-end mt-2 mt-md-0">
                <a href="https://www.facebook.com/ahuraai/"><img src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/custom-landing-page-gradient/fb.png" alt="Facebook" class="img-fluid mx-1" style="width: 30px;"></a>
                <a href="https://twitter.com/AhuraAi"><img src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/custom-landing-page-gradient/twitter.png" alt="Twitter" class="img-fluid mx-1" style="width: 30px;"></a>
                <a href="https://www.linkedin.com/company/ahuraai/"><img src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/custom-landing-page-gradient/in.png" alt="LinkedIn" class="img-fluid mx-1" style="width: 30px;"></a>
            </div>
        </div>
        
        <!-- Tracking scripts -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        <!-- jQuery Script to Prevent Dropdown from Closing on Click -->
        <script>
        $(document).ready(function () {
            $('.dropdown-menu').on('click', function (e) {
                e.stopPropagation();
            });
        });
        </script>
        
        <!-- Smooth scrolling -->
        <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        </script>
        
        <!-- Lazy Loading for images -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" async></script>
        <script>
        document.addEventListener("DOMContentLoaded", function() {
            const lazyLoadInstance = new LazyLoad({
                elements_selector: ".lazy"
            });
        });
        </script>
        
        <!-- Google Tag Manager and tracking -->
        <iframe allow="join-ad-interest-group" data-tagging-id="G-GLS0RMX4P2" data-load-time="1723557527106" height="0" width="0" src="https://td.doubleclick.net/td/ga/rul?tid=G-GLS0RMX4P2&gacid=1217672706.1722954732&..."></iframe>
        <iframe allow="join-ad-interest-group" data-tagging-id="AW-10986366392" data-load-time="1723557523188" height="0" width="0" src="https://td.doubleclick.net/td/rul/10986366392?random=1723557523181&cv=11&fmt=3..."></iframe>
    `;

    document.body.appendChild(footer);  // Append the footer to the body
}

// Load the footer when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
});
