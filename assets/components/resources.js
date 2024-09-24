function loadResources() {
    // Function to load a CSS file
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // Function to load a JS file
    function loadJS(src, async = true, integrity = null, crossorigin = null) {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        if (integrity) script.integrity = integrity;
        if (crossorigin) script.crossOrigin = crossorigin;
        document.head.appendChild(script);
    }

    // Load CSS files
    loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    loadCSS("assets/styles/nav.css");
    loadCSS("assets/styles/footer.css");
    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

    // Load JS files
    loadJS("https://code.jquery.com/jquery-3.6.0.min.js", true, null, "anonymous");
    loadJS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");

    // Load Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PGBJXGT');
    `;
    document.head.appendChild(gtmScript);

    // Load LeadFeeder Tracking
    const leadFeederScript = document.createElement('script');
    leadFeederScript.innerHTML = `
        (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
        (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; 
        fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); 
        })(document,'script'); 
        })('3P1w24d20R98mY5n');
    `;
    document.head.appendChild(leadFeederScript);

    // Load Google Analytics
    loadJS("https://www.googletagmanager.com/gtag/js?id=AW-10986366392", true);
}

// Call the function to load resources when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadResources();
});
