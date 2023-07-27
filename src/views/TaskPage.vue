<template>
  <div>
    <h1>Task page</h1>
    <table>
        <tbody>
            <tr>
                <td>ID</td>
                <td>{{props.id}}</td>
            </tr>
            <tr>
                <td>Title</td>
                <td>{{task.title}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import type { Task } from '@/types/task'

interface Props {
  id: number
}
const props = defineProps<Props>()

const task = ref<Task>({} as Task)

onMounted(async () => {
  const commentQuery = await fetch('https://jsonplaceholder.typicode.com/comments/1')
  const comments = await commentQuery.json()
  comments.forEach((comment: any) => {
    tasks.value.push({
      id: comment.id,
      title: comment.name,
      content: comment.body
    })
  })
})
</script>

<style scoped>
</style>