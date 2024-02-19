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
  <section class="info-menu">
    <TabsMenuSection :propsMenuVoices="menuInfoVoices"></TabsMenuSection>
  </section>




  <div class="sticky-up" v-show="showStickyEls" @click="scrollToTop">
    <i class="fa-solid fa-chevron-up"></i>
    <span> TOP </span>
  </div>
</template>

<script>

import AppHeader from './components/t1/AppHeader.vue'
import AppSlider from './components/t1/AppSlider.vue'
import AppSlider2 from './components/t1/AppSlider2.vue'
import TextImgSection from './components/t1/TextImgSection.vue'
import TabsMenuSection from './components/t1/TabsMenuSection.vue'




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
      ],
      showStickyEls: false,
      menuInfoVoices: [
        {
          name: 'What We Do',
          title: 'Explore Our Courses',
          text: 'Discover a wide range of courses designed to help you achieve your learning goals. Whether you want to advance your career or learn new skills, we have something for everyone.',
          checkList: ['Access high-quality course materials online.', 'Learn from industry experts.', 'Earn certificates upon completion.', 'Flexible learning options.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-1.png'
        },
        {
          name: 'Degree Programme',
          title: 'Degree Programs',
          text: 'Take your education to the next level with our comprehensive degree programs. We offer accredited programs in various fields to help you achieve your academic and career aspirations.',
          checkList: ['Flexible online learning.', 'Dedicated support from advisors.', 'Gain valuable knowledge and skills.', 'Join a diverse community of learners.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-2.png'
        },
        {
          name: 'Career Achievements',
          title: 'Advance Your Career',
          text: 'Invest in your future with our career-focused courses designed to enhance your skills and boost your employability. Stay competitive in today\'s job market with our industry-aligned curriculum.',
          checkList: ['Specialized courses tailored to your career goals.', 'Hands-on projects and case studies.', 'Networking opportunities.', 'Job placement assistance and counseling services.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-3.png'
        },
        {
          name: 'Personal Management',
          title: 'Personal Development',
          text: 'Invest in yourself and unlock your full potential with our personal development courses. Whether you want to improve your communication skills or enhance your leadership abilities, we have courses to help you grow personally and professionally.',
          checkList: ['Gain self-awareness and build emotional intelligence.', 'Develop effective communication and interpersonal skills.', 'Learn strategies for stress management and work-life balance.', 'Achieve your personal and professional goals.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-4.png'
        },
        {
          name: 'Steps to Success',
          title: 'Start Your Learning Journey',
          text: 'Embark on your learning journey with us and take the first step towards success. Our user-friendly platform and expert instructors make learning engaging and enjoyable. Start learning today and unlock a world of opportunities!',
          checkList: ['Easy-to-use platform for seamless learning experience.', 'Engaging and interactive courses for effective learning.', 'Access course materials anytime, anywhere.', 'Join a supportive community of learners.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-5.png'
        },
        {
          name: 'Knowledge Transfer',
          title: 'Empower Yourself with Knowledge',
          text: 'Knowledge is power, and we\'re here to empower you with the knowledge you need to succeed. Our courses cover a wide range of topics, from business and technology to arts and humanities. Start learning today and take control of your future!',
          checkList: ['Expand your knowledge and skill set.', 'Stay updated with the latest trends and developments.', 'Access resources and tools to support your learning journey.', 'Join a global community of passionate learners.'],
          iconPath: './src/assets/img/tabs-icons/h12-tabs-icon-6.png'
        }
      ]


    }
  },
  components: { AppHeader, AppSlider, TextImgSection, AppSlider2, TabsMenuSection },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const amount = 600
      if (window.scrollY > amount) {
        this.showStickyEls = true
      } else {
        this.showStickyEls = false
      }
    })
  }
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

.sticky-up {
  @apply text-white bg-[var(--theme-blue)] flex flex-col sticky w-[50px] h-[50px] items-center justify-center font-bold bottom-0 left-full cursor-pointer
}
</style>