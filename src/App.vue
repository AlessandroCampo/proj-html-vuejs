<template>
  <AppHeader :propArray="store.menu_voices"></AppHeader>
  <HiddenHeader :propArray="store.menu_voices" :show="showStickyEls"></HiddenHeader>
  <RouterView></RouterView>
  <div class="sticky-up" v-show="showStickyEls" @click="store.scrollToTop">
    <i class="fa-solid fa-chevron-up"></i>
    <span> TOP </span>
  </div>
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

<style scoped>
.sticky-up {
  @apply text-white bg-[var(--theme-blue)] flex flex-col fixed w-[50px] h-[50px] items-center justify-center font-bold bottom-0 right-0 cursor-pointer
}
</style>