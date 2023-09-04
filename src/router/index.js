import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'
// import firebase from 'firebase'

import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
import DashboardComp from '../components/DashboardComp.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import ViewEmployee from '../components/ViewEmployee.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  mode : 'history',
  routes: [
    {
      path: '/loginform',
      name: 'LoginForm',
      component: LoginForm,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/registerform',
      name: 'RegisterForm',
      component: RegisterForm,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardComp,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requireAuth: true
      }
    },
  ]
})


router.beforeEach((to, from, next) => {
  const authenticatedUser = auth.currentUser
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !authenticatedUser) {
    return('/loginform')
  }
  else {
    next()
  }

})

export default router