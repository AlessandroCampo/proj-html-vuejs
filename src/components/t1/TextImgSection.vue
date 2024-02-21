<template>
    <div class="text-img-container flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': !propsSection.imgOnRight }">
        <div class="section-text ">
            <h2>
                {{ propsSection.title }}
            </h2>
            <p>
                {{ propsSection.paragraph }}
            </p>

            <div v-if="!propsSection.cheat">
                {{ propsSection.bottomText }}
            </div>
            <div v-else>
                <img :src="propsSection.bottomText" alt="">
            </div>
        </div>
        <div class="section-img">
            <img :src="propsSection.imgPath" alt="">
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['propsSection']
}
</script>

<style  scoped>
.text-img-container {
    @apply w-3/4 mx-auto flex items-center justify-center mb-28
}

.text-img-container .section-text {
    @apply lg:w-2/5
}

.text-img-container .section-img {
    @apply lg:w-3/6 w-3/4
}

.section-text {
    @apply px-4 flex flex-col gap-5
}

.section-text p {
    @apply text-[1.1em] text-gray-600
}

.section-text h2 {
    @apply lg:text-4xl font-bold lg:w-3/4 text-2xl
}

.section-text>div {
    @apply text-[var(--theme-blue)] font-bold text-sm
}

.section-img>img {
    @apply w-full mt-12 lg:mt-0
}

div.text-big {
    @apply text-2xl
}
</style>