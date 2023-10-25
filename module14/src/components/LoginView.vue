//create home component
<script setup>
import { ref } from 'vue'
import { authStore } from '../store/store'
const auth = authStore

const username = ref('john@doe.com')
const password = ref('12345')
</script>
<template>
  <section class="mt-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title text-center font-weight-bold text-primary">
                Sign in to your account
              </h1>
              <form @submit.prevent="auth.authenticate(username, password)">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    v-model="username"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="remember" />
                  <label class="form-check-label" for="remember">Remember me</label>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <button type="submit" class="btn btn-primary">Login</button>
                  <a href="#" class="text-primary">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
