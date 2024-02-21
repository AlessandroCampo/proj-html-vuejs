<template>
    <div class="table-container">
        <table>
            <tr>
                <th> Save up to 40%
                    by paying weekly </th>
                <th v-for="(plan, index) in propArray" :key="index" :class="index === activePlan ? 'active' : ''"
                    @click="() => { activePlan = index }">
                    <img :src="plan.iconPath" alt="">
                    <div>{{ plan.name }}</div>
                    <div>{{ plan.price }} $ </div>
                </th>
            </tr>
            <tr v-for="(value, key, index) in propArray[0].menu_voices" :key="index">
                <td>{{ key }}</td>
                <td v-for="(plan, index) in propArray" :key="index">
                    <i v-if="typeof plan.menu_voices[key] === 'boolean'" class="fa-solid"
                        :class="plan.menu_voices[key] ? 'fa-check text-[var(--theme-blue)]' : 'fa-xmark text-red-400'"></i>
                    <span v-else> {{ plan.menu_voices[key] }} </span>
                </td>
            </tr>
            <tr>
                <td style="border: 0;"></td>
                <td v-for="(plan, index) in propArray" :key="index">
                    <button class="button" :class="index === activePlan ? 'activeButton' : ''">
                        GET IT NOW
                    </button>
                </td>
            </tr>
        </table>
    </div>

    <div class="mobile-pricing-container">
        <div class="mobile-plan" v-for="(plan, index) in propArray " :key="index">
            <img :src="plan.iconPath" alt="">
            <div class="info">
                <div>{{ plan.name }}</div>
                <div>{{ plan.price }} $ </div>
            </div>

            <div v-for="(voice, key, index) in plan.menu_voices" class="mobile-voice-list">
                <span> {{ key }} :</span> <i v-if="typeof plan.menu_voices[key] === 'boolean'" class="fa-solid"
                    :class="plan.menu_voices[key] ? 'fa-check text-[var(--theme-blue)]' : 'fa-xmark text-red-400'"></i>
                <span v-else> {{ plan.menu_voices[key] }} </span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activePlan: 0
        }
    },
    props: ['propArray']
}
</script>

<style scoped>
.table-container {
    @apply mt-12 w-3/4 mx-auto px-6 hidden lg:block
}

.table-container table {
    @apply w-full text-center
}

.table-container table th:first-child {
    @apply text-gray-800 text-2xl flex justify-end pe-16
}



.table-container table tr {
    @apply flex
}

.table-container table th,
.table-container table td {
    @apply w-1/4 border-x border-b
}

.table-container table td {
    @apply text-xl text-gray-500 font-semibold px-6 py-4
}

.table-container table tr th {
    @apply flex flex-col gap-5 items-center py-8 text-xl
}

i {
    @apply text-2xl font-semibold
}

button {
    @apply w-2/3 bg-white
}

button.activeButton {
    @apply bg-[var(--theme-blue)] text-white
}

button:hover {
    @apply bg-[var(--theme-blue)] text-white
}


th {
    @apply border-t-2 border-t-cyan-100 cursor-pointer
}

th.active {
    @apply border-t-4 border-t-[var(--theme-blue)]
}

.mobile-plan {
    @apply lg:hidden flex flex-col items-center my-12
}

.mobile-plan .info {
    @apply text-gray-900 font-bold flex flex-col items-center gap-1 mb-7
}

.mobile-plan .info div:first-child {
    @apply text-2xl
}

.mobile-plan .info div:nth-child(2) {
    @apply text-xl
}

.mobile-plan .mobile-voice-list {
    @apply text-xl
}

.mobile-voice-list {
    @apply my-2 flex items-center gap-3
}
</style>