<template>
  <div class="usercard">
    <router-link :to="{name:'UserId', params:{id: props.userId}}"
      ><h3>{{ props.name }} {{ props.surname }} {{ props.father }}</h3></router-link
    >
    <p>{{ props.role }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  surname: string
  father: string
  role: string
  userId: number
}
const props = defineProps<Props>()
interface Emits {
  (e: 'openUser', userId: any): void
}
const emits = defineEmits<Emits>()
</script>

<style scoped>
.usercard {
  border: 1px solid teal;
  background-color: rgb(247, 245, 245);
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  padding: 10px;
}
</style>
