<template>
    <div>
        <label :for="String(props.id)">{{ props.name }}</label>
        <input type="checkbox" :name="String(props.name)" :id="String(props.id)">
    </div>
</template>

<script setup lang="ts">
interface Props {
    id: number
    name: string
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>