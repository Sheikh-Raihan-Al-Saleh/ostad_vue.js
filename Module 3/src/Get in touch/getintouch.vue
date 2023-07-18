<template>
    <section class="mt-20" id="contact">
      <div class="container mx-auto my-auto">
        <div class="flex justify-center">
          <div class="card p-5 max-w-lg">
            <p class="text-center text-4xl mb-4">Get In Touch</p>
            <p class="text-center">Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="card p-5 max-w-lg mr-10 mb-6 md:mb-0 md:mx-2">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/2 pr-3 mb-6 md:mb-0">
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                    First Name
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="">
                </div>
                <div class="w-full md:w-1/2 pl-3">
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                    Last Name
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="">
                </div>
              </div>
              <div class="flex flex-wrap mb-6">
                <div class="w-full">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    Email Address
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="">
                </div>
              </div>
              <div class="flex flex-wrap mb-6">
                <div class="w-full">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
              </div>
              <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/2">
                  <a href="#" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full mr-2 uppercase">Send Message</a>
                </div>
              </div>
            </form>
          </div>
          <div class="max-w-2xl mx-auto my-auto mt-6">
            <p class="text-2xl">Contact Info</p>
            <p class="mt-2">{{ contact.address }}</p>
            <p class="mt-2">{{ contact.phone }}</p>
            <p class="mt-2">{{ contact.alternativecontact }}</p>
            <p class="mt-2">{{ contact.mail }}</p>
            <p class="mt-2">{{ contact.website }}</p>
         </div>

        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const contact = {
    address: "43 Raymouth Rd. Baltemoer, London 3910",
    phone: "+1(123)-456-7890",
    alternativecontact: "+1(123)-456-7890",
    mail: "info@mydomain.com",
    website: "https://Colorlib.com/",
  };
  </script>
  
  <style scoped>
  </style>
  