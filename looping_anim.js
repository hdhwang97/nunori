document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url(img/1.png)',
        'url(img/2.png)',
        'url(img/3.png)',
        'url(img/4.png)',
        'url(img/5.png)',
        'url(img/6.png)',
        'url(img/7.png)',
        'url(img/8.png)',
        'url(img/9.png)',
        'url(img/10.png)',
        'url(img/11.png)',
        'url(img/12.png)',
        'url(img/13.png)',
        'url(img/14.png)',
        'url(img/15.png)',
        'url(img/16.png)',
        'url(img/17.png)',
        'url(img/18.png)',
        'url(img/19.png)',
        'url(img/20.png)',



        //... add as many images as you want
    ];

    const cards = document.querySelectorAll('.looping-card');

    cards.forEach(card => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        card.style.backgroundImage = randomImage;
        card.style.backgroundSize = 'cover';  // Ensuring the image covers the card
        console.log(randomImage);  // Moved this statement inside the loop
    });
});
