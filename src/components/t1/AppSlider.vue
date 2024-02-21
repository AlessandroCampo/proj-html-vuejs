<template>
    <div class="slider-container"
        :style="{ backgroundImage: `url(src/assets/img/h5-slide-${slider_position}-background.jpg)` }">
        <i class="fa-solid fa-chevron-left" @click="slide('left')"></i>
        <i class="fa-solid fa-chevron-right" @click="slide('right')"></i>
        <div class="text-content">
            <h1>
                {{ pageContent[slider_position - 1].title }}
            </h1>
            <p>
                {{ pageContent[slider_position - 1].sub_title }}
            </p>
            <div class="button-cont">
                <button v-if="pageContent[slider_position - 1].button_content === 'register'" class="button">Register
                    now</button>
                <button v-if="pageContent[slider_position - 1].button_content === 'play'" class="play-pause">
                    <i class="fa-solid fa-circle-play"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script>

import { gsap } from 'gsap';


export default {
    data() {
        return {
            slider_position: 3,
            autoSlide: setInterval(() => { this.slide('right') }, 4000),
            pageContent: [
                {
                    title: "Accelerate Your Career",
                    sub_title: "Unlock new opportunities and propel your career forward with our expertly crafted courses. Dive deep into industry-relevant topics and gain the skills employers are looking for.",
                    button_content: "register"
                },
                {
                    title: "Premium Education",
                    sub_title: "Experience education like never before with our premium courses. Engage with cutting-edge content, personalized learning experiences, and dedicated support from industry professionals.",
                    button_content: "play"
                },
                {
                    title: "Contemporary Ideas",
                    sub_title: "Stay ahead of the curve and explore the latest trends and innovations in your field. Join a community of forward-thinkers and transform your ideas into reality.",
                    button_content: "register"
                },
            ]

        }
    },
    methods: {
        slide(direction) {
            // reset the interavl to avoid double slide
            clearInterval(this.autoSlide)
            this.smoothEntry()
            this.autoSlide = setInterval(() => { this.slide('right') }, 4000)
            direction === 'left' ? this.slider_position-- : this.slider_position++
            // handle exeeding number
            if (this.slider_position < 1) {
                this.slider_position = 3
            } else if (this.slider_position > 3) {
                this.slider_position = 1
            }


        },
        smoothEntry() {
            const title = document.querySelector('.slider-container h1');
            const p = document.querySelector('.slider-container p');
            const buttons = document.querySelectorAll('.button-cont');


            const animatedElements = [title, p, ...buttons];

            animatedElements.forEach((el) => {
                gsap.set(el, { opacity: 0, y: 50 })
            });

            animatedElements.forEach((el, index) => {
                gsap.to(el, {
                    opacity: 1,
                    duration: 0.8,
                    y: 0, // Use 'y' instead of 'translateY' for GSAP
                    delay: index * 0.3
                });
            });
        }



    },
    mounted() {
        this.smoothEntry()
        // this.$nextTick(() => {
        //     this.smoothEntry();
        // });
    }
}
</script>

<style scoped>
.slider-container {
    @apply relative h-full flex items-center justify-center bg-cover bg-center
}

.slider-container>i {
    @apply text-white text-2xl lg:text-6xl absolute top-1/2 translate-y-[-50%] ms-5 cursor-pointer
}

i.fa-chevron-right {
    @apply right-5
}

i.fa-chevron-left {
    @apply left-5
}


.text-content {
    @apply text-white text-center flex flex-col gap-8 w-3/5 p-4 items-center rounded-xl
}

.text-content h1 {
    @apply text-5xl lg:text-7xl font-bold opacity-0
}

.text-content p {
    @apply text-base lg:text-xl font-semibold leading-9 opacity-0
}

.button-cont {
    @apply w-full opacity-0
}



.play-pause {
    @apply text-7xl
}
</style>