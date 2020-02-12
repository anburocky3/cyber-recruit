<template>
  <div>
    <Navbar />
    <div class="container my-5">
      <h1>Secret Page</h1>
      <p>Alibaba Gogai!</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#id Name</th>
            <th class="text-center">Role</th>
            <th>Email</th>
            <th>Mobile</th>
            <th width="200">#Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td scope="row">{{ '#'+user.id  + ' - ' + user.name }}</td>
            <td class="text-center">
                <b-badge variant="success" v-if="user.role == 'S'">Super</b-badge>
                <b-badge variant="primary" v-if="user.role == 'A'">Admin</b-badge>
                <b-badge variant="info" v-if="user.role == 'N'">Normal</b-badge>

            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.mobile }}</td>
            <td>
              <button
                class="btn btn-sm btn-primary"
                v-b-modal="'modal-1'"
                @click="assignUser(user)"
              >
                View User
              </button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <!-- <tr>
            <td scope="row">Rocky</td>
            <td>rocky@gmail.com</td>
            <td>9874564125</td>
            <td>
              <button class="btn btn-sm btn-primary">View User</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
    <b-modal id="modal-1" title="User Information">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name:</th>
            <td>{{ user.name }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Email</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>Mobile</th>
            <td>{{ user.mobile }}</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  middleware: ['auth-admin'],
  components: {
    Navbar
  },
  head() {
    return {
      title: 'Manage Users'
    }
  },
  data() {
    return {
      users: [],
      user: []
    }
  },
  created() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      let response = await this.$axios.get('users')
      this.users = response.data
      //   console.log(response.data)
    },
    assignUser(user) {
      this.user = user
    }
  }
}
</script>

<style></style>
