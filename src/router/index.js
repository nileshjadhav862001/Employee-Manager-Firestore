import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'

import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
import DashboardComp from '../components/DashboardComp.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import ViewEmployee from '../components/ViewEmployee.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path: '/loginform',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/registerform',
      name: 'RegisterForm',
      component: RegisterForm
    },
    {
      path: '/',
      name:'dashboard',
      component: DashboardComp,
      // meta:{
      //   requireAuth : true
      // }
    },
    {
      path: '/new',
      name:'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name:'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name:'view-employee',
      component: ViewEmployee
    },
  ]  
})

// router.beforeEach((to, from, next) => {
//     const authenticatedUser = null
//     const requireAuth = to.matched.some(record => record.meta.requireAuth);

//     if(requireAuth && !authenticatedUser){
//         next('loginform')
//     }
//     else{
//         next()
//     }

// })

export default router