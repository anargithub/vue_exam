<template>
    <div>
        <h1>Lessons Page</h1>
        <router-link :to="{ name: 'HomePage'}">back to home page</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()

</script>

<style scoped>
</style>