window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Page slider & Modules slider & Modules nav
let slides;  
const goPage = () => {
    let slideIndex = 1,
        //slides,        
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
                //transform: 'rotate(360deg)'
            },
            {
                offset: 0.6,
                width: '100%',
                //transform: 'rotate(0deg)'
            },
            {
                width: '95%',
                //transform: 'rotate(0deg)'
            }
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



//first page slider
const goPageSlider = () => {
    // Show slider
    if (document.body.id === "page-main") {

    let wrap = document.querySelector('.showup__content-slider');
    
    wrap.style.overflow = "hidden";
    wrap.style.display = "flex";
    
    let slides = wrap.querySelectorAll('a.card');
    slides.forEach(item => {
        item.style.flexShrink = '0';
    });

    // Slider
    let slideIndex = 1,
        nextPrev = document.querySelectorAll('.showup__content-title .play__circle');

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

        // Opacity first element
        slides.forEach(item => {
            item.querySelector('.card__title').style.opacity = '.4';
        });
        slides[slideIndex-1].querySelector('.card__title').style.opacity = '1';

        slides.forEach(item => {
            item.querySelector('.card__controls-arrow').style.opacity = '0';
        });
        slides[slideIndex-1].querySelector('.card__controls-arrow').style.opacity = '1';

        
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
    
}
};

goPageSlider();


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
function setDiff() {
    let officeroldItems = document.querySelectorAll('.officerold .officer__card-item'),
        cardNew = document.createElement('div');

    cardNew.innerHTML = `
    <div class="officer__card-item">
    <div class="card__counter">
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.34" filter="url(#filter0_d)">
            <path d="M4.824 11.6716V7.37561H6.048C8.12 7.37561 9.156 6.85161 9.156 5.80361C9.156 4.79561 8.128 4.28361 6.072 4.26761C5.44 4.26761 4.86 4.29961 4.332 4.36361L4.116 0.619608C4.9 0.515608 5.764 0.463608 6.708 0.463608C8.772 0.463608 10.384 0.907609 11.544 1.79561C12.712 2.68361 13.296 3.89161 13.296 5.41961C13.296 6.75561 12.88 7.85161 12.048 8.70761C11.216 9.55561 10.008 10.1316 8.424 10.4356L8.34 11.6716H4.824ZM6.576 12.9436C7.232 12.9436 7.804 13.1876 8.292 13.6756C8.788 14.1636 9.036 14.7396 9.036 15.4036C9.036 16.0756 8.788 16.6636 8.292 17.1676C7.804 17.6636 7.232 17.9116 6.576 17.9116C5.904 17.9116 5.32 17.6676 4.824 17.1796C4.336 16.6836 4.092 16.0956 4.092 15.4156C4.092 14.7516 4.336 14.1756 4.824 13.6876C5.32 13.1916 5.904 12.9436 6.576 12.9436Z" fill="#BEBEBE"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0.0917969" y="0.463867" width="17.204" height="25.448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
    </div>
    <div class="card__click">
        <div>Click to show </div>
        <div class="plus">
            <div class="plus__content">
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z" fill="white"/>
                    <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
</div>
    `;

    officeroldItems[0].insertAdjacentElement('beforebegin', cardNew);
    officeroldItems.forEach(item => item.style.visibility = 'hidden');

    let diffplus = document.querySelector('.officer__card-item .plus');
    diffplus.addEventListener('click', function() {

        officeroldItems[0].style.visibility = "visible";
        officeroldItems[0].insertAdjacentElement('afterend', cardNew);
        this.addEventListener('click', function() {
            officeroldItems[1].style.visibility = "visible";
            officeroldItems[1].insertAdjacentElement('afterend', cardNew);
            
            this.addEventListener('click', function() {
                officeroldItems[2].style.visibility = "visible";
                cardNew.style.display = 'none';          
            });     
        });
      
    });
    
}

setDiff();

// Show Notification
function showNotification() {    
    let notification = document.querySelector('.hanson');
    notification.style.display = "none";

    let button = document.querySelectorAll('.sidecontrol__controls .next')[1];
        button.addEventListener('click', () => {
            setTimeout(function() {
                notification.style.display = 'block';
            }, 3000);
        });
}

showNotification();

});

