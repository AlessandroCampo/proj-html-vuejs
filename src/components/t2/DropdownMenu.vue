<template>
    <div class="drop-down-menu">
        <ul>
            <li v-for="(element, index) in propArray" @click="store.scrollToSection(element.href)" :key="index">

                {{ element.name }}


            </li>
        </ul>
    </div>
</template>

<script>

import { store } from '../../store'
export default {
    data() {
        return {
            store
        }
    },
    props: ['propArray']
}
</script>

<style  scoped>
.drop-down-menu {
    @apply bg-white text-gray-300 p-4 pe-10 absolute w-[220px] top-20
}

.drop-down-menu ul {
    @apply flex flex-col gap-3
}

.drop-down-menu li:hover {
    @apply text-[var(--theme-blue)]
}
</style>