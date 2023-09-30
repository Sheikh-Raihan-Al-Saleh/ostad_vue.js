<script setup>
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
let email = ''
let password = ''
const router = useRouter()

const login = () => {
  const result = userStore.loginUser(email, password)
  if (result === 'Login successful') {
    alert('Login successful')
    router.push('/')
  } else {
    alert(result)
  }
}
</script>

<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card-body bg-light">
          <form @submit.prevent="login">
            <h4>Login Form</h4>
            <div class="form-row mt-3">
              <div class="col-12">
                <div class="input-group">
                  <input v-model="email" type="text" class="form-control" placeholder="Email" />
                </div>
              </div>
            </div>

            <div class="form-row mt-3">
              <div class="col-12">
                <div class="input-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div class="form-row mt-3">
              <div class="col-6">
                <button type="submit" class="btn btn-success">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
