<template>
    <div class="header-container" id="hidden_header">
        <img src="../../assets/img/logo-colored.png" alt="">
        <nav>
            <ul>
                <li v-for="(voice, index) in propArray" :key="index" @mouseover="showDropdown(voice)"
                    @mouseleave="hideDropdown(voice)"> {{ voice }}
                    <DropdownMenu class="hidden-COURSES hidden-dropdown" v-if="voice === 'COURSES'"
                        :propArray="store.courses">
                    </DropdownMenu>
                    <DropdownMenu class="hidden-INSTRUCTORS hidden-dropdown" v-if="voice === 'INSTRUCTORS'"
                        :propArray="store.teachers">
                    </DropdownMenu>
                    <DropdownMenu class="hidden-PAGES hidden-dropdown" v-if="voice === 'PAGES'" :propArray="store.pages">
                    </DropdownMenu>

                </li>
            </ul>
        </nav>
        <i class="fa-solid fa-bars mobile-menu"></i>
    </div>
</template>

<script>

import gsap from 'gsap'
import DropdownMenu from '../t2/DropdownMenu.vue'
import { store } from '../../store'



export default {
    data() {
        return {
            store
        }
    },
    props: ['propArray', 'show'],
    components: { DropdownMenu },
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
            amount === 80 ? hidden_header.style.overflow = "visible" : hidden_header.style.overflow = "hidden"
            gsap.to(hidden_header, {
                height: amount
            });
        },
        showDropdown(voice) {

            let dropdown = document.querySelector(`.hidden-${voice}`)

            if (dropdown) {
                dropdown.style.display = "block"
            }
            console.log(dropdown)

        },
        hideDropdown(voice) {
            let dropdown = document.querySelector(`.hidden-${voice}`)
            if (dropdown) {
                dropdown.style.display = "none"
            }

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

.hidden-dropdown {
    @apply hidden font-semibold capitalize
}

li {
    @apply h-[80px] flex items-center
}

.mobile-menu {
    @apply block xl:hidden text-2xl cursor-pointer md:text-4xl
}
</style>