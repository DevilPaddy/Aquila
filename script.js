const scrollContainer = document.querySelector('.big-image-section');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -1166, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 1166, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});
