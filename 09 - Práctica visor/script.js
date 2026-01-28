document.addEventListener('DOMContentLoaded', () => {
    // Select the main image and all thumbnails
    const featured = document.getElementById('featured');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // 1. Change the main image src to the clicked thumbnail's src
            featured.src = this.src;

            // 2. Optional: Visual feedback (active state)
            document.querySelector('.active')?.classList.remove('active');
            this.classList.add('active');
        });
    })
});