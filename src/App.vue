<template>
  <AppHeader />
  <AppSlider />
  <section class="subj-container">
    <div class="subj-card" v-for="(sub, index) in subjects" :key="index">
      <img :src="`./src/assets/img/subj-icons/${sub}.png`" :alt="sub">
      <p> {{ sub }}</p>
    </div>
  </section>
  <TextImgSection v-for="(section, index) in textImgSections" :key="index" :propsSection="section"></TextImgSection>
  <AppSlider2></AppSlider2>
</template>

<script>

import AppHeader from './components/t1/AppHeader.vue'
import AppSlider from './components/t1/AppSlider.vue'
import TextImgSection from './components/t1/TextImgSection.vue'
import AppSlider2 from './components/t1/AppSlider2.vue'



export default {
  data() {
    return {
      subjects: ["Languages", "Software", "Business", "Chemistry", "Science", "DIY&Craft"],
      textImgSections: [
        {
          title: "The Trusted Name for In-Home Tutoring.",
          paragraph: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
          bottomText: "LEARN MORE",
          imgPath: './src/assets/img/h5-img-1.jpg',
          imgOnRight: true
        },
        {
          title: "Empowering Children to Reach Their Potential.",
          paragraph: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
          bottomText: "168 User Stories 347 Events",
          imgPath: './src/assets/img/h5-img-2.jpg',
          imgOnRight: false
        }
      ]
    }
  },
  components: { AppHeader, AppSlider, TextImgSection, AppSlider2 }
}
</script>

<style scoped>
.subj-container {
  @apply w-3/4 mx-auto flex text-2xl text-gray-800 gap-6
}

.subj-card {
  @apply flex flex-col gap-4 w-1/6 items-center bg-slate-200 border-2 border-gray-200 py-6 rounded-xl
}

.subj-card img {
  @apply w-1/3
}

section {
  @apply py-[var(--section-distance)]
}
</style>