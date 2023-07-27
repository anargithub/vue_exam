<template>
    <div>
        <tr>
            <td>{{ props.name }}</td>
        </tr>
    </div>
</template>

<script setup lang="ts">
interface Props{
    name:string
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>