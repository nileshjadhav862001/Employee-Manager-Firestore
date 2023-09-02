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
export default {
    name: 'NavbarComp',
    data() {
        return {

        }
    }
}
</script>
