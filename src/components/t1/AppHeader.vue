<template>
    <div class="header-container">
        <img src="../../assets/img/logo-light.png" alt="">
        <nav>
            <ul>
                <li v-for="(voice, index) in propArray" :key=index> {{ voice }}</li>
                <li>
                    <div class="icon-container">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-bag-shopping cart">
                            <span class="in-cart number-icon"> {{ cart_items }} </span>
                        </i>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </li>

            </ul>
        </nav>
        <i class="fa-solid fa-bars mobile-menu"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart_items: 0
        }
    },
    props: ['propArray']
}
</script>

<style scoped>
.header-container {
    @apply absolute z-10 w-3/4 left-1/2 translate-x-[-50%] flex justify-between items-center text-white px-4 py-8 rounded-xl
}

.header-container ul {
    @apply flex uppercase text-base gap-12 font-bold
}

.header-container img {
    @apply w-[140px]
}

.header-container .icon-container {
    @apply flex items-center gap-5 text-[1.1em] mt-[3px]
}

.cart {
    @apply relative
}

nav {
    @apply hidden lg:flex
}

.mobile-menu {
    @apply block lg:hidden text-2xl
}
</style>