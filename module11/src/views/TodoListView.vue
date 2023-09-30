<script setup>
import { useTodoStore } from '../stores/counter'
import { ref } from 'vue'

const todoStore = useTodoStore()

const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim() !== '') {
    todoStore.addTask(newTask.value)
    newTask.value = ''
  }
}

const removeTask = (index) => {
  todoStore.removeTask(index)
}

const toggleTaskStatus = (index) => {
  todoStore.toggleTaskStatus(index)
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">To-Do List</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- To-Do Form -->
        <form @submit.prevent="addTask">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="task"
              placeholder="Add a new task"
              v-model="newTask"
              required
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">Add</button>
            </div>
          </div>
        </form>

        <!-- To-Do List -->
        <div class="list-group row" id="task-list">
          <div
            v-for="(task, index) in todoStore.tasks"
            :key="index"
            class="col-md-12 list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="col-md-6">{{ task.name }}</div>
            <div class="col-md-5">
              <input type="checkbox" v-model="task.done" @change="toggleTaskStatus(index)" />
            </div>
            <div class="col-md-1">
              <button class="btn btn-danger btn-sm" @click="removeTask(index)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
