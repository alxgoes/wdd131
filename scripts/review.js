document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

    let reviewCount = localStorage.getItem('reviewCount');

    if (!reviewCount) {
        reviewCount = 0;
    }

    reviewCount = parseInt(reviewCount) + 1;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('review-count').textContent = reviewCount;
});
