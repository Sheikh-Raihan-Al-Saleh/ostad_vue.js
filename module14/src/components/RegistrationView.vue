<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {registrationStore } from '../store/registration'
const registration = registrationStore
const name = ref('');
const email = ref('');
const password = ref('');

</script>

<template>
    <section class="mt-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title text-center font-weight-bold text-primary">
                  Sign up
                </h1>
                <form @submit.prevent="registration.registerUser(name, password, email)">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      placeholder="••••••••"
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <button type="submit" class="btn btn-primary">Signup</button>
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
