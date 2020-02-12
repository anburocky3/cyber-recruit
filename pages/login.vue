<template>
  <div>
    <Navbar />
    <div class="col-sm-6 offset-sm-3 mt-5">
      <div class="card">
        <div class="card-header bg-dark text-white">Login here</div>
        <div class="card-body">
          <form action="" @submit.prevent="loginUser(form.email, form.pass)">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                v-model="form.email"
                placeholder="hello@awesome.com"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="form.pass"
                class="form-control"
                placeholder="********"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Login
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
        email: 'anbuceo@gmail.com',
        pass: '123456789'
      },
      error: null
    }
  },
  methods: {
    async loginUser(email, pass) {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            email: email,
            password: pass
          }
        })
      } catch (e) {
        this.makeToast("Authentication Failure", "Please check your credentials", 'danger', false)
        console.log(e)
      }

      // debugger

      //   debugger

      //   alert('You are pressed login button')
    },
    makeToast(title, text, variant = null, append = false) {
      this.$bvToast.toast(text, {
        title: title,
        autoHideDelay: 5000,
        variant: variant,
        appendToast: append
      })
    }
  }
}
</script>

<style></style>
