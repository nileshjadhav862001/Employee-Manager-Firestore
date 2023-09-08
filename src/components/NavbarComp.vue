<template>
    <nav class="navbar bg-body-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Employee Manager
            </a>
            <router-link to="/">Home</router-link>
            <router-link to="/loginform">Sign In</router-link>
            <router-link to="/registerform">Sign up</router-link>
            <button @click="signOut">Sign out</button>
        </div>
    </nav>
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