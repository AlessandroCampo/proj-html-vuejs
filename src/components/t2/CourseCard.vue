<template>
    <div class="card">
        <img :src="propCard.imgPath" alt="">
        <div class="text-info">
            <div class="card-up">
                <div class="card-titles">
                    <h2>
                        {{ propCard.title }}
                    </h2>
                    <div class="name">
                        {{ propCard.teacher }}
                    </div>
                </div>

                <div class="price" :class="propCard.price === 'FREE' ? 'bg-yellow-600' : 'bg-[var(--theme-blue)]'">
                    {{ propCard.price }}
                </div>
            </div>



            <p>
                {{ propCard.description }}
            </p>

            <div class="icons-numbers">
                <span class="icon-container">
                    <i class="fa-solid fa-user"></i>
                    <span> {{ propCard.registered_students }} </span>
                </span>
                <span class="icon-container">
                    <i class="fa-solid fa-tag"></i>
                    <span> {{ propCard.subject }} </span>
                </span>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['propCard']
}
</script>

<style scoped>
.card {
    @apply w-[var(--width-oneThird-gap6)] border-2 shrink-0
}

.text-info {
    @apply flex flex-col items-start gap-5 text-start p-5
}

.card h2 {
    @apply text-[1.5em] text-gray-800 font-bold
}

.card .name {
    @apply text-base text-gray-400 mt-1 font-semibold
}

.card p {
    @apply text-base text-gray-500 leading-6
}

.card .icons-numbers {
    @apply flex gap-3
}

.card .card-up {
    @apply flex items-start mt-3 justify-between w-full
}

.card .icon-container {
    @apply flex items-center text-sm gap-1 font-bold text-gray-400
}

.card .price {
    @apply text-sm text-white py-[1px] px-5 rounded-xl
}
</style>