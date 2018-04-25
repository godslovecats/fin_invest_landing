// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import {messages} from './lang/lang'

/* eslint-disable no-new */

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})
