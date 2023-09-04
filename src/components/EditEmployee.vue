<template>
    <div id="edit-employee">
        <form @submit.prevent="handleUpdateEmployee" class="col s12">
            <div class="row">
                <div class="mb-3">
                    <input disabled type="text" v-model="employeeObject.employee_id" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="employeeObject.name" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="employeeObject.dept" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="employeeObject.position" required>
                </div>
            </div>
            <button class="btn btn-success">Update</button>
            <router-link to="/" class="btn btn-secondary">Back</router-link>
        </form>
    </div>
</template>
<script>
import { useCounterStore } from '../store/index'
import { mapActions, mapState } from 'pinia'
import { db } from '../firebase'
export default {
    name: 'EditEmployee',
    data() {
        return {
            // employeeObject:{
            //     employee_id: null,
            //     name: null,
            //     dept: null,
            //     position: null,
            // }
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log(to.params.employee_id)
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                next(vm => {
                    vm.employeeObject.employee_id = doc.data().employee_id
                    vm.employeeObject.name = doc.data().name
                    vm.employeeObject.dept = doc.data().dept
                    vm.employeeObject.position = doc.data().position
                    // console.log(vm.employee_id)
                    // console.log(vm.name)
                })
            })
        })
    },
    methods: {
        ...mapActions(useCounterStore, ['updateEmployee']),
        // fetchData() {
        //     db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             this.employee_id = doc.data().employee_id
        //             this.name = doc.data().name
        //             this.dept = doc.data().dept
        //             this.position = doc.data().position
        //         })
        //     })
        // },   
        handleUpdateEmployee(){
            console.log(this.$route.params.employee_id)
            this.updateEmployee(this.$route.params.employee_id)
        },
        // updateEmployee() {
        //     db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
        //         .then((querySnapshot) => {
        //             querySnapshot.forEach((doc) => {
        //                 doc.ref.update({
        //                     employee_id: this.employee_id,
        //                     name: this.name,
        //                     dept: this.dept,
        //                     position: this.position, 
        //                 })
        //             })
        //         }).then(() => {
        //             this.$router.push({ name: 'view-employee', params: { empployee_id: this.employee_id } })
        //         })
        // }
    },
    computed: {
        ...mapState(useCounterStore, ['employeeObject'])
    }

}
</script>