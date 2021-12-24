<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings">
      <div v-for="image of imagesUrl">
        <div class="slider__slide">
          <picture>
            <source
              :srcset="image.urlMobile"
              media="(max-width: 900px)"
            >
            <img :src="image.url" alt="1">
          </picture>
          <label class="slider__text">{{image.text}}</label>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data(){
      return {
        imagesUrl:[
          {
            url: require('assets/img/slide.png'),
            urlMobile: require('assets/img/slide-3-mobile.png'),
            text: "Салаты"
          },
          {
            url: require('assets/img/slide-2.png'),
            urlMobile: require('assets/img/slide-3-mobile.png'),
            text: "Гарниры"
          },
          {
            url: require('assets/img/slide-3.png'),
            urlMobile: require('assets/img/slide-3-mobile.png'),
            text: "Вторые блюда"
          }
        ],
        settings: {
          arrows: true,
          dots: false,
          variableWidth: true,
          infinite: false,
          slidesToShow: 1,
          initialSlide: 2,
          centerMode: true,
        },
      }
    }
  }
</script>
<style lang="scss">
  .slider
  {
    .slick-track
    {
      position: relative;
      left: -23px;
    }
    .slick-slide
    {
      margin-right: 15px;
      &:last-child{margin: 0;}
    }
    .slick-arrow
    {
      position: absolute;
      bottom: -17px;
      top: unset;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: $white;
      // background-image: url("assets/sprite/svg/arrow-right-green.svg") ;
      background-repeat: no-repeat;
      background-position: center;
      &:before{content:unset;}
    }
    .slick-next
    {
      right: calc(50% - 39px);
      background-image: url("assets/sprite/svg/arrow-right-green.svg") ;
    }
    .slick-prev
    {
      left: calc(50% - 39px);
      background-image: url("assets/sprite/svg/arrow-left-green.svg") ;
    }
    .slick-slider
    {
      padding-bottom: 54px;
    }
    .slick-disabled{filter: grayscale(1);}
  }
  .slider__slide
  {
    position: relative;
    .slider__text
    {
      position: absolute;
      display: block;
      bottom: 20px;
      left: 20px;
      background: $green;
      height: 28px;
      border-radius: 60px;
      z-index: 10px;
      padding: 0 17px;
      font-size: 14px;
      line-height: 28px;
      font-weight: 700;
      color:$white;
    }
  }
@media (min-width: $widescreen)
  {
    .slider .slick-track{left:-49px;}
    .slider .slick-slide{margin-right: 25px;}
    .slider .slick-arrow{width: 50px; height: 50px;}
    .slider .slick-next{right: calc(50% - 55px);}
    .slider .slick-prev{left: calc(50% - 55px);}
    .slider .slick-slider{padding-bottom: 79px;}
  }
</style>
