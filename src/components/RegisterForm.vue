<template>
    <div class="register-form">
        <h2>{{ title }}</h2>
        <div class="container">

            <form name="registration_form" id="registration_form">
                <div class="row">

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="email">First Name</label>
                            <input type="text" name="email" id="email" v-model="firstName" class="form-control"
                                placeholder="Enter your First Name">
                        </div>
                        <div class="form-group">
                            <label for="email">Last Name</label>
                            <input type="text" name="email" id="email" v-model="lastName" class="form-control"
                                placeholder="Enter your last Name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" v-model="email" class="form-control"
                                placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" v-model="password" id="password" class="form-control"
                                placeholder="Enter your password">
                        </div>
                        <button type="button" id="register" @click="submitData" name="register"
                            class="btn btn-success">Register Now</button>
                    </div><!-- end col -->
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { auth } from '../firebase'
export default {
    name: 'RegisterForm',
    data() {
        return {
            title: 'Register Form',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        submitData() {
            auth.createUserWithEmailAndPassword(this.email, this.password).then(
                (userCredential) => {
                    console.log('User registered:', userCredential.user);
                    alert('Registration successfull')
                    this.$router.replace('loginform')
                },
            )
                .catch(error => {
                    alert('Sign-up error:', error.message);
                });
        }
    }
}
</script>
