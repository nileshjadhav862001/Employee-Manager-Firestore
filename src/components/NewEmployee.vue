<template>
    <div id="new-employee">
        <h1>New Employee</h1>
        <form @submit.prevent="handleSaveEmployee" class="">
            <div class="">
                <div class="mb-3">
                    <label>Employee Id</label>
                    <input type="text" class="form-control" v-model="emp.employee_id" required>
                </div>
            </div>
            <div class="">
                <div class="mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="emp.name" required>
                </div>
            </div>
            <div class="mb-3">
                <div class="mb-3">
                    <label>Dept</label>
                    <input type="text" class="form-control" v-model="emp.dept" required>
                </div>
            </div>
            <div class="mb-3">
                <div class="mb-3">
                    <label>Position</label>
                    <input type="text" class="form-control" v-model="emp.position" required>
                </div>
            </div>
            <button type="submit" class="btn btn-success">ADD</button>
            <router-link to="/" class="btn btn-secondary" >Cancel</router-link>
        </form>
    </div>    
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../store/index'
// import { db } from '../firebase'
export default{
    name:'NewEmployee',
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(useCounterStore,['saveEmployee']),
        handleSaveEmployee(){
            this.saveEmployee()
            this.$router.push('/')
        } 
    },
    computed:{
        ...mapState(useCounterStore,['emp'])
    }
}
</script>