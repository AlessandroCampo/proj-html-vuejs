<template>
    <div class="menu-container">
        <ul>
            <li v-for="(voice, index) in propsMenuVoices" :key="index" @click="() => { activeVoice = index }"
                :class="index == activeVoice ? 'active-li' : ''">
                {{ voice.name }}
            </li>
        </ul>
        <div class="menu-info">
            <h2>
                {{ propsMenuVoices[activeVoice].name }}
            </h2>
            <p>
                {{ propsMenuVoices[activeVoice].text }}
            </p>
            <div class="menu-info-bottom">
                <ul>
                    <li v-for="(el, index) in propsMenuVoices[activeVoice].checkList">
                        <i class="fa-solid fa-check"></i>
                        <span>
                            {{ propsMenuVoices[activeVoice].checkList[index] }}
                        </span>
                    </li>
                </ul>
                <img :src="propsMenuVoices[activeVoice].iconPath" alt="">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeVoice: 0
        }
    },
    props: ['propsMenuVoices']
}
</script>

<style scoped>
.menu-container {
    @apply mx-auto w-2/3 text-gray-500 flex gap-10 py-12 flex-col lg:flex-row
}

.menu-container>ul {
    @apply border-b-2 border-gray-200 lg:w-1/4 w-full
}

.menu-container>ul li {
    @apply border border-gray-200 py-5 ps-6 border-b-0 text-gray-500 h-1/6 font-semibold text-lg
}

.menu-container>ul li.active-li {
    color: var(--theme-blue);
    cursor: pointer;
    border-left: 6px solid var(--theme-blue);
}

.menu-container>ul li:hover {
    color: var(--theme-blue);
    cursor: pointer;
    border-left: 6px solid var(--theme-blue);
}

.menu-container>ul li {
    transition: border-left-width 0.3s ease, color 0.3s ease;
}

.menu-container h2 {
    @apply lg:text-4xl font-semibold text-gray-700 text-2xl
}

.fa-check {
    @apply text-[var(--theme-blue)] font-semibold me-2
}

.menu-info {
    @apply lg:w-4/6 w-full flex flex-col gap-8 lg:px-8 px-2 text-lg text-gray-500 py-6 max-h-96
}

.menu-info-bottom {
    @apply flex gap-12 justify-between flex-col lg:flex-row
}

.menu-info-bottom ul {
    @apply mt-7 flex flex-col gap-4
}

.menu-info-bottom img {
    @apply lg:w-1/4 lg:translate-y-16 w-2/3 mx-auto
}
</style>