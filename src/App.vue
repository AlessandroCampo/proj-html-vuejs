<template>
  <AppHeader :propArray="store.menu_voices"></AppHeader>
  <HiddenHeader :propArray="store.menu_voices" :show="showStickyEls"></HiddenHeader>
  <RouterView></RouterView>
</template>

<script>
import AppHeader from './components/t1/AppHeader.vue'
import HiddenHeader from './components/t1/HiddenHeader.vue'
import { store } from './store.js'
export default {
  data() {
    return {
      store,
      showStickyEls: false,
    }
  },
  mounted() {
    console.log(store)
    window.addEventListener('scroll', () => {
      const amount = 600
      if (window.scrollY > amount) {
        this.showStickyEls = true
      } else {
        this.showStickyEls = false
      }
    })
  },
  components: { AppHeader, HiddenHeader }
}
</script>

<style lang="scss" scoped></style>