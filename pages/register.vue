<template>
  <div>
    <Navbar />
    <div class="col-sm-6 offset-sm-3 my-5">
      <div class="card">
        <div class="card-header bg-dark text-white">HR Registrations</div>
        <div class="card-body">
          <form action="" @submit.prevent="registerUser(form)">
            <div class="form-row form-group">
              <div class="col">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  placeholder="Your Name"
                />
              </div>
              <div class="col">
                <label for="role">Role</label>
                <select name="role" id="role" class="form-control" v-model="form.role">
                  <option value="">--Select Role</option>
                  <option value="S">Super</option>
                  <option value="A">Admin</option>
                  <option value="N" selected>Normal</option>
                </select>
              </div>
            </div>
            <div class="form-row form-group">
              <div class="col">
                <label for="mobile">Mobile</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.mobile"
                  placeholder="9876541232"
                />
              </div>
              <div class="col">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.email"
                  placeholder="hello@awesome.com"
                />
              </div>
            </div>

            <div class="form-row form-group">
              <div class="col-6">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="form.password"
                  class="form-control"
                  placeholder="********"
                />
              </div>
              <div class="col-6">
                <label for="c_password">Confirm Password</label>
                <input
                  type="password"
                  v-model="form.c_password"
                  class="form-control"
                  placeholder="********"
                />
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Register and Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      form: {
        name: 'Anbu',
        mobile: '8939738801',
        email: 'anbuceo@gmail.com',
        role: 'S',
        password: '123456789',
        c_password: '123456789'
      },
      error: null
    }
  },
  methods: {
    async registerUser(userInfo) {
      //Axios POst
      await this.$axios.post('auth/register', userInfo)

      this.$auth.loginWith('local', {
        data: {
          email: userInfo.email,
          password: userInfo.password
        }
      })

      //   debugger

      //   alert('You are pressed login button')
    }
  }
}
</script>

<style></style>
