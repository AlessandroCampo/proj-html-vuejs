<template>
    <div class="header-container">
        <img src="../../assets/img/logo-light.png" alt="">
        <nav>
            <ul>
                <li v-for="(voice, index) in propArray" :key=index @mouseover="showDropdown(voice)"
                    @mouseleave="hideDropdown(voice)"> {{ voice }}
                    <DropdownMenu class="COURSES dropdown" v-if="voice === 'COURSES'" :propArray="store.courses">
                    </DropdownMenu>
                    <DropdownMenu class="INSTRUCTORS dropdown" v-if="voice === 'INSTRUCTORS'" :propArray="store.teachers">
                    </DropdownMenu>
                    <DropdownMenu class="PAGES dropdown" v-if="voice === 'PAGES'" :propArray="store.pages">
                    </DropdownMenu>
                </li>
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

import DropdownMenu from '../t2/DropdownMenu.vue'
import { store } from '../../store'


export default {
    data() {
        return {
            store,
            cart_items: 0
        }
    },
    props: ['propArray'],
    components: { DropdownMenu },
    methods: {
        showDropdown(voice) {
            let dropdown = document.querySelector(`.${voice}`)
            if (dropdown) {
                dropdown.style.display = "block"
            }

        },
        hideDropdown(voice) {
            let dropdown = document.querySelector(`.${voice}`)
            if (dropdown) {
                dropdown.style.display = "none"
            }

        }
    }
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
    @apply w-[150px] cursor-pointer xl:w-[150px] md:w-[250px]
}

.header-container .icon-container {
    @apply flex items-center gap-5 text-[1.1em] mt-[3px]
}

.cart {
    @apply relative
}

nav {
    @apply hidden xl:flex cursor-pointer
}

.dropdown {
    @apply hidden font-semibold capitalize
}

li {
    @apply h-[50px] flex items-center
}

.mobile-menu {
    @apply block xl:hidden text-2xl cursor-pointer md:text-4xl
}
</style>