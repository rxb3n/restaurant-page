<template>
    <div class="carousel-container">
        <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide><img class="carousel-img" src="../assets/thumbnail_image002.jpg" height="500" width="600"></swiper-slide>
        <swiper-slide><img class="carousel-img" src="../assets/thumbnail_image001.jpg" height="500" width="600"></swiper-slide>
        <swiper-slide><img class="carousel-img" src="../assets/thumbnail_image003.jpg" height="500" width="600"></swiper-slide>
        <swiper-slide><img class="carousel-img" src="../assets/thumbnail_image004.jpg" height="500" width="600"></swiper-slide>
        <swiper-slide><img class="carousel-img" src="../assets/thumbnail_IMG_4548.jpg" height="500" width="600"></swiper-slide>
        ...
        </swiper>
    </div>
  </template>
  <script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>

<style scoped>
@import '../assets/main.css';

</style>