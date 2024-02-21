<template>
  <AppHeader :propArray="menu_voices"></AppHeader>
  <HiddenHeader :propArray="menu_voices" :show="showStickyEls"></HiddenHeader>
  <AppSlider></AppSlider>
  <section class="subj-container">
    <div class="subj-card" v-for="(sub, index) in subjects" :key="index">
      <img :src="`./src/assets/img/subj-icons/${sub}.png`" :alt="sub">
      <p> {{ sub }}</p>
    </div>
  </section>
  <section>
    <TextImgSection v-for="(section, index) in textImgSections" :key="index" :propsSection="section"></TextImgSection>
  </section>

  <AppSlider2></AppSlider2>
  <section class="info-menu">
    <TabsMenuSection :propsMenuVoices="menuInfoVoices"></TabsMenuSection>
  </section>
  <section class="cards-list">
    <TitleParagraphCards :propTitle="'Popular Online Courses'"
      :propSubTitle="' Unlock Your Potential: Explore Exciting Learning Opportunities Today!'" :propArray="courses"
      :propType="'courses'">
    </TitleParagraphCards>
  </section>
  <section class="card-list">
    <TitleParagraphCards :propTitle="'The Best Tutors in Town'"
      :propSubTitle="'Meet our amazing tutors who will walk you trough this amazing journey '" :propArray="teachers"
      :prop-type="'teachers'">
    </TitleParagraphCards>
  </section>
  <section class="plans">
    <h2> Pricing Plans </h2>
    <p> Find the plan that suits your needs the best</p>
    <PricingTable :propArray="pricing_plans"></PricingTable>
  </section>
  <section class="sponsors">
    <AppSponsors :propArray="sponsors"></AppSponsors>
  </section>
  <footer>
    <AppFooter></AppFooter>
  </footer>



  <div class="sticky-up" v-show="showStickyEls" @click="scrollToTop">
    <i class="fa-solid fa-chevron-up"></i>
    <span> TOP </span>
  </div>
</template>

<script>

import AppHeader from './components/t1/AppHeader.vue'
import HiddenHeader from './components/t1/HiddenHeader.vue'
import AppSlider from './components/t1/AppSlider.vue'
import AppSlider2 from './components/t1/AppSlider2.vue'
import TextImgSection from './components/t1/TextImgSection.vue'
import TabsMenuSection from './components/t1/TabsMenuSection.vue'
import TitleParagraphCards from './components/t1/TitleParagraphCards.vue'
import PricingTable from './components/t1/PricingTable.vue'
import AppSponsors from './components/t1/AppSponsors.vue'
import AppFooter from './components/t1/AppFooter.vue'




export default {
  data() {
    return {
      menu_voices: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
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
      ],
      courses: [
        {
          title: 'Learn Spanish',
          teacher: 'Jennie King',
          description: 'Immerse yourself in the vibrant world of Spanish language and culture with Jennie King as your guide. Whether you’re a beginner or seeking to refine your skills, this course offers comprehensive lessons covering grammar, vocabulary, and conversation. Explore the richness of Spanish literature and enhance your fluency through engaging activities and authentic materials.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'LANGUAGES',
          price: '20$',
          imgPath: './src/assets/img/courses/learn_spanish.jpg'
        },
        {
          title: 'Business English',
          teacher: 'Preston Marshall',
          description: 'Gain a competitive edge in the global business arena with Preston Marshall’s Business English course. Master professional communication skills, including writing effective emails, conducting successful meetings, and delivering impactful presentations. Dive into case studies and real-world scenarios to sharpen your business acumen and excel in today’s corporate environment.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'LANGUAGES',
          price: '20$',
          imgPath: './src/assets/img/courses/business_english.jpg'
        },
        {
          title: 'Social Computing',
          teacher: 'David Sanders',
          description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'PROGRAMMING',
          price: 'FREE',
          imgPath: './src/assets/img/courses/social_computing.jpg'
        },
        {
          title: 'Social Computing',
          teacher: 'David Sanders',
          description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'PROGRAMMING',
          price: 'FREE',
          imgPath: './src/assets/img/courses/social_computing.jpg'
        },
        {
          title: 'Android Developer',
          teacher: 'David Sanders',
          description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'PROGRAMMING',
          price: 'FREE',
          imgPath: './src/assets/img/courses/android_developer.jpg'
        },
        {
          title: 'Web Design',
          teacher: 'Jennifer Powell',
          description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'PROGRAMMING',
          price: 'FREE',
          imgPath: './src/assets/img/courses/web_design.jpg'
        },
        {
          title: 'Basic Marketing',
          teacher: 'Edward Bowman',
          description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
          registered_students: Math.floor(Math.random() * 20),
          subject: 'BUSINESS',
          price: '40$',
          imgPath: './src/assets/img/courses/basic_marketing.jpg'
        }
      ],
      teachers: [
        {
          full_name: 'Brenda Harris',
          role: 'TEACHER',
          description: 'With a passion for language and a flair for engaging instruction, Brenda Harris brings her expertise in linguistics to the classroom. Her dynamic teaching style fosters a supportive learning environment where students thrive and develop their language skills with confidence.',
          imgPath: './src/assets/img/teachers/brenda_harris.jpg'
        },
        {
          full_name: 'Lisa Griffin',
          role: 'TEACHER',
          description: 'Lisa Griffin is a dedicated educator with a knack for making complex concepts accessible to all learners. Through her innovative teaching methods and personalized approach, she empowers students to reach their full potential and succeed in their academic endeavors.',
          imgPath: './src/assets/img/teachers/lisa_griffing.jpg'
        },
        {
          full_name: 'Victor Green',
          role: 'TEACHER',
          description: 'Victor Green is a visionary educator committed to inspiring the next generation of leaders in technology. With his deep expertise in programming and a passion for teaching, he equips students with the skills and knowledge to excel in the fast-paced world of software development.',
          imgPath: './src/assets/img/teachers/victor_green.jpg'
        },
        {
          full_name: 'Alessio Crea',
          role: 'TUTOR',
          description: 'Alessio brings years of work experience on the table. Loved by his students for his joyful attitude, he will help you improve your critical approach to problems. Just a tip: never answer his questions with another question',
          imgPath: './src/assets/img/teachers/alessio_crea.jpg'
        },
        {
          full_name: 'Riccardo Scrizzi',
          role: 'TUTOR',
          description: 'Legends tell that he started programming when he was 2 years old. He has an unique ability of conveying his passion for coding to his students',
          imgPath: './src/assets/img/teachers/riccardo_hyur.jpg'
        },
        {
          full_name: 'Marta Seminara',
          role: 'Carreer Advisor',
          description: 'If you dont find her at the desk working, shes probably taking the 12th tomato pause of the day.She is the best at guding students towards the right path towards their dream job',
          imgPath: './src/assets/img/teachers/marta_seminara.jpg'
        }
      ],
      pricing_plans: [
        {
          name: 'Standard',
          price: 12,
          iconPath: './src/assets/img/tabs-icons/plan_standard_icon.png',
          menu_voices: {
            'Number of Courses': 2,
            'Time': '15 Days',
            'Web Designing': true,
            'Human-Centered Design': true,
            'Basic Marketing': false,
            'Python for Everybody': false,
            'Android Developer': false,
            'Business English': false
          }

        },
        {
          name: 'Professional',
          price: 59,
          iconPath: './src/assets/img/tabs-icons/plan_professional_icon.png',
          menu_voices: {
            'Number of Courses': 4,
            'Time': '30 Days',
            'Web Designing': true,
            'Human-Centered Design': true,
            'Basic Marketing': true,
            'Python for Everybody': true,
            'Android Developer': false,
            'Business English': false
          }
        },
        {
          name: 'Advanced',
          price: 88,
          iconPath: './src/assets/img/tabs-icons/plan_advanced_icon.png',
          menu_voices: {
            'Number of Courses': 6,
            'Time': '30 Days',
            'Web Designing': true,
            'Human-Centered Design': true,
            'Basic Marketing': true,
            'Python for Everybody': true,
            'Android Developer': true,
            'Business English': true
          }
        }
      ],
      sponsors: [
        {
          name: 'teachHub',
          logoPath: './src/assets/img/sponsors/teachhub.png'
        },
        {
          name: 'scholar',
          logoPath: './src/assets/img/sponsors/scholar.png'
        },
        {
          name: 'iacademy',
          logoPath: './src/assets/img/sponsors/iacademy.png'
        },
        {
          name: 'study_central',
          logoPath: './src/assets/img/sponsors/studycentral.png'
        },
        {
          name: 'educator',
          logoPath: './src/assets/img/sponsors/educator.png'
        }
      ]


    }
  },
  components: { AppHeader, AppSlider, TextImgSection, AppSlider2, TabsMenuSection, TitleParagraphCards, PricingTable, AppSponsors, AppFooter, HiddenHeader },
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
  },

}
</script>

<style scoped>
.subj-container {
  @apply w-3/4 mx-auto flex text-2xl text-gray-800 gap-6 flex-wrap lg:flex-nowrap justify-center
}

.subj-card {
  @apply flex flex-col gap-4 lg:w-1/6 items-center bg-slate-200 border-2 border-gray-200 py-6 rounded-xl cursor-pointer w-3/4 md:w-[var(--width-oneThird-gap8)]
}

.subj-card:hover img {
  @apply transition-all translate-y-[-5px] duration-500
}

.subj-card img {
  @apply w-1/3
}

section {
  @apply py-[var(--section-distance)]
}

.card-list {
  @apply mb-24
}

.sticky-up {
  @apply text-white bg-[var(--theme-blue)] flex flex-col fixed w-[50px] h-[50px] items-center justify-center font-bold bottom-0 right-0 cursor-pointer
}

.plans h2 {
  @apply text-center text-gray-800 font-semibold text-4xl
}

.plans p {
  @apply text-center text-lg text-gray-500 mt-6
}

footer {
  @apply bg-[#222222]
}
</style>