<template>
    <div class="card">
        <img :src="propCard.imgPath" alt="">
        <h3> {{ propCard.name }} </h3>
        <span class="role"> {{ propCard.role }} </span>
        <p>
            {{ propCard.description }}
        </p>
        <div class="socials">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['propCard']
}
</script>

<style scoped>
.card {
    @apply flex flex-col gap-3 items-center px-6 lg:w-[var(--width-oneThird-gap6)] w-full shrink-0
}

.card img {
    @apply w-[150px]
}

.card h3 {
    @apply text-2xl text-gray-800 font-semibold
}

.card .role {
    @apply text-base uppercase text-gray-400 font-semibold
}

.card p {
    @apply text-sm text-gray-500
}

.card .socials {
    @apply text-sm text-gray-400 flex gap-3 mt-5
}

.card .socials i:hover {
    @apply transition-all duration-500 text-[var(--theme-blue)] cursor-pointer
}
</style>