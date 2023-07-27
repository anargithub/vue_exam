<template>
    <div class="usercard">
      <router-link :to="{name:'LessonId', params:{id: props.lessonId}}"><h3>{{ props.title }}</h3></router-link>
      
      <h4>{{ props.name }} {{ props.surname }} {{ props.father }}</h4>
      <p>{{ props.time }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    name: string
    surname: string
    father: string
    title: string
    time: string
    lessonId: number
  }
  const props = defineProps<Props>()
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
  