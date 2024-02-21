<template>
    <div class="page">
        <div class="page-container">
            <div class="title">
                <h2>
                    {{ store.courses[store.router_page].name }}
                </h2>
                <div class="price"
                    :class="store.courses[store.router_page].price === 'FREE' ? 'bg-yellow-600' : 'bg-[var(--theme-blue)]'">
                    {{ store.courses[store.router_page].price }}
                </div>
            </div>

            <div class="additional-info">
                <div class="teacher-info">
                    <img :src="store.courses[store.router_page].teacherImg" alt="" class="teacher-avatar">
                    <div>
                        <strong> Instructor: </strong>
                        <div> {{ store.courses[store.router_page].teacher }}</div>
                    </div>

                </div>

                <div class="">
                    <strong> Category: </strong>
                    <div> {{ store.courses[store.router_page].subject.toLocaleLowerCase() }}</div>
                </div>

                <div class="reviews flex flex-col items-center">
                    <strong> Students Reviews: </strong>
                    <div>
                        <i class="fa-solid fa-star" v-for="(count) in store.courses[store.router_page].review_average"
                            :key="count"></i>
                    </div>

                </div>

                <button class="button">
                    BUY COURSE
                </button>
            </div>

            <img :src="store.courses[store.router_page].imgPath" alt="">

            <p>
            <h2>
                ABOUT THIS COURSE
            </h2>
            {{ store.courses[store.router_page].description }}
            {{ store.courses[store.router_page].description }}
            </p>

        </div>
    </div>
</template>

<script>

import { store } from '../store'
export default {
    data() {
        return { store }
    }
}
</script>

<style  scoped>
div.page {
    @apply bg-gray-800 text-white
}

div.page-container {
    @apply pt-48 w-1/2 mx-auto
}

.title h2 {
    @apply text-white text-4xl font-semibold
}

div.title {
    @apply flex items-center gap-3
}

.price {
    @apply text-lg text-white py-[1px] px-12 rounded-xl w-[50px] flex items-center justify-center mt-2
}

div.additional-info {
    @apply flex items-center justify-between my-12
}

.teacher-info {
    @apply flex items-center gap-3
}

.fa-star {
    @apply text-yellow-500
}

.teacher-avatar {
    clip-path: circle();
    width: 80px;
}

p {
    @apply mt-10
}

p h2 {
    @apply text-3xl text-gray-400 mb-10 font-semibold
}
</style>