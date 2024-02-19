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
            <button v-if="pageContent[slider_position - 1].button_content === 'register'" class="button">Register
                now</button>
            <button v-if="pageContent[slider_position - 1].button_content === 'play'" class="play-pause">
                <i class="fa-solid fa-circle-play"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider_position: 3,
            autoSlide: setInterval(() => { this.slide('right') }, 4000),
            pageContent: [

                {
                    title: "Accellerate Your Career",
                    sub_title: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
                    button_content: "register"
                },
                {
                    title: "Premium Education",
                    sub_title: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
                    button_content: "play"
                },
                {
                    title: "Contemporary Ideas",
                    sub_title: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.",
                    button_content: "register"
                },
            ]
        }
    },
    methods: {
        slide(direction) {
            // reset the interavl to avoid double slide
            clearInterval(this.autoSlide)
            this.autoSlide = setInterval(() => { this.slide('right') }, 4000)
            direction === 'left' ? this.slider_position-- : this.slider_position++
            // handle exeeding number
            if (this.slider_position < 1) {
                this.slider_position = 3
            } else if (this.slider_position > 3) {
                this.slider_position = 1
            }

        },

    },
    mounted() {

    }
}
</script>

<style scoped>
.slider-container {
    @apply relative h-5/6 flex items-center justify-center
}

.slider-container>i {
    @apply text-white text-6xl absolute top-1/2 translate-y-[-50%] ms-5 cursor-pointer
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
    @apply text-7xl font-bold
}

.text-content p {
    @apply text-xl font-semibold leading-9
}

.play-pause {
    @apply text-7xl
}
</style>