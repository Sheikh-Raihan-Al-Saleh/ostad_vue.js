import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    registeredUsers: [],
    currentUser: null,
  }),
  actions: {
    registerUser(email, password) {
      // Check for valid email format and matching passwords
      if (!this.isValidEmail(email)) {
        return 'Invalid email format';
      }
      if (password.length < 6) {
        return 'Password must be at least 6 characters long';
      }
      if (this.registeredUsers.some(user => user.email === email)) {
        return 'Email already registered';
      }

      this.registeredUsers.push({ email, password });
      return 'Registration successful';
    },
    loginUser(email, password) {
      const user = this.registeredUsers.find(user => user.email === email);
      if (!user || user.password !== password) {
        return 'Invalid email or password';
      }

      this.currentUser = user;
      return 'Login successful';
    },
    logoutUser() {
      this.currentUser = null;
    },
    isValidEmail(email) {
      // Add your email validation logic here
      return /\S+@\S+\.\S+/.test(email);
    },
  },
});
