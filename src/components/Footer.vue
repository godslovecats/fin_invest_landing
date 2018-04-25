<template>
  <footer class="footer">

  <div class="footer__wrap"><a class="logo centred" href=""><img class="logo__ico" v-bind:src="'/static/logo.svg'" />triad.capital</a></div>
  <ul class="footer__wrap link-nav link-nav--border centred">
<li class="link-nav__item"><a href="">О нас</a></li>
<li class="link-nav__item"><a href="">Контакты</a></li>
<li class="link-nav__item"><a href="">FAQ</a></li>
<li class="link-nav__item"><a href="">Наши правила</a></li>
  </ul>
    <ul class="footer__wrap link-nav link-nav--ico centred">
<li class="link-nav__item"><a href=""><img v-bind:src="'/static/icons/i-fb.svg'" /></a></li>
<li class="link-nav__item"><a href=""><img v-bind:src="'/static/icons/i-inst.svg'" /></a></li>
<li class="link-nav__item"><a href=""><img v-bind:src="'/static/icons/i-fb.svg'" /></a></li>
<li class="link-nav__item"><a href=""><img v-bind:src="'/static/icons/i-inst.svg'" /></a></li>
  </ul>

  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
