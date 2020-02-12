<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand to="/">Cyber-Recruit</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/" exact>Home</b-nav-item>
              <template v-if="!$auth.loggedIn">
                <b-nav-item to="login">Login</b-nav-item>
                <b-nav-item to="register">Register</b-nav-item>
              </template>
              <b-nav-item to="admin" v-if="$auth.user && $auth.user.role == 'S'">Admin Panel</b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown v-if="$auth.loggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                Hello {{ $auth.user.name }}
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item @click="$auth.logout()"
                >Sign Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
