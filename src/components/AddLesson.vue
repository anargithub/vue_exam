<template>
  <div>
    <input type="text" name="title" id="title" placeholder="title" v-model="lesson.title" /><br />
    <select name="teacher" id="teacher" v-model="fullname">
      <option value="None">None</option></select
    ><br />
    <input type="text" name="time" id="time" placeholder="14:00" v-model="lesson.time" /><br />
    <input
      type="text"
      name="discription"
      id="discription"
      placeholder="discription"
      v-model="lesson.discription"
    /><br />
    <form id="students">
      <checkbox-student
        v-for="student in students"
        :key="student.id"
        :id="student.id"
        :name="student.name"
      ></checkbox-student>
    </form>
    <button @click="lessonAddData(lesson)">Сохранить</button><br />
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Lesson } from '@/types/lesson'
import CheckboxStudent from '@/components/CheckboxStudent.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const fullname = ref(``)
const lesson = ref<Lesson>({
  name: ``,
  surname: ``,
  father: ``,
  title: '',
  discription: '',
  time: ''
})
const teachers: any = []
const students: any = ref([])
onMounted(() => {
  const users = JSON.parse(localStorage.getItem('UsersData') as string)
  users?.forEach((user: any) => {
    if (user.role == 'teacher') {
      let teacher = {
        id: user.id,
        fullName: `${user.name} ${user.surname} ${user.father}`
      }
      teachers.push(teacher)
    } else if (user.role.toLowerCase() == 'student') {
      let student = {
        id: user.id,
        name: `${user.name}`
      }
      students.value.push(student)
    }
  })
  let select = document.querySelector(`#teacher`)
  for (let teacher of teachers) {
    let option = document.createElement('option')
    option.setAttribute('value', teacher.fullName)
    option.innerHTML = `${teacher.fullName}`
    select?.appendChild(option)
  }
})
function lessonAddData(obj: any) {
  let lessons = JSON.parse(localStorage.getItem('LessonsData') as string)
  let currentName = fullname.value.split(' ')
  obj.name = currentName[0]
  obj.surname = currentName[1]
  obj.father = currentName[2]
  const form = document.querySelector('#students')
  const body = Object.fromEntries(new FormData(form as HTMLFormElement).entries())
  let newLesson = Object.assign({ id: new Date().getTime() } as Lesson, obj, {students:body})

  console.log(lessons, newLesson)
  
  lessons.push(newLesson)
  localStorage.setItem('LessonsData', JSON.stringify(lessons))
  router.push({name:'LessonId', params:{id:newLesson.id}})
}
function cancel() {
  router.push({name:'LessonPage'})
}
</script>

<style scoped>
div{
  border: 1px solid black;
  background-color: rgb(247, 245, 245);
  border-radius: 15px;
  padding: 20px;
  margin-top: 40px;
}</style>
