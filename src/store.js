import { reactive } from 'vue'

export const store = reactive({
    router_page: 0,
    courses: [
        {
            name: 'Learn Spanish',
            teacher: 'Jennie King',
            description: 'Immerse yourself in the vibrant world of Spanish language and culture with Jennie King as your guide. Whether you’re a beginner or seeking to refine your skills, this course offers comprehensive lessons covering grammar, vocabulary, and conversation. Explore the richness of Spanish literature and enhance your fluency through engaging activities and authentic materials.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'LANGUAGES',
            price: '20$',
            imgPath: './src/assets/img/courses/learn_spanish.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/jennie_king.jpg',
            review_average: 4

        },
        {
            name: 'Business English',
            teacher: 'Preston Marshall',
            description: 'Gain a competitive edge in the global business arena with Preston Marshall’s Business English course. Master professional communication skills, including writing effective emails, conducting successful meetings, and delivering impactful presentations. Dive into case studies and real-world scenarios to sharpen your business acumen and excel in today’s corporate environment.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'LANGUAGES',
            price: '20$',
            imgPath: './src/assets/img/courses/business_english.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/preston_marshall.jpg',
            review_average: 5
        },
        {
            name: 'Social Computing',
            teacher: 'David Sanders',
            description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'PROGRAMMING',
            price: 'FREE',
            imgPath: './src/assets/img/courses/social_computing.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/david_sanders.jpg',

        },
        {
            name: 'Android Developer',
            teacher: 'David Sanders',
            description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'PROGRAMMING',
            price: 'FREE',
            imgPath: './src/assets/img/courses/android_developer.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/david_sanders.jpg',
            review_average: 5
        },
        {
            name: 'Web Design',
            teacher: 'Jennifer Powell',
            description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'PROGRAMMING',
            price: 'FREE',
            imgPath: './src/assets/img/courses/web_design.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/jennifer_powell.jpg',
            review_average: 5
        },
        {
            name: 'Basic Marketing',
            teacher: 'Edward Bowman',
            description: 'Explore the dynamic intersection of technology and society with David Sanders in Social Computing. Investigate how digital platforms shape human behavior, influence decision-making processes, and impact social relationships. Analyze case studies and emerging trends to develop critical insights into the evolving landscape of online communities and digital culture.',
            registered_students: Math.floor(Math.random() * 20),
            subject: 'BUSINESS',
            price: '40$',
            imgPath: './src/assets/img/courses/basic_marketing.jpg',
            router_link: '/course',
            teacherImg: './src/assets/img/teachers/edward_bowman.jpg',
            review_average: 4
        }
    ],
    teachers: [
        {
            name: 'Brenda Harris',
            role: 'TEACHER',
            description: 'With a passion for language and a flair for engaging instruction, Brenda Harris brings her expertise in linguistics to the classroom. Her dynamic teaching style fosters a supportive learning environment where students thrive and develop their language skills with confidence.',
            imgPath: './src/assets/img/teachers/brenda_harris.jpg',
            router_link: '/teacher',
        },
        {
            name: 'Lisa Griffin',
            role: 'TEACHER',
            description: 'Lisa Griffin is a dedicated educator with a knack for making complex concepts accessible to all learners. Through her innovative teaching methods and personalized approach, she empowers students to reach their full potential and succeed in their academic endeavors.',
            imgPath: './src/assets/img/teachers/lisa_griffing.jpg',
            router_link: '/teacher',
        },
        {
            name: 'Victor Green',
            role: 'TEACHER',
            description: 'Victor Green is a visionary educator committed to inspiring the next generation of leaders in technology. With his deep expertise in programming and a passion for teaching, he equips students with the skills and knowledge to excel in the fast-paced world of software development.',
            imgPath: './src/assets/img/teachers/victor_green.jpg',
            router_link: '/teacher',
        },
        // {
        //     name: 'Alessio Crea',
        //     role: 'TUTOR',
        //     description: 'Alessio brings years of work experience on the table. He will help you improve your critical approach to problems. Just a tip: never answer his questions with another question',
        //     imgPath: './src/assets/img/teachers/alessio_crea.jpg',
        //     router_link: '/teacher',
        // },
        // {
        //     name: 'Riccardo Scrizzi',
        //     role: 'TUTOR',
        //     description: 'Legends tell that he started programming when he was 2 years old. He has an unique ability of conveying his passion for coding to his students',
        //     imgPath: './src/assets/img/teachers/riccardo_hyur.jpg',
        //     router_link: '/teacher',
        // },
        // {
        //     name: 'Alessandro Lodigiani',
        //     role: 'TEACHER',
        //     description: 'Alessandro is an expert developer and teacher who will help you grow in your programming career. He was 27 before teaching in class 115, now he is 52',
        //     imgPath: './src/assets/img/teachers/alessandro_lodigiani.png',
        //     router_link: '/teacher',
        // }
    ],
    pages: [
        {
            name: 'Courses',
            href: 'section.courses'
        },
        {
            name: 'Instructors',
            href: 'section.tutors'
        },

        {
            name: 'Pricing Plan',
            href: '.plans'
        },
        {
            name: 'About',
            href: 'footer'
        },
    ],
    menu_voices: ['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    scrollToSection(href, index) {
        this.router_page = index
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

})