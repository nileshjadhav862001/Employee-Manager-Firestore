<template>
    <div class="login-form">
        <h2>{{ title }}</h2>
        <div class="navbar navbar-default">
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" id="logout">Log Out</a></li>
                </ul>
            </div>
        </div>
        <br>
        <div class="container">

            <form name="login_form" id="login_form" method="post" action="#" enctype="multipart/form-data">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="login_email" v-model="email" id="login_email" class="form-control"
                            placeholder="Enter your email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="login_password" v-model="password" id="login_password"
                            class="form-control" placeholder="Enter your password">
                    </div>
                    <button type="button" id="login" @click="login" name="login" class="btn btn-success">Login</button>
                </div><!-- end col -->

            </form>
        </div><!--  end row -->
    </div>
    <!-- <center>Developed by <a href="https://shinerweb.com/">Shinerweb</a></center> -->
    <!-- </div> -->
</template>

<script>
import { auth } from '../firebase'
export default {
    name: 'LoginForm',
    data() {
        return {
            title: 'Login Form',
            data: [],
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            auth.signInWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                    // User is signed in
                    console.log('User logged in:', userCredential.user);
                    this.$router.replace('/')
                    alert("Login Successfully")
                })
                .catch(error => {
                    alert('Login error:', error.message);
                });

        }
    }

}
</script>