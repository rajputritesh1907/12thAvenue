document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });



    // Loan Calculator Logic
    const ranges = document.querySelectorAll('.range-slider');
    ranges.forEach(range => {
        range.addEventListener('input', (e) => {
            // In a real app, this would update displayed values next to the slider
            // console.log(e.target.value); 
        });
    });

    const loanForm = document.getElementById('loan-form');
    if (loanForm) {
        loanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Loan calculation feature would trigger here.');
        });
    }


    // Form Submission Mock
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.backgroundColor = '#28a745';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }

    // New Gallery Banner Logic
    const mainBannerImage = document.getElementById('mainBannerImage');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails .thumb');
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');

    // Image sources array - ensure these match the order of thumbnails
    const bannerImages = [
        'assets/images/banner1.png',
        'assets/images/banner2.png',
        'assets/images/banner3.png',
        'assets/images/banner4.jpg',
        'assets/images/banner5.jpg'
    ];

    let currentBannerIndex = 0;

    function updateBanner(index) {
        // Wrap index
        if (index < 0) index = bannerImages.length - 1;
        if (index >= bannerImages.length) index = 0;

        currentBannerIndex = index;

        // Update Main Image with fade effect
        mainBannerImage.style.opacity = '0.5';
        setTimeout(() => {
            mainBannerImage.src = bannerImages[currentBannerIndex];
            mainBannerImage.style.opacity = '1';
        }, 200);

        // Update Active Thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        if (thumbnails[currentBannerIndex]) {
            thumbnails[currentBannerIndex].classList.add('active');
        }
    }

    // Thumbnail Clicks
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateBanner(index);
        });
    });

    // Nav Buttons
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            updateBanner(currentBannerIndex - 1);
        });
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            updateBanner(currentBannerIndex + 1);
        });
    }

    // Auto Rotation (optional, cleaner without for this specific sleek UI, but keeping it slow)
    // Auto Rotation
    setInterval(() => {
        updateBanner(currentBannerIndex + 1);
    }, 3000);
    // Uncomment above to enable auto-play

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Toggle icon between bars and times (close)
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

});
