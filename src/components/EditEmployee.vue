<template>
    <div id="edit-employee">
        <form @submit.prevent="updateEmployee" class="col s12">
            <div class="row">
                <div class="mb-3">
                    <input disabled type="text" v-model="employee_id" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="name" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="dept" required>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="position" required>
                </div>
            </div>
            <button class="btn btn-success">Update</button>
            <router-link to="/" class="btn btn-secondary">Back</router-link>
        </form>
    </div>
</template>
<script>
// import { useCounterStore } from '../store/index'
// import { mapActions } from 'pinia'
import { db } from '../firebase'
export default {
    name: 'EditEmployee',
    data() {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                next(vm => {
                    vm.employee_id = doc.data().employee_id
                    vm.name = doc.data().name
                    vm.dept = doc.data().dept
                    vm.position = doc.data().position
                    console.log(vm.employee_id)
                    console.log(vm.name)
                })
            })
        })
    },
    methods: {
        // ...mapActions(useCounterStore, ['fetchData', 'updateEmployee']),
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
        updateEmployee() {
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            employee_id: this.employee_id,
                            name: this.name,
                            dept: this.dept,
                            position: this.position, 
                        })
                    })
                }).then(() => {
                    this.$router.push({ name: 'view-employee', params: { empployee_id: this.employee_id } })
                })
        }
    },
    computed: {
        // ...mapState(useCounterStore, [])
    }

}
</script>