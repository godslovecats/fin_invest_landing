<template>
<header class="header">
  <div class="header__wrap">
<div class="header__left">
  <a class="logo" href="">
    <img class="logo__ico" v-bind:src="'/static/icons/i-triad_capital.svg'" />
    triad.capital
    </a>
    <div class="lang">
      <span class="active link">En</span>
      <span class="link">Ru</span>
    </div>
</div>
<div class="header__right">
  <div class="login">
<span class="link">Sign up</span>
<span class="link btn">Log in</span>
  </div>
<div class="menu"  v-bind:class="{ active: showMenu }"
 v-on:click="showMenu = !showMenu">
  	<svg class="menu__ico" viewBox="0 0 53 53">
	<g>
		<path class="line line--t" d="M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z" fill="#1F1F1F"/>
		<path class="line line--m" d="M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z" fill="#1F1F1F"/>
		<path class="line line--b" d="M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z" fill="#1F1F1F"/>
	</g>
	</svg>
  <div class="menu__wrap">
    <nav class="nav">
      <span class="nav__link" @click="$emit('toSlide', 5)">WHY?</span>
      <a class="nav__link" href="">HOW?</a>
      <a class="nav__link" href="">PROTEUS!</a>
      <a class="nav__link" href="">TOP™</a>
      <a class="nav__link" href="">START</a>
      <a class="nav__link" href="">MEDIA</a>
      <a class="nav__link" href="">NEWS</a>
      <a class="nav__link" href="">CONTACTS</a>
    </nav>
  </div>
</div>
</div>
  </div>
</header>
</template>

<script>
import Vue from "vue";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Header",
  components: {swiper, swiperSlide },
  data() {
    return {
      showMenu: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/mixins.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  &__wrap {
    @include container;
    @include row--sb;
    max-width: 1400px;
    padding: 2.14rem 15px;
  }
  &__left {
    @include row--vc;
  }
  &__right {
    @include row--vc;
  }
  .logo {
    font-size: 1rem;
    margin-right: 50px;
    @include row--vc;
    img {
      width: 35px;
    }
  }
  .link {
    margin: 0 1rem;
    cursor: pointer;
    font-size: 0.85rem;
    &.btn {
      background: $base;
      border-radius: 2px;
      padding: 0.8rem 1rem;
      color: white;
    }
  }
  .lang {
    .link {
      margin: 0 0.2rem;
      opacity: 0.7;
      transition: 0.3s;
      &.active {
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  .menu {
    cursor: pointer;
    color: white;
    &__ico {
      width: 28px;
      height: 28px;
      position: relative;
      z-index: 1;
    }
    &__wrap {
      position: absolute;
      right: -30%;
      transition: 0.3s ease-in-out;
      top: 0;
      height: 100vh;
      width: 30%;
          background: rgba(0, 162, 255, 0.8);
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .nav {
      &__link {
        font-size: 1rem;
        display: block;
        font-weight: 600;
        padding: 0.5rem;
        margin: 1rem;
        opacity: 0.7;
        transition: 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
    .line {
      transform-origin: 0px 0px;
      opacity: 1;
      transform: rotate(0) translateY(0) translateX(0);
      transition: transform 0.3s ease-in-out;
    }
    &.active {
      .menu__wrap {
        right: 0;
      }
      .line--t {
        transform: rotate(45deg) translateY(0) translateX(0);
        transform-origin: 6px 18px;
      }
      .line--m {
        opacity: 0;
      }
      .line--b {
        transform-origin: 9px 36px;
        transform: rotate(-45deg) translateY(0em) translateX(0em);
      }
    }
  }
  .login {
    @include row--vc;
    margin-right: 35px;
  }
}
</style>

