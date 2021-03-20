import AllcoSwiperSlider
    from './allco-swiper-slider/allco-swiper-slider.plugin';

window.PluginManager.register(
    'AllcoSwiperSlider',
    AllcoSwiperSlider,
    '[data-swag-allco-swiper-slider]'
);
if (module.hot) {
    module.hot.accept();
}

(function($){
    $('.cms-element-form form').on('submit', function () {
        if( $('#form-comment').val() === '' && $('#form-firstName').val() !== '' && $('#form-lastName').val() !== '' && $('#form-email').val() !== '') {
            $('#form-comment').val(' ');
        }
    });
})(jQuery);
