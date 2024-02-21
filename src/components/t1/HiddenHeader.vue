<template>
    <div class="header-container" id="hidden_header">
        <img src="../../assets/img/logo-colored.png" alt="">
        <nav>
            <ul>
                <li v-for="(voice, index) in propArray" :key="index"> {{ voice }}</li>
            </ul>
        </nav>
        <i class="fa-solid fa-bars mobile-menu"></i>
    </div>
</template>

<script>

import gsap from 'gsap'
export default {
    props: ['propArray', 'show'],
    watch: {
        show(newVal, oldVal) {
            if (newVal) {
                this.animateHeader(80);
            } else {
                this.animateHeader(0)
            }
        }
    },
    mounted() {

    },
    methods: {
        animateHeader(amount) {
            let hidden_header = document.getElementById('hidden_header');
            gsap.to(hidden_header, {
                height: amount
            });
        }
    }

}

</script>

<style scoped>
.header-container {
    @apply fixed top-0 px-20 flex justify-between w-full bg-white z-10 items-center text-gray-500 h-[0px] overflow-hidden
}

.header-container li {
    @apply transition ease-in-out cursor-pointer
}

.header-container li:hover {
    @apply transition-all text-[var(--theme-blue)] duration-500
}

.header-container ul {
    @apply flex uppercase gap-12 font-bold text-sm
}

.header-container img {
    @apply w-[140px]
}

.header-container nav {
    @apply hidden lg:block
}

.mobile-menu {
    @apply lg:hidden text-xl
}
</style>