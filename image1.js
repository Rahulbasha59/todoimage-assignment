document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://photo1.jpg',
        'https://photo2.jpg',
        'https://photo3.jpg',
        'https://photo4.jpg',
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('current-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showImage(index) {
        imageElement.src = images[index];
        imageElement.alt = Slide ${index + 1};
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Initial image
    showImage(currentIndex);

    // Event listeners
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
});