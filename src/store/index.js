import { defineStore } from 'pinia'
import { db } from '@/firebase'
import router from '../router/index'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    employees: [],
    emp: {
      employee_id: '',
      name: '',
      dept: '',
      position: '',
    },
    employee_id: null,
    name: null,
    dept: null,
    position: null,
    employeeObject: {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    }

  }),
  getters: {

  },
  actions: {
    fetchEmployee() {
      console.log("thids is fetch employee function")
      db.collection("employees").orderBy('employee_id').onSnapshot((querySnapshot) => {
        this.employees = []
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position

          }
          this.employees.push(data)
        });

      });

    },
    //view-employee
    deletEmployee(employee_id) {
      if (confirm('Are you sure')) {
        db.collection('employees').where('employee_id', '==', employee_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc)
            doc.ref.delete()
            router.push('/')
          })
        })
      }
    },
    //new-employee
    saveEmployee() {
      db.collection('employees').add(this.emp).then((docRef) => {
        console.log(docRef)
        this.emp.employee_id = ''
        this.emp.name = ''
        this.emp.dept = ''
        this.emp.position = ''
        // this.$router.push('/')
      })
        .catch(error => {
          console.error('Error adding employee:', error)
        })
    },
    fetchData() {
      console.log("this is fetch data function")
      db.collection('employees').where('employee_id', '==', router.params.employee_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.employee_id = doc.data().employee_id
          this.name = doc.data().name
          this.dept = doc.data().dept
          this.position = doc.data().position
        })
      })
    },
    updateEmployee(employee_id) {
      console.log("enter in update function from store")
      db.collection('employees').where('employee_id', '==', employee_id ).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              employee_id: this.employeeObject.employee_id,
              name: this.employeeObject.name,
              dept: this.employeeObject.dept,
              position: this.employeeObject.position,
            })
          })
        }).then(() => {
          router.push({ name: 'view-employee', params: { empployee_id: this.employee_id } })
        })
    }
  },
})
