import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(taskName) {
      this.tasks.push({
        name: taskName,
        done: false,
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskStatus(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
});
