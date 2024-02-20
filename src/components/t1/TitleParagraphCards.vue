<template>
    <div class="section-container">
        <h2> {{ propTitle }} </h2>
        <p> {{ propSubTitle }} </p>
        <div class="cards-container .course-cards-container" v-if="propType === 'courses'" ref="slider">
            <CourseCard v-for="(course, index) in propArray" :key="index" :propCard="course"></CourseCard>

        </div>
        <div class="cards-container .teacher-cards-container" v-if="propType === 'teachers'" ref="slider">
            <TeacherCard v-for="(teacher, index) in propArray" :key="index" :propCard="teacher"></TeacherCard>
        </div>
        <div class="dots">
            <i class="fa-solid fa-circle" :class="index === sliderPosition ? '' : 'opacity-40'"
                v-for=" (count, index) in (Math.floor(propArray.length / 3))" :data-page="index" @click="scroll(index)"></i>
        </div>
    </div>
</template>

<script>

import CourseCard from '../t2/CourseCard.vue'
import TeacherCard from '../t2/TeacherCard.vue'

export default {
    data() {
        return {

            sliderPosition: 0


        }
    },
    components: { CourseCard, TeacherCard },
    props: ['propTitle', 'propSubTitle', 'propType', 'propArray'],
    methods: {
        scroll(index) {
            const slider = this.$refs.slider;
            let amount = slider.offsetWidth;

            if (index < this.sliderPosition) {
                amount *= -1;
            }
            this.sliderPosition = index
            slider.scrollBy({
                left: amount,
                behavior: 'smooth'
            });

        }
    }
}
</script>

<style scoped>
.section-container {
    @apply flex flex-col w-3/4 mx-auto text-center gap-6
}

.section-container h2 {
    @apply text-4xl text-gray-800 font-semibold
}

.section-container {
    @apply text-lg text-gray-500
}

.cards-container {
    @apply flex mt-16 gap-6 overflow-x-scroll
}



.dots {
    @apply flex items-center gap-3 justify-center text-[var(--theme-blue)] text-sm mt-6 cursor-pointer
}
</style>