document.addEventListener("DOMContentLoaded", function() {
    let pageIndex = 0; 
    const pages = document.querySelectorAll('.page');
        pages[0].style.display = 'block';
    const indicators = document.querySelectorAll('.indicator');
    const leftControl = document.getElementById('leftControl');
    const rightControl = document.getElementById('rightControl');

    function logCurrentDiv() {
        console.log(pages[pageIndex].id);
    }

    function updateControlsVisibility() {
        leftControl.style.display = (pageIndex === 0) ? 'none' : 'block';
        rightControl.style.display = (pageIndex === 8) ? 'none' : 'block';


    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'higher-id');
            if (index === pageIndex) {
                indicator.classList.add('active');
            }
            if (index + 1 > 6) {
                indicator.classList.add('higher-id');
            }
        });
    }

    logCurrentDiv();
    updateIndicators();
    updateControlsVisibility();

    leftControl.addEventListener('click', function() {
        if (pageIndex > 0) {
            pages[pageIndex--].style.display = 'none';
            pages[pageIndex].style.display = 'block';
            logCurrentDiv();
            updateIndicators();
            updateControlsVisibility();
        }
    });

    rightControl.addEventListener('click', function(event) {
        event.preventDefault();
        if (pageIndex < pages.length - 1) {
            pages[pageIndex++].style.display = 'none';
            pages[pageIndex].style.display = 'block';
            logCurrentDiv();
            updateIndicators();
            updateControlsVisibility();
        }
    });
});