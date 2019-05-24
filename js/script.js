window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Page slider & Modules slider & Modules nav
const goPage = () => {
    let slideIndex = 1,
        slides,        
        next = document.querySelectorAll('.sidecontrol__controls .next'),
        logo = document.querySelectorAll('.sidecontrol > a');

    if (document.body.id === "page-main") {
        slides = document.querySelectorAll('.page > div');
        //next = document.querySelectorAll('.sidecontrol__controls .next');
    } else {
        slides = document.querySelectorAll('.module');

        if ('.nextmodule') {          
            let next1 = document.querySelectorAll('.nextmodule');
            next1.forEach(item => {
                item.addEventListener('click', () => {
                    plusSlides(1);
                });
            });
        } 
        if ('.prevmodule') {
            let prev = document.querySelectorAll('.prevmodule');
            prev.forEach(item => {
                item.addEventListener('click', () => {
                    plusSlides(-1);
                });
            });
        }    

    }

    const showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }  

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
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

