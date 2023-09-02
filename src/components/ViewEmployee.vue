<template>
    <div id="view-employee">
        <div class="table">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{{ employee_id }}</th>
                        <td>{{ name }}</td>
                        <td>{{ dept }}</td>
                        <td>{{ position }}</td>

                    </tr>
                </tbody>
            </table>
            <router-link to="/" class="btn btn-primary">Back</router-link>
            <button @click="deletEmployee(employee_id)" class="btn btn-secondary">Delete</button>
        </div>
        <router-link :to="{ name: 'edit-employee', params: { employee_id: employee_id } }"
            class="btn-floating btn-large red">
            <button class="btn btn-dark">edit</button>
        </router-link>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../store/index'
import { db } from '../firebase'
export default {
    name: 'ViewEmployee',
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
                })
            })
        })
    },
    watch: {
        // '$route': 'fetchData'
    },
    methods: {
        ...mapActions(useCounterStore, ['deletEmployee']),
        // fetchEmployeeDataFromStore() {
        //     const employee_id = this.$route.params.employee_id;
        //     this.fetchData(employee_id);
        // },
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
        // deletEmployee() {
        //     if (confirm('Are you sure')) {
        //         db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
        //             querySnapshot.forEach((doc) => {
        //                 console.log(doc)
        //                 doc.ref.delete()
        //                 this.$router.push('/')
        //             })
        //         })
        //     }

        // }
    },
    computed: {
        // ...mapState(useCounterStore, ['employee_id', 'name', 'dept', 'position'])
    }
}
</script>