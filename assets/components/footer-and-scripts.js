function loadFooter() {
    const footerHTML = `
        <footer id="footer" class="container-fluid py-4" style="background-color: #000; color: #fff;">
            <div class="row" style="padding-top:50px; flex-wrap: wrap;">
                <div class="col-md-6 col-12" style="padding: 0 20px; text-align: center; margin-bottom: 40px;">
                    <h5 style="font-weight: bold; color: #fff; margin-bottom: 15px; padding-right:55px;">USEFUL LINKS</h5>
                    <ul style="list-style-type: none; padding: 0; font-size: 14px; color: #fff; display: inline-block; text-align: left;">
                        <li><a href="index.html" style="color: #fff; text-decoration: none;">HOME</a></li>
                        <li><a href="#" style="color: #fff; text-decoration: none;">SOLUTIONS</a></li>
                        <li style="padding-left: 20px;"><a href="features-and-use-cases.html" style="color: #fff; text-decoration: none;">TOP USES FOR LEARNERS</a></li>
                        <li><a href="company.html" style="color: #fff; text-decoration: none;">COMPANY</a></li>
                        <li><a href="https://blog.ahuraai.com" style="color: #fff; text-decoration: none;">THINKING</a></li>
                        <li><a href="sign-up.html" style="color: #fff; text-decoration: none;">GET IN TOUCH</a></li>
                        <li><a href="privacy-policy.html" style="color: #fff; text-decoration: none;">PRIVACY POLICY</a></li>
                        <li><a href="terms-of-use.html" style="color: #fff; text-decoration: none;">TERMS OF USE</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-12 text-center" style="padding: 0 20px;">
                    <div style="display: inline-block; text-align: left;">
                        <img src="assets/images/ahura-logo.png" alt="Ahura Logo" class="img-fluid mb-3" style="max-width: 200px; display: block; margin-bottom: 10px;">
                        <p style="font-size: 14px; line-height: 1.5; color: #fff; margin-bottom: 10px;">2831 Mission College Blvd.<br>Santa Clara, CA 95054<br><br><a style="text-decoration:none; color:white;" href="tel:+019493224716">+01 949-322-4716</p>
                        <div>
                                     <a href="https://www.facebook.com/ahuraai/" target="_blank"><img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" style="width: 25px; margin: 0 5px;"></a>
                                                        <a href="https://www.linkedin.com/company/ahuraai/" target="_blank"><img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"style="width: 25px; margin: 0 5px;"></a>
                                                        <a href="https://twitter.com/AhuraAi" target="_blank"><img src="https://img.icons8.com/?size=100&id=bxZLggOb1L5G&format=png&color=FFFFFF"style="width: 25px; margin: 0 5px;"></a>
                                                        <a href="https://www.instagram.com/ahuraai/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-instagram-social-media-tanah-basah-glyph-tanah-basah.png"style="width: 25px; margin: 0 5px;"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
}
