<template>
    <nav class="navbar bg-body-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <!-- <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> -->
                Employee Manager
            </a>
            <router-link to="/">Home</router-link>
            <router-link to="/loginform">Log In</router-link>
            <router-link to="/registerform">Sign up</router-link>
            <button @click="signOut">Sign out</button>
        </div>
    </nav>
    <!-- <nav class="navbar">
        <div class="nav-wrapper green">
            <div class="container">
                <router-link  to="/" class="brand-logo">Employee Manager</router-link>
            </div>

        </div>
    </nav> -->
</template>
<script>
import { auth } from '../firebase'
export default {
    name: 'NavbarComp',
    data() {
        return {

        }
    },
    methods: {
        signOut() {
            auth.signOut()
                .then(() => {
                    // Sign-out successful.
                    console.log('User signed out');
                    this.$router.push('/loginform')
                })
                .catch((error) => {
                    // An error occurred while signing out.
                    console.error(error);
                });
        },
        
    }
}
</script>
