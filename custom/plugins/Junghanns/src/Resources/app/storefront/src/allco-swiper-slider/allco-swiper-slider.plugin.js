import Plugin from 'src/plugin-system/plugin.class';
import Swiper from '@swiper/bundle';

export default class AllcoSwiperSlider extends Plugin {
    init() {
        console.log('Plugin is initialized');

        //stick header
        window.onscroll = function() {myFunction()};
        var header = document.querySelector(".nav-main");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        let isSwiperExist = document.querySelector('.swiper-container');
        if (isSwiperExist === null)
        {
            console.log('null');
            return;
        }

        if (document.querySelectorAll('.swiper-container-brands-element').length > 0) {
            //Layout brands element

            let swiperBrandsElement = new Swiper('.swiper-container-brands-element', {
                slidesPerView: 6,
                spaceBetween: 60,
                freeMode: true,
                loop: false,
                loopFillGroupWithBlank: true,
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                }
            });

            // const swiperPrevTwo = document.getElementById('swiperPrevTwo');
            // const swiperNextTwo = document.getElementById('swiperNextTwo');
            //
            // swiperPrevTwo.addEventListener('click', () => {
            //     swiperBrandsElement.slidePrev();
            // });
            // swiperNextTwo.addEventListener('click', () => {
            //     swiperBrandsElement.slideNext();
            // });
        }

        if (document.querySelectorAll('.swiper-container-product').length > 0) {
            //product slider

            let swiperBrandsElement = new Swiper('.swiper-container-product', {
                slidesPerView: 3.5,
                spaceBetween: 24,
                freeMode: true,
                loop: false,
                loopFillGroupWithBlank: true,
                watchSlidesVisibility: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'progressbar'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    630: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    1140: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    1150: {
                        slidesPerView: 3.5,
                        spaceBetween: 24,
                    },
                }
            });

            // const swiperPrevTwo = document.getElementById('swiperPrevTwo');
            // const swiperNextTwo = document.getElementById('swiperNextTwo');
            //
            // swiperPrevTwo.addEventListener('click', () => {
            //     swiperBrandsElement.slidePrev();
            // });
            // swiperNextTwo.addEventListener('click', () => {
            //     swiperBrandsElement.slideNext();
            // });
        }
    }
}
