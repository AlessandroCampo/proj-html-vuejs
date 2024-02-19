<template>
    <div class="text-img-container" :class="propsSection.imgOnRight ? '' : 'flex-row-reverse'">
        <div class="section-text ">
            <h2>
                {{ propsSection.title }}
            </h2>
            <p>
                {{ propsSection.paragraph }}
            </p>

            <div>
                {{ propsSection.bottomText }}
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
    @apply w-3/4 mx-auto flex items-center justify-center
}

.text-img-container .section-text {
    @apply w-2/5
}

.text-img-container .section-img {
    @apply w-3/6
}

.section-text {
    @apply px-4 flex flex-col gap-5
}

.section-text p {
    @apply text-[1.1em] text-gray-600
}

.section-text h2 {
    @apply text-4xl font-bold w-3/4
}

.section-text>div {
    @apply text-[var(--theme-blue)] font-bold text-sm
}

.section-img>img {
    @apply w-full
}
</style>