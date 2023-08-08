<script setup>
  import { ref, reactive} from 'vue'
  
  const signupData = ref({
    name: '',
    password: '',
    confirmpassword:''
  })
  
  const loginData = ref({
    name: '',
    password: ''
  })
  
  const signupStatus = ref(false)
  const loginStatus = ref(false)
  

  const Signup = () => {
    if (signupData.value.password === signupData.value.confirmpassword) {
      signupStatus.value = true
    } else {
      alert('Passwords do not match! Please Give correct password.')
    }
  }
  
  const Login = () => {
    loginStatus.value = signupData.value.name === loginData.value.name && signupData.value.password === loginData.value.password
  }
  </script>
  

   <template>
    <section class="text-gray-600 body-font">
      <div v-if="!signupStatus">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Signup</h2>
            
            <div class="relative mb-4">
              <label for="signup-name" class="leading-7 text-sm text-gray-600">Name</label>
              <input v-model="signupData.name" type="text" id="signup-name" name="signup-name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            
            <div class="relative mb-4">
              <label for="signup-password" class="leading-7 text-sm text-gray-600">Password</label>
              <input v-model="signupData.password" type="password" id="signup-password" name="signup-password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="signup-confirmpassword" class="leading-7 text-sm text-gray-600">Confirm Password</label>
              <input v-model="signupData.confirmpassword" type="password" id="signup-password" name="signup-confirmpassword" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            
            <button @click="Signup" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mx-auto">Signup</button>
      
            <p class="text-xs text-gray-500 mt-3 text-center">Already Have an Account? Login</p>
          </div>
        </div>
      </div>
      
      <div v-else>
        <div v-if="!loginStatus" class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            
            <div class="relative mb-4">
              <label for="login-name" class="leading-7 text-sm text-gray-600">Name</label>
              <input v-model="loginData.name" type="text" id="login-name" name="login-name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            
            <div class="relative mb-4">
              <label for="login-password" class="leading-7 text-sm text-gray-600">Password</label>
              <input v-model="loginData.password" type="password" id="login-password" name="login-password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            
            <button @click="Login" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mx-auto">Login</button>
            
            <p v-if="loginStatus" class="text-green-500 mt-3 text-center">Welcome, {{ signupData.name }}!</p>
            <p v-else class="text-red-500 mt-3 text-center">Invalid username or password</p>
            
            <p class="text-xs text-gray-500 mt-3 text-center">Doesn't Have an Account? Signup</p>
          </div>
        </div>

        <!-- Welcome -->
        <div v-else class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="w-full text-center bg-aliceblue-600 rounded-lg p-6">
            <p class="text mt-3 text-lg font-semibold">{{ `Welcome, ${signupData.name}!` }}</p>
          </div>
        </div>


      </div>
    </section>
  </template>
  
  
  <style scoped>
  
  </style>
  
