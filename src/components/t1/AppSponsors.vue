<template>
    <div class="sponsor-container">
        <img :src="sponsor.logoPath" alt="" v-for="(sponsor, index) in propArray" :key="index"
            :style="{ flexBasis: `calc(${100 / propArray.length}% - 1em)` }">
    </div>
</template>

<script>
export default {
    props: ['propArray']
}
</script>

<style 
 scoped>
 div.sponsor-container {
     @apply w-3/4 flex gap-4 mx-auto overflow-scroll
 }

 div.sponsor-container img:hover {
     @apply opacity-45 cursor-pointer
 }
</style>