import { reactive } from 'vue'
import router from '../router/index'
import { authStore } from './store' // Import the authStore from login.js

const registrationStore = reactive({
    registerUser(name, password, email) {
        fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password, email })
        })
        .then(res => res.json())
        .then(res => {
            if (res.error === 0) {
                alert('User Registration Successful');
                authStore.isAuthenticated = true;
                authStore.user = res;
                localStorage.setItem('auth', 1);
                localStorage.setItem('user', JSON.stringify(res));

                router.push('/');
            } else {
                // Handle registration errors 
               
            }
        })
        .catch(error => {
            console.error('Registration error:', error);
        });
    }
});

export { registrationStore }
