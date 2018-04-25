<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    if (this.$route.query.lang) {
      this._i18n.locale = this.$route.query.lang
    } else {
      this.$router.push({ path: this.$route.path, query: { lang: 'en' } })
      this._i18n.locale = this.$route.query.lang
    }
  },
  watch: {
    '$route.query.lang' () {
      if (this.$route.query.hasOwnProperty('lang')) {
        this._i18n.locale = this.$route.query.lang
      }
    }
  }
}
</script>
