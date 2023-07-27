export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    name: 'AboutPage',
    path: '/about-us',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    name: 'TaskList',
    path: '/tasks',
    component: () => import('@/views/TaskList.vue')
  },
  {
    name: 'TaskPage',
    path: '/task/:id',
    props: true,
    component: () => import('@/views/TaskPage.vue')
  },
  {
    name: 'UserPage',
    path: '/users',
    component: () => import('@/views/UserPage.vue'),
    redirect: () => {
      return { name: 'UserList' }
    },
    children: [
      {
        name: 'UserList',
        path: '',
        component: () => import('@/views/UserList.vue')
      },
      {
        name: 'UserAdd',
        path: 'add',
        component: () => import('@/views/UserAdd.vue')
      },
      {
        name:'UserId',
        path:':id',
        props: true,
        component:()=>import('@/views/UserIdPage.vue')
      }
    ]
  },
  {
    name:'LessonPage',
    path:'/lessons',
    component: ()=> import('@/views/LessonsPage.vue'),
    redirect:()=>{
      return{name:'LessonsList'}
    },
    children:[
      {
        name:'LessonsList',
        path:'',
        component:()=>import('@/views/LessonsList.vue')
      },
      {
        name:'LessonAdd',
        path:"add",
        component:()=>import('@/views/LessonAdd.vue')
      },
      {
        name:'LessonId',
        path:':id',
        props: true,
        component:()=>import('@/views/LessonIdPage.vue')
      }
    ]
  },
  {
    name: 'AboutPage',
    path: '/about',
    component: () => import('@/views/AboutPage.vue'),
    children: [
      {
        name: 'AboutUs',
        path: 'us',
        component: () => import('@/views/about/UsPage.vue')
      },
      {
        name: 'AboutYou',
        path: 'you',
        component: () => import('@/views/about/YouPage.vue')
      },
      {
        name: 'AboutWe',
        path: 'we',
        component: () => import('@/views/about/WePage.vue')
      }
    ]
  }
]
