// document.addEventListener("DOMContentLoaded", function() {
//     let pageIndex = 0; 
//     const pages = document.querySelectorAll('.page'); 
//     const leftControl = document.getElementById('leftControl');
//     const rightControl = document.getElementById('rightControl');

//     function logCurrentDiv() {
//         console.log(pages[pageIndex].id);  // Log the ID of the current div
//     }

//     pages[pageIndex].style.display = 'block'; // show the first div initially
//     logCurrentDiv();

//     // Left control
//     leftControl.addEventListener('click', function() {
//         if (pageIndex > 0) {
//             pages[pageIndex].style.display = 'none';
//             pageIndex--;
//             pages[pageIndex].style.display = 'block';
//             logCurrentDiv();  // Log the ID when switching pages
//         }
//     });

//     // Right control
//     rightControl.addEventListener('click', function() {
//         if (pageIndex < pages.length - 1) {
//             pages[pageIndex].style.display = 'none';
//             pageIndex++;
//             pages[pageIndex].style.display = 'block';
//             logCurrentDiv();  // Log the ID when switching pages
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let pageIndex = 0; 
    const pages = document.querySelectorAll('.page'); 
    const indicators = document.querySelectorAll('.indicator');
    const leftControl = document.getElementById('leftControl');
    const rightControl = document.getElementById('rightControl');

    function logCurrentDiv() {
        console.log(pages[pageIndex].id);
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === pageIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    pages[pageIndex].style.display = 'block'; // show the first div initially
    logCurrentDiv();
    updateIndicators();

    // Left control
    leftControl.addEventListener('click', function() {
        if (pageIndex > 0) {
            pages[pageIndex].style.display = 'none';
            pageIndex--;
            pages[pageIndex].style.display = 'block';
            logCurrentDiv();
            updateIndicators();
        }
    });

    // Right control
    rightControl.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Right control clicked!"); // Check if the button is being clicked

        if (pageIndex < pages.length - 1) {
            console.log("Switching to next page..."); // Check if the condition to switch page is met
            pages[pageIndex].style.display = 'none';
            pageIndex++;
            pages[pageIndex].style.display = 'block';
            logCurrentDiv();
            updateIndicators();
        } else {
            console.log("Already on the last page."); // Check if we are on the last page already
        }
    });

 
});

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        // Clear previous styles
        indicator.classList.remove('active', 'higher-id');
        
        if (index === pageIndex) {
            indicator.classList.add('active');
        }

        // If the div id (index + 1 since we start counting from 0) is over 6
        if (index + 1 > 6) {
            indicator.classList.add('higher-id');
        }
    });
}


