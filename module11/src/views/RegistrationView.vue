<script setup>
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
let email = ''
let password = ''
let confirmPassword = ''
const router = useRouter()

const register = () => {
  if (password !== confirmPassword) {
    alert('Passwords do not match')
    return
  }

  const result = userStore.registerUser(email, password)
  if (result === 'Registration successful') {
    alert('Registration successful')
    router.push('/login')
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
          <form @submit.prevent="register">
            <h4>Registration Form</h4>
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
              <div class="col-12">
                <div class="input-group">
                  <input
                    v-model="confirmPassword"
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>

            <div class="form-row mt-3">
              <div class="col-6">
                <button type="submit" class="btn btn-success">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
