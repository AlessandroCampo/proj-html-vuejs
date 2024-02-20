<template>
    <div class="section-container">
        <h2> {{ propTitle }} </h2>
        <p> {{ propSubTitle }} </p>
        <div class="cards-container .course-cards-container" v-if="propType === 'Subjects'">
            <CourseCard v-for="(course, index) in courses" :key="index" :propCard="course"></CourseCard>
        </div>
        <div class="cards-container .teacher-cards-container" v-if="propType === 'Teachers'">
            <TeacherCard v-for="(teacher, index) in teachers" :key="index" :propCard="teacher"></TeacherCard>
        </div>
    </div>
</template>

<script>

import CourseCard from '../t2/CourseCard.vue'
import TeacherCard from '../t2/TeacherCard.vue'

export default {
    data() {
        return {
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
                }
            ]


        }
    },
    components: { CourseCard, TeacherCard },
    props: ['propTitle', 'propSubTitle', 'propType']
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
    @apply flex mt-16 gap-6
}
</style>