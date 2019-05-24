window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Page slider
if (document.body.id === "page-main") {

const goPage = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.page > div'),
        next = document.querySelectorAll('.next'),
        logo = document.querySelectorAll('.sidecontrol > a');

    const showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
        console.log('++');
        slides[slideIndex - 1].animate([{
                width: '30%',
                transform: 'rotate(360deg)'
            },
            {
                offset: 0.6,
                width: '100%',
                transform: 'rotate(0deg)'
            },
            {
                width: '95%',
                transform: 'rotate(0deg)'
            }
        ], {
            duration: 2000
        });
    };

    showSlides(slideIndex);

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    next.forEach(item => {
        item.addEventListener('click', () => {
            plusSlides(1);
        });
    });

    logo.forEach(item => {
        item.addEventListener('click', () => {
            slides.forEach(item => item.style.display = 'none');
            slides[0].style.display = 'block';
            slideIndex = 1;
        });
    });
};

goPage();

}

//Modules slider
const goModules = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.module'),
        next = document.querySelectorAll('.next'),
        logo = document.querySelectorAll('.sidecontrol > a');

    const showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
        // slides[slideIndex - 1].animate([{
        //         width: '30%',
        //         transform: 'rotate(360deg)'
        //     },
        //     {
        //         offset: 0.6,
        //         width: '100%',
        //         transform: 'rotate(0deg)'
        //     },
        //     {
        //         width: '95%',
        //         transform: 'rotate(0deg)'
        //     }
        // ], {
        //     duration: 2000
        // });
    };

    showSlides(slideIndex);

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    next.forEach(item => {
        item.addEventListener('click', () => {
            plusSlides(1);
        });
    });

    logo.forEach(item => {
        item.addEventListener('click', () => {
            slides.forEach(item => item.style.display = 'none');
            slides[0].style.display = 'block';
            slideIndex = 1;
        });
    });
};

goModules();



// Video

const playVideo = () => {
    let modal = document.querySelector('.overlay'),
        wrapper = modal.querySelector('.video'),
        playButton = document.querySelector('.play');

    const openModal = () => {
        modal.style.display = 'block';      
    };

    playButton.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
        let url = playButton.getAttribute('data-url'),
            video = document.querySelector('#frame'),
            close = modal.querySelector('.close');

        video.src = url;
        wrapper.style.margin = '10% auto';

        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
};

playVideo();


});

