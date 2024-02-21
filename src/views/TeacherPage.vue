<template>
    <div class="page">
        <div class="page-container">
            <div class="teacher-info">
                <img :src="store.teachers[store.router_page].imgPath" alt="">
                <h2>{{ store.teachers[store.router_page].name }}</h2>
                <span> {{ store.teachers[store.router_page].role.toLocaleLowerCase() }}</span>
                <p>
                    {{ store.teachers[store.router_page].description }}
                </p>
            </div>
            <div class="page-right">
                <p class="story">
                <h2> Hello! This is my story </h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique eius magnam beatae rerum qui
                error delectus consequuntur minus corporis ipsum inventore ducimus maxime perspiciatis quod eaque
                facilis, officia animi?

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique eius magnam beatae rerum qui
                error delectus consequuntur minus corporis ipsum inventore ducimus maxime perspiciatis quod eaque
                facilis, officia animi?
                </p>
                <div class="cert-container">
                    <img src="../assets/img/certificate.jpg" alt="" v-for="count in 3">
                </div>

            </div>

        </div>
    </div>
</template>

<script>

import { store } from '../store.js'
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style scoped>
div.page {
    @apply bg-gray-800 text-white h-full
}

div.page-container {
    @apply pt-48 w-1/2 mx-auto flex gap-8
}

img {
    @apply w-[350px]
}

.teacher-info {
    @apply flex flex-col gap-2 w-2/3 border p-3
}

.teacher-info h2 {
    @apply text-3xl text-gray-400 font-semibold
}

.teacher-info span {
    @apply capitalize text-lg text-gray-500
}

p.story {
    @apply text-lg border p-5
}

p.story h2 {
    @apply text-3xl text-gray-400 font-semibold mb-8
}

.page-right {
    @apply w-2/3
}

div.cert-container {
    @apply flex mt-8
}

div.cert-container img {
    @apply w-1/3
}
</style>