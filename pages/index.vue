<template>
  <div>
    <Navbar />
    <div class="jumbotron">
      <h1 class="display-3">Cyber Recruit</h1>
      <p class="lead">Where you can recruit talent.</p>
      <hr class="my-2" />
      <p>For more info, please read our github documentation.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="register" role="button"
          >Register now</a
        >
      </p>
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
      email: '',
      pass: '',
      form: {
        email: null,
        pass: null
      },
      error: null
    }
  }
}
</script>

<style></style>
