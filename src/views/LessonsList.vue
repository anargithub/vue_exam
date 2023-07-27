<template>
    <div>
      <div class="divLessons">
        <button @click="addrelocate()" id="lessonAdd">Add Lesson</button>
      </div>
      <lesson-card v-for="lesson in lessons"
      :key="lesson.id"
      :lesson-id="lesson.id"
      :name="lesson.name"
      :surname="lesson.surname"
      :father="lesson.father"
      :title="lesson.title"
      :time="lesson.time"
      ></lesson-card>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted } from 'vue'
import LessonCard from '@/components/LessonCard.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const data = [
  {
    id: 1,
    name: 'Name',
    surname: 'Surname',
    father: 'Father',
    title: 'Title',
    time: '14:00'
  }
]
onMounted(() => {
    if(!localStorage.getItem('LessonsData')){
        localStorage.setItem('LessonsData', JSON.stringify(data))
    }
})
const lessons = ref(JSON.parse(localStorage.getItem('LessonsData') as string))

  function addrelocate() {

    router.push({name:'LessonAdd'})
  }
  </script>
  
  <style scoped>
  .divLessons {
    border: 1px solid black;
    background-color: rgb(247, 245, 245);
    border-radius: 15px;
    padding: 20px;
    margin-top: 40px;
  }
  </style>
  