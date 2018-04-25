<template>
<div>
  <Header/>
   <swiper class="lp section--ballbg" :options="swiperOption" ref="mySwiper" v-on:toSlide="toSlide($event)">
      <div class="controls pagination" slot="pagination"></div>
      <swiper-slide>
         <section class="section intro section--gradient">
            <div class="intro__wrap">
              <div class="article">
                  <h1 class="htitle">Transforming crypto into profit making investment</h1>
                <p class="txt">Turning potentiality into reality. Triad provides an opportunity for everybody, interested in cryptoinvestment, to become a part of our reliable and professionally managed fund.</p>
               <button class="btn btn--base">Sign Up</button>
              </div>
            <div class="hero">
              <img src="/static/space_bg.svg" class="img hero__bg" />
                            <img src="/static/austronaut.svg" class=" img hero__main" />
            </div>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section why">
            <div class="why__wrap">
              <h2 class="htitle">WHY TRIAD?</h2>

<carousel-3d class="features" @onSlideChange="isCurrent = true" :width="700" :height="550" :border="0" :space="500" :speed="1000" :controls-visible="true" :controls-width="30" :controls-height="60" :perspective="0">
  <slide class="item" :class="{animate: isCurrent }" :index="0">
                <div class="item__img">
                  <img src="/static/ic_black_security-27.svg" class="img" />
                </div>
                <div class="item__name">
                    <p class="title">Easy to use</p>
                    <p class="txt">2 types of diversified investment portfolio</p>
                  </div>
</slide>
<slide class="item" :class="{animate: isCurrent }" :index="1">
                <div class="item__img">
                  <img src="/static/ic_black_portfolio-08.svg" class="img" />
                </div>
               <div class="item__name">
                    <p class="title">Portfolio</p>
                    <p class="txt">2 types of diversified investment portfolio</p>
                  </div>
</slide>
<slide class="item" :class="{animate: isCurrent }" :index="2">
                <div class="item__img">
                  <img src="/static/ic_black_taxes-31.svg" class="img" />
                </div>
                <div class="item__name">
                    <p class="title">Low fee</p>
                    <p class="txt">2 types of diversified investment portfolio</p>
                  </div>
              </slide>
</carousel-3d>

            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section how">
            <div class="how__wrap">
                          <div class="hero">
              <img src="/static/space_bg.svg" class="img hero__bg" />
                            <img src="/static/rocket.svg" class="img hero__main" />
            </div>
               <div class="article">
                  <h2 class="htitle">How do we grow investment leading to success?</h2>
                  <p class="txt">To provide you with an attractive return on your investment, our team of experts thoroughly analyses:</p>
                  <ul class="list">
                     <li class="txt">The volatility of TOP-10 cryptocurrencies</li>
                     <li class="txt">Characteristics and prospects of the market</li>
                     <li class="txt">Competitive advantages and disadvantages</li>
                     <li class="txt">The economic model of the blockchain</li>
                  </ul>
                  <p class="txt">Therefore, you will get the most of your investment, in addition with an extra income earned due to active trading.</p>
               </div>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section proteus">
            <div class="proteus__wrap">
               <h2 class="htitle">Cooperating with innovative system of analytics!</h2>
               <div class="row">
                  <div class="card">
                     <h3 class="title">“Proteus”</h3>
                     <p class="txt">To achieve greater results, we are using a progressive system based on a Collectiveintelligence concept. Financial analysts enhanced by collective mind make the most precise prognoses of future crypto events.</p>
                  </div>
                  <div class="card">
                    <div class="card__ico">
                      <img class="img" src="/static/ic_proteus_forecast.svg" />
                    </div>
                     <p class="txt">Forecasts are 80% more accurate than expert’s estimations.</p>
                  </div>
                  <div class="card">
                                        <div class="card__ico">
                      <img class="img" src="/static/ic_proteus_system.svg" />
                    </div>
                     <p class="txt">Analytical system brings your risks to an absolute minimum.</p>
                  </div>
               </div>
               <button class="btn btn--base btn--arrow">Cheking out “Proteus” potential</button>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section portfolio">
            <div class="portfolio__wrap">
               <h2 class="htitle">Triad optimized portfolio</h2>
               <p class="txt">To provide you with an attractive return on your investment, our team of experts thoroughly analyses:</p>
               <div class="portfolio__types">
                  <div class="card-changer">
                     <div class="card" @click="selected = 1" :class="{ active: selected == 1 }">
                        <h3 class="title">High-risk</h3>
                        <svg class="chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.38 49.957">
  <path class="chart__path" d="M.294,54.219l5.682-8.83,15.09-15.637s22.059-.311,22.428,0S60.621,17.11,60.621,17.11L83.05,19.149l16.312-6.932,14.273,4.893,12.859-4.893,16.12,6.932,15.5-9.379h16.719l10.6,9.379L198.887,9.77l20.389,9.379,26.1-13.457" transform="translate(0.547 -4.803)"/>
</svg>
                        <p class="txt">Profit potential up to - <span class="bold">80%</span></p>
                     </div>
                     <div class="card" @click="selected = 2" :class="{ active: selected == 2 }">
                        <h3 class="title">Conservative</h3>
<svg class="chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.996 107.797">
  <path class="chart__path" d="M0,78.995C2.5,80.989,9.878,90,9.878,90L33.239,68.372,61.6,85.269l8.611-15.877,20.5,7.185,16.612-27.793L121.08,78.995l17.684-24.758,12.6,15.156L166.73,12.764h7.162l21.875,7.506,11.087-7.506,11,21.456,19.045-9.47,26.643-40.542" transform="translate(0.624 16.342)"/>
</svg>
                        <p class="txt">Profit potential up to - <span class="bold">40%</span></p>
                     </div>
                  </div>
                  <div class="article">
                    <div v-if="selected == 2">
                     <p class="title">Conservative:</p>
                     <p class="txt">Portfolio diversification once in 6 months</p>
                     <p class="txt">Low entry barrier - $500,00 first investment fee</p>
                     <p class="txt">Comprised of TOP-5 cryptocurrencies</p>
                     <p class="txt">Low commission for input and withdrawal of assets – 5% for entry and exit</p>
                     </div>
                                         <div v-if="selected == 1">
                     <p class="title">High-risk:</p>
                     <p class="txt">Portfolio diversification once in 6 months</p>
                     <p class="txt">Low entry barrier - $500,00 first investment fee</p>
                     <p class="txt">Comprised of TOP-5 cryptocurrencies</p>
                     <p class="txt">Low commission for input and withdrawal of assets – 5% for entry and exit</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section invest">
            <div class="invest__wrap">
               <h2 class="htitle">How to invest?</h2>
               <div class="row">
                  <div class="card">
                                        <div class="card__ico">
                      <img class="img" src="/static/ic_black_investor.svg" />
                    </div>
                     <p class="num">01</p>
                     <p class="title">Get registred</p>
                  </div>
                  <div class="card">
                                        <div class="card__ico">
                      <img class="img" src="/static/ic_black_loan-16.svg" />
                    </div>
                     <p class="num">02</p>
                     <p class="title">Add funds</p>
                  </div>
                  <div class="card">
                                        <div class="card__ico">
                      <img class="img" src="/static/ic_black_trend_up-43.svg" />
                    </div>
                     <p class="num">03</p>
                     <p class="title">Enjoy the profit</p>
                  </div>
               </div>
               <button class="btn btn--base">Sign Up</button>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section media section--gradient">
            <div class="media__wrap">
               <h2 class="htitle">Media</h2>
               <div class="row">
                  <div class="media__main">
                     <div class="card">
                        <img src="/static/blog2.jpg" class="img" />
                        <div class="card__content">
                           <p class="date">Apr 09, 2018</p>
                           <p class="title">One Coin to Play Them All: A Startup to Make In-game Digital Currency Available on Multiple Platforms</p>
                           <button class="btn btn--arr">Read more</button>
                        </div>
                     </div>
                     <div class="card">
                        <img src="/static/blog2.jpg" class="img" />
                        <div class="card__content">
                           <p class="date">Apr 09, 2018</p>
                           <p class="title">One Coin to Play Them All: A Startup to Make In-game Digital Currency Available on Multiple Platforms</p>
                           <button class="btn btn--arr">Read more</button>
                        </div>
                     </div>
                  </div>
                  <div class="media__other">
                     <div class="card">
                        <img src="/static/blog2.jpg" class="img" />
                        <div class="card__content">
                           <p class="date">Apr 09, 2018</p>
                           <p class="txt">Ethereum's Byzantium Hard Fork Is Running Smoothly, Developers Say</p>
                        </div>
                     </div>
                     <div class="card">
                        <img src="/static/blog2.jpg" class="img" />
                        <div class="card__content">
                           <p class="date">Apr 09, 2018</p>
                           <p class="txt">Ethereum's Byzantium Hard Fork Is Running Smoothly, Developers Say</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section news section--gradient">
            <div class="news__wrap">
               <h2 class="htitle">News</h2>
               <div class="cards">
                  <div class="card">
                     <img src="/static/blog1.jpg" class="img"/>
                     <div class="card__content">
                        <p class="txt">Updates all conservative portfolio. Check out your "Portfolio" section. @triad.capital</p>
                        <p><a  class="htag" href="">#portfolio</a> <a  class="htag" href="">#conservative</a></p>
                        <div class="author">
                           <img src="/static/icons/i-triad_capital.svg" class="ava"/>
                           <div class="info">
                              <p class="info__name">triad.capital</p>
                              <p class="info__date">Apr 09, 2018</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <img src="/static/blog1.jpg" class="img"/>
                     <div class="card__content">
                        <p class="txt">Updates all conservative portfolio. Check out your "Portfolio" section. @triad.capital</p>
                        <p><a  class="htag" href="">#portfolio</a> <a  class="htag" href="">#conservative</a></p>
                        <div class="author">
                           <img src="/static/icons/i-triad_capital.svg" class="ava"/>
                           <div class="info">
                              <p class="info__name">triad.capital</p>
                              <p class="info__date">Apr 09, 2018</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <img src="/static/blog1.jpg" class="img"/>
                     <div class="card__content">
                        <p class="txt">Updates all conservative portfolio. Check out your "Portfolio" section. @triad.capital</p>
                        <p><a  class="htag" href="">#portfolio</a> <a  class="htag" href="">#conservative</a></p>
                        <div class="author">
                           <img src="/static/icons/i-triad_capital.svg" class="ava"/>
                           <div class="info">
                              <p class="info__name">triad.capital</p>
                              <p class="info__date">Apr 09, 2018</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <img src="/static/blog1.jpg" class="img"/>
                     <div class="card__content">
                        <p class="txt">Updates all conservative portfolio. Check out your "Portfolio" section. @triad.capital</p>
                        <p><a  class="htag" href="">#portfolio</a> <a  class="htag" href="">#conservative</a></p>
                        <div class="author">
                           <img src="/static/icons/i-triad_capital.svg" class="ava"/>
                           <div class="info">
                              <p class="info__name">triad.capital</p>
                              <p class="info__date">Apr 09, 2018</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </swiper-slide>
      <swiper-slide>
         <section class="section info">
            <div class="info__wrap">
               <img src="/static/logo.svg" class="logo" />
               <ul class="nav">
                  <li class="nav__link"><a href="">About us</a></li>
                  <li class="nav__link"><a href="">Contacts</a></li>
                  <li class="nav__link"><a href="">FAQ</a></li>
               </ul>
               <ul class="nav nav--ico">
                  <li class="nav__link"><a class="ico" href=""><img src="/static/icons/i-fb.svg" /></a></li>
                  <li class="nav__link"><a class="ico" href=""><img src="/static/icons/i-fb.svg" /></a></li>
                  <li class="nav__link"><a class="ico" href=""><img src="/static/icons/i-fb.svg" /></a></li>
                  <li class="nav__link"><a class="ico" href=""><img src="/static/icons/i-fb.svg" /></a></li>
                  <li class="nav__link"><a class="ico" href=""><img src="/static/icons/i-fb.svg" /></a></li>
               </ul>
               <ul class="nav">
                  <li class="nav__link"><a href="">Terms of service</a></li>
                  <li class="nav__link"><a href="">User agreement</a></li>
               </ul>
            </div>
         </section>
      </swiper-slide>
   </swiper>
   </div>
</template>

<script>
import Vue from "vue";
import Header from "./Header";
import Trend from "vuetrend";
import { Carousel3d, Slide } from "vue-carousel-3d";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

Vue.use(Carousel3d);
Vue.use(Trend);

export default {
  name: "Home",
  data() {
    return {
      selected: 1,
      isCurrent: undefined,
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        allowTouchMove: false,
        slideToClickedSlide: true,
        pagination: {
          el: ".pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    toSlide(i) {
      this.$refs.featuresSlider.swiper.slideTo(i, 300);
    }
  },
  components: {
    Header,
    swiper,
    swiperSlide,
    "carousel-3d": Carousel3d,
    slide: Slide
  }
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";

.bold {
  font-weight: 700;
}
.row {
  @include row--sb;
}
.lp {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: url(/static/bg_pattern.svg) no-repeat right top;
}
.controls {
  width: 10px;
  position: absolute;
  left: calc(50% - 670px);
  z-index: 1;
  .swiper-pagination-bullet {
    outline: none;
    cursor: pointer;
    opacity: 1;
    display: block;
    width: 5px;
    height: 5px;
    margin: 20px 0 !important;
    background: $gray-dark;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    transition: 0.3s ease-in-out;
    &:before {
      content: "";
      position: absolute;
      width: 1px;
      height: 1px;
      left: 0;
      top: 0;
      background: transparent;
      border: solid 2px $base;
      transition: 0.3s ease-in-out;
      opacity: 0;
    }
    &.swiper-pagination-bullet-active {
      background: $base;
      &:before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        left: -7px;
        top: -7px;
        opacity: 1;
      }
    }
  }
  @include respond-to(small-screens) {
    left: 30px;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: calc(50% - 2rem);
    margin: 1rem;
    &:nth-child(even) {
      margin-right: 0;
    }
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.card {
  position: relative;
  background: $base-dark;
  color: white;
  padding: 2.14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__ico {
    margin: auto;
    margin-bottom: 1rem;
    background: white;
    padding: 30px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    .img {
      width: 100%;
    }
  }
  .txt {
    font-size: 1rem;
  }
}
.title {
  line-height: 1.2;
  font-size: 1.8rem;
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
}
.htitle {
  text-transform: uppercase;
  @include respond-to(wide-screens) {
    font-size: 2.8rem;
    margin-bottom: 3.2rem;
  }
  @include respond-to(medium-screens) {
    font-size: 2.4rem;
    margin-bottom: 2.8rem;
  }
  @include respond-to(small-screens) {
    font-size: 2rem;
    margin-bottom: 3.4rem;
  }
}
.txt {
  line-height: 1.5;
  &--lined {
    position: relative;
    font-weight: 300;
    font-size: 1rem;
    padding-left: 5rem;
    &:before {
      content: "";
      position: absolute;
      top: 0.5rem;
      right: 100%;
      width: 100%;
      height: 2px;
      background: $base;
    }
    @include respond-to(small-screens) {
      font-size: 0.8rem;
    }
  }
  &--green {
    color: $green;
  }
  @include respond-to(wide-screens) {
    font-size: 1.4rem;
  }
  @include respond-to(medium-screens) {
    font-size: 1.2rem;
  }
  @include respond-to(small-screens) {
    font-size: 1rem;
  }
}
.list {
  margin: 1rem 0;
  .txt {
    padding-left: 2.15rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 1rem;
      left: 0;
      width: 1rem;
      height: 2px;
      background: $base;
    }
  }
}

.section {
  height: 100vh;
  padding-left: 50px;
  overflow: hidden;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  &--gradient {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
    }
  }
}
.intro {
  position: relative;
  &__wrap {
    @include container;
    @include row--sb;
    position: relative;
  }
  .article {
    width: 50%;
  }
  .txt {
    margin: 3.8rem 0;
  }
  .htitle {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: $base;
      transition: 0.5s ease-in-out;
      width: 0;
      height: 10px;
      left: 0;
      bottom: -0.8em;
      .swiper-slide-active & {
        width: 30%;
      }
    }
  }
  .hero {
    position: relative;
    width: 45%;
    .img {
      position: absolute;
      width: 100%;
      height: 80vh;
      top: calc(50% - 40vh);
      right: 0;
      z-index: 1;
    }
    &__main {
      animation: drift 10s linear infinite;
    }
  }
}
.why {
  &__wrap {
    @include container;
  }
  .features {
    @include row--sb;
    @include row--vc;
    position: relative;
    padding: 0 100px;
  }
  .item {
    margin: auto;
    opacity: 0.6;
    &:before {
      content: "";
      position: absolute;
      background: #0f6cd6;
      clip-path: polygon(100% 0, 70% 0, 100% 30%);
      top: 20%;
      right: 0%;
      width: 380px;
      height: 380px;
      z-index: 16;
      opacity: 0;
      transition: 0.8s ease-in-out, opacity 0s ease;
    }
    &:after {
      content: "";
      position: absolute;
      background: #0f6cd6;
      clip-path: polygon(0 100%, 0 70%, 30% 100%);
      bottom: 50%;
      left: 0%;
      width: 380px;
      height: 380px;
      z-index: 16;
      opacity: 0;
      transition: 0.8s ease-in-out, opacity 0s ease;
    }
    &__img {
      position: relative;
      width: 230px;
      height: 230px;
      margin: auto;
      margin-bottom: 15px;
      .img {
        padding: 50px;
        width: 100%;
        height: 100%;
        background: #0f6cd6;
        clip-path: polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%, 0 0);
      }
    }
    &__name {
      text-align: center;
      .txt {
        color: $gray;
        opacity: 0;
      }
    }
    &.current {
      opacity: 1;
      .txt {
        opacity: 1;
      }
      .item__img {
        width: 380px;
        height: 380px;
        margin-bottom: 30px;
        .img {
          width: 100%;
          height: 100%;
          padding: 90px;
        }
      }
      &:before {
        top: 0%;
        right: 20%;
        opacity: 1;
      }
      &:after {
        bottom: 31%;
        left: 20%;
        opacity: 1;
      }
    }
  }
}
.how {
  position: relative;
  &__wrap {
    @include container;
    @include row--sb;
    position: relative;
  }
  .article {
    width: 50%;
  }
  .hero {
    position: relative;
    width: 45%;
    .img {
      position: absolute;
      width: 100%;
      height: 80vh;
      top: calc(50% - 40vh);
      right: 0;
      z-index: 1;
    }
    &__main {
      .swiper-slide-active & {
        animation: slideInUp 1s ease-in-out;
      }
    }
  }
}
.proteus {
  &__wrap {
    @include container;
    position: relative;
  }
  .card {
    color: white;
    width: calc(25% - 2rem);
    &:first-child {
      width: calc(50% - 2rem);
      .txt {
        width: 70%;
      }
    }
  }
  .btn {
    margin-top: 2.14rem;
    float: right;
  }
}
.portfolio {
  &__wrap {
    @include container;
    position: relative;
  }
  &__types {
    @include row--sb;
    margin-top: 3.57rem;
  }
  .card-changer {
    width: 60%;
    @include row--sb;
    position: relative;
    .card {
      position: absolute;
      width: 50%;
      height: 235px;
      opacity: 0.6;
      transition: 0.3s eaisy-in-out;
      background: $base-dark;
      cursor: pointer;
      transform: translateX(70%) scale(0.9);
      &.active {
        opacity: 1;
        z-index: 1;
        animation: card-changer 1s linear forwards;
        .chart__path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 5s linear forwards;
        }
      }
      .chart {
        width: 100%;
        height: 100%;
        &__path {
          fill: none;
          stroke: #fff;
          stroke-miterlimit: 10;
          stroke-width: 2px;
        }
      }
    }
  }
  .article {
    width: 40%;
  }
}
.invest {
  &__wrap {
    @include container;
    position: relative;
  }
  .card {
    width: calc(100%/3 - 60px);
    .title {
      font-size: 1.85rem;
      text-align: center;
    }
  }
  .btn {
    margin: auto;
    margin-top: 3.57rem;
  }
  /*.swiper-slide-active & {
  .card__ico {
    animation: rubberBand 1s ease;
    .card & &:first-child {
animation-duration: 1.8s;
    }
    &:last-child {
animation-duration: 2s;
    }
  }
  }*/
}
.media {
  &__wrap {
    @include container;
    position: relative;
  }
  .card {
    cursor: pointer;
  }
  &__main {
    width: calc(50% - 30px);
    .card {
      overflow: hidden;
      &__content {
        position: relative;
      }
      .img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: 0.2;
      }
      .title {
        margin: 2rem 0;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
      }
      .date {
        font-size: 0.57rem;
      }
      &:not(:first-child) {
        margin-top: 0.71rem;
        padding: 1.07rem 2.14rem;
        .title {
          height: 3.5rem;
          margin-top: 0;
          margin-bottom: 0.71rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .date {
          opacity: 0;
          transition: 0.3s ease;
        }
        &:hover {
          padding: 2.14rem;
          .title {
            height: 5.3rem;
            -webkit-line-clamp: 3;
            margin: 2.14rem 0;
          }
          .date {
            opacity: 1;
          }
        }
      }
    }
  }
  &__other {
    width: calc(50% - 30px);
    @include row--sb;
    flex-wrap: wrap;
    align-items: flex-start;
    .card {
      width: calc(50% - 30px);
      padding: 0;
      justify-content: flex-start;
      &__content {
        background: $base-dark;
        padding: 2.14rem 1.07rem;
      }
      .img {
        opacity: 0.2;
        height: 200px;
        object-fit: cover;
      }
      .txt {
        max-height: 4.5rem;
        overflow: hidden;
        font-size: 1rem;
      }
      .date {
        position: absolute;
        top: 1.07rem;
        left: 1.07rem;
        font-size: 0.57rem;
      }
    }
  }
}
.news {
  &__wrap {
    @include container;
    position: relative;
  }
  .card {
    &__content {
      position: relative;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
      opacity: 0.2;
    }
    .txt {
      font-size: 1rem;
    }
    .htag {
      color: $base;
      margin: 0.5rem 0;
      transition: 0.3s ease-in-out;
      margin: 0.5rem;
      display: inline-block;
      margin-left: 0;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    .author {
      @include row--vc;
    }
    .ava {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 15px;
      background: white;
      padding: 5px;
    }
    .info {
      &__name {
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
      }
      &__date {
        font-size: 0.57rem;
        font-weight: 300;
      }
    }
  }
  /* .cards {
    height: 450px;
    overflow-y: auto;
  } */
}
.info {
  &__wrap {
    position: relative;
    @include container;
    @include row;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin: auto;
  }
  .nav {
    @include row;
    &__link {
      margin: 1.42rem 1.78rem;
    }
    img {
      width: 30px;
      height: 30px;
    }
    &--ico {
      .nav__link {
        margin: 1.42rem 1.14rem;
      }
    }
  }
}
.carousel-3d-slide {
  background-color: transparent;
  opacity: 0.5 !important;
}
.carousel-3d-controls {
  .next,
  .prev {
    background: $base;
    color: transparent;
  }
  .prev {
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
  }
  .next {
    clip-path: polygon(100% 50%, 0 100%, 0 0);
  }
}
</style>
