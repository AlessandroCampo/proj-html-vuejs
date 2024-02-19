<template>
    <div>
        <div class="slider-container" style="background-image: url('src/assets/img/globe-background.png')">
            <div class="cards-container" ref="slider">
                <div class="testimonial-card" v-for="(test, index) in testimonials" :key="index">
                    <img :src="test.avatarImg" :alt="test.fullName">
                    <p>
                        {{ test.text }}
                    </p>

                    <div class="testimonial-info">
                        <div class="full-name">
                            {{ test.fullName }}
                        </div>
                        <div class="role">
                            {{ test.role }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="dots">
                <i class="fa-solid fa-circle" :class="index === sliderPosition ? '' : 'opacity-40'"
                    v-for=" (count, index) in sliderPages" :data-page="index" @click="scroll(index)"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    avatarImg: './src/assets/img/testimonials/testimonials-standard-1.png',
                    text: "I was skeptical about online learning, but iAcademy changed my mind completely. The courses are well-structured, and the instructors provide personalized feedback. I'm amazed by how much I've learned in such a short time!",
                    fullName: 'Virginia Foster',
                    role: 'Student'
                },
                {
                    avatarImg: './src/assets/img/testimonials/testimonials-standard-2.png',
                    text: "The courses at iAcademy are top-notch! The interactive learning materials and engaging lectures kept me motivated throughout the course. Thanks to iAcademy, I gained valuable skills that helped me advance in my career.",
                    fullName: 'Joan Collins',
                    role: 'Student'
                },
                {
                    avatarImg: './src/assets/img/testimonials/testimonials-standard-3.png',
                    text: "As a teacher, I highly recommend iAcademy to anyone looking to expand their knowledge. The platform offers a wide range of courses taught by industry experts. I've had a great experience collaborating with iAcademy to create engaging course content.",
                    fullName: 'Molly Simon',
                    role: 'Teacher'
                }
            ],
            sliderPages: 3,
            sliderPosition: 0,
            autoScroll: setInterval(() => {
                let fakeIndex = this.sliderPosition + 1
                if (fakeIndex > 2) {
                    fakeIndex = 0
                }
                this.scroll(fakeIndex)
            }, 4000),
        }
    },
    methods: {
        scroll(index) {
            // stop autoSlider on user input 
            clearInterval(this.autoScroll)
            const slider = this.$refs.slider;
            let amount = slider.offsetWidth;
            // if the user clicks 2 position off current index, double scroll. If user clicks forward, scrolls right and viceversa
            if (index - this.sliderPosition === 2 || index - this.sliderPosition === -2) {
                amount = amount * 2
            }
            if (index < this.sliderPosition) {
                amount *= -1;
            }

            this.sliderPosition = index
            slider.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
            // reset autoscroll
            setTimeout(() => {
                this.autoScroll = setInterval(() => {
                    let fakeIndex = this.sliderPosition + 1
                    if (fakeIndex > 2) {
                        fakeIndex = 0
                    }
                    this.scroll(fakeIndex)
                }, 4000)
            }, 4000)
        }
    }
}
</script>

<style scoped>
.slider-container {
    @apply h-1/2 bg-cover bg-center pb-36 py-3
}

.cards-container {
    @apply w-1/2 mx-auto overflow-x-scroll flex
}

.cards-container::-webkit-scrollbar {
    display: none;
    /* Hide default scrollbar in WebKit browsers */
}

.testimonial-card {
    @apply flex flex-col gap-6 py-5 items-center basis-full shrink-0 text-center text-white
}

.testimonial-card img {
    @apply w-[95px]
}


.testimonial-info {
    @apply font-semibold text-[1.2em]
}

.testimonial-card p {
    @apply text-lg font-semibold w-2/3
}

.testimonial-info .full-name {
    @apply text-[1.2em] mb-2
}

.testimonial-info .role {
    @apply text-sm uppercase
}

.dots {
    @apply flex items-center gap-3 justify-center text-white text-sm mt-8 cursor-pointer
}
</style>