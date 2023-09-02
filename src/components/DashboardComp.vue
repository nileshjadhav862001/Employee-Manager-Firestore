<template>
    <div id="dashboard">
        <div class="container-sm">
            <div class="">
                <h4>Employees</h4>
            </div>
        </div>
        <div class="table1">
            <table class="table table-striped">
                <thead class="table table-primary">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody v-for="employee in employees" :key="employee.employee_id">
                    <tr>
                        <th scope="row">{{ employee.employee_id }}</th>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.dept }}</td>
                        <td>{{ employee.position }}</td>
                        <td> 
                            <router-link class="" :to="{ name: 'view-employee', params: { employee_id: employee.employee_id } }">
                                <button class="btn btn-secondary">view</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="">
            <router-link to="/new" class="">
                <button class="btn btn-primary">Add Employee</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { db } from '../firebase.js'
export default {
    name: 'DashboardComp',
    data() {
        return {
            // employees: [],
            // unsubscribe: null,
            // emp: {
            //     employee_id: '',
            //     name: '',
            //     dept: '',
            //     position: '',
            // },
        }
    },
    unmounted() {
        this.unsubscribe()
    },
    created() {
        console.log(db)
        this.fetchEmployee()
    },
    methods: {
        fetchEmployee() {
            this.unsubscribe = db.collection("employees").orderBy('employee_id').onSnapshot((querySnapshot) => {
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
    },
}
</script>

<style scoped>
.id {
    color: red;
}

.chip {
    color: black;
    background-color: rgb(183, 236, 148);
}
.table{
    border: 2px;
}
</style>
