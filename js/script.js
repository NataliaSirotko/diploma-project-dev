window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Page slider & Modules slider & Modules nav
const mainNavSlider = () => {
let slides;  
const goPage = () => {
    let slideIndex = 1,      
        next = document.querySelectorAll('.sidecontrol__controls .next'),
        logo = document.querySelectorAll('.sidecontrol > a');

    if (document.body.id === "page-main") {
        slides = document.querySelectorAll('.page > div');
    } else {
        slides = document.querySelectorAll('.module');
        
        if ('.nextmodule') {              
            let next1 = document.querySelectorAll('.nextmodule');
            next1.forEach(item => {
                item.addEventListener('click', () => {
                    plusSlides(1);
                });
            });
        } if ('.prevmodule') {
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
        slides[slideIndex - 1].animate([
            {width: '30%'},
            {offset: 0.6,
            width: '100%'},
            {width: '95%'}
        ], {
            duration: 1000
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
slides.forEach(item => item.style.display = 'block');

};

mainNavSlider();
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

//first page slider & 3 & 5 pages sliders
const flexSliders = () => {
    if (document.body.id === "page-main") {
    const goPageSlider = (wrap, slides, nextPrev) => {
        
        wrap.style.overflow = "hidden";
        wrap.style.display = "flex";
        slides.forEach(item => item.style.flexShrink = '0');
      
        let slideIndex = 1;

        const showSlides = (n) => {
            
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            if (nextPrev[1]) {
                wrap.appendChild(wrap.firstChild);
                wrap.insertBefore(slides[slideIndex-1], wrap.firstChild);
            }

            slides[slideIndex-1].animate([{
                    opacity: '.4'
                },
                {
                    opacity: '1'
                }
            ], {
                duration: 2000
            });

            // Card Active
            if (wrap.classList.contains('feed__slider')) {           
                slides.forEach(it => {
                    it.classList.remove('feed__item-active');
                    it.style.height = '270px';
                });
                slides[slideIndex-1].classList.add('feed__item-active');
                slides[slideIndex-1].style.height = '430px';

            } else {
                slides.forEach(item => item.querySelector('.card__title').style.opacity = '.4');
                slides[slideIndex-1].querySelector('.card__title').style.opacity = '1';

                slides.forEach(item => item.querySelector('.card__controls-arrow').style.opacity = '0');
                slides[slideIndex-1].querySelector('.card__controls-arrow').style.opacity = '1';
            }
        };

        showSlides(slideIndex);
        
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        
        nextPrev[1].addEventListener('click', () => {
            plusSlides(1);      
        }); 
    
        nextPrev[0].addEventListener('click', () => {
            wrap.insertBefore(wrap.lastChild, wrap.firstChild);
            plusSlides(-1);
        });

        if (wrap.classList.contains('modules__content-slider')) {
            setInterval(() => {
            plusSlides(1);
        }, 4000);
        }
        
    };

    let wrap = document.querySelector('.showup__content-slider'),
        slides = wrap.querySelectorAll('a.card'),
        nextPrev = document.querySelectorAll('.showup__content-title .play__circle');
    goPageSlider(wrap, slides, nextPrev);

    wrap = document.querySelector('.page .modules__content-slider');
    slides = wrap.querySelectorAll('.card');
    nextPrev = document.querySelectorAll('.modules .modules__info-btns button');
    goPageSlider(wrap, slides, nextPrev);

    wrap = document.querySelector('.feed__slider');
    slides = wrap.querySelectorAll('.feed__item');
    nextPrev = document.querySelectorAll('.feed .play__circle');
    goPageSlider(wrap, slides, nextPrev);
}
};

flexSliders();


// Go to Modules
const goLink = () => {

let cards = document.querySelectorAll('a.card');
cards.forEach((item, i) => {
    item.addEventListener('click', () => {
        item.href = `modules.html#${i+1}`;          
    });
});

let go = document.querySelector('.plus');
go.addEventListener('click', () => {
    window.location.href = "modules.html#1";   
});

};
goLink();

//Differance page
const setDifferance = () => {
    if (document.body.id === "page-main") {
    let officeroldItems = document.querySelectorAll('.officerold .officer__card-item'),
        clickItem = document.querySelector('.officerold #first');

    officeroldItems.forEach(item => item.style.visibility = 'hidden');
    clickItem.style.visibility = 'visible';

    clickItem.querySelector('.plus').addEventListener('click', () => {
        let next = clickItem.nextElementSibling;
        next.style.visibility = 'visible';
        next.insertAdjacentElement('afterend', clickItem);
        if(!clickItem.nextElementSibling) {
            clickItem.style.display = 'none';
        }
    });

}
};

setDifferance();

// Show Notification
const showNotification = () => {    
    if (document.body.id === "page-main") {
    let notification = document.querySelector('.hanson');
    notification.style.display = "none";

    let button = document.querySelectorAll('.sidecontrol__controls .next')[1];
        button.addEventListener('click', () => {
            setTimeout(function() {
                notification.style.display = 'block';
            }, 3000);
        });
    }
};

showNotification();

//accordeon
const setAccordeon = () => {
    let button = document.querySelectorAll('.module__info-show');

    button.forEach(item => {
        item.addEventListener('click', function() {
            let text = this.nextElementSibling;
            text.classList.toggle('hidden');
        });
    });  
};

setAccordeon();

//Download
// function download() {
// let buttonLoad = document.querySelector('.moduleapp .download');
// buttonLoad.addEventListener('click', function() {
//     this.setAttribute('href', 'histfac.pdf');
//     this.setAttribute('download', 'download');
// });
// }
//download();
});

