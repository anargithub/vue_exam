<template>
  <div>
    <div class="divUsers">
      <button @click="addrelocate()" id="userAdd">Add User</button>
    </div>
    <user-card
      v-for="user in users"
      :key="user.id"
      :user-id="user.id"
      :name="user.name"
      :surname="user.surname"
      :father="user.father"
      :role="user.role"
    ></user-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserCard from '@/components/UserCard.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const data = [
  {
    id: 1,
    name: 'Name',
    surname: 'Surname',
    father: 'Father',
    role: 'student',
  }
]
onMounted(() => {
    if(!localStorage.getItem('UsersData')){
        localStorage.setItem('UsersData', JSON.stringify(data))
    }
})
const users = ref(JSON.parse(localStorage.getItem('UsersData') as string))
function addrelocate() {
  router.push({name:'UserAdd'})
}
</script>

<style scoped>
.divUsers {
  border: 1px solid black;
  background-color: rgb(247, 245, 245);
  border-radius: 15px;
  padding: 20px;
  margin-top: 40px;
}
</style>
