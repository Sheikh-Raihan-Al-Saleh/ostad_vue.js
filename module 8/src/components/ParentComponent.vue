<script setup>
    import ChildComponent from './ChildComponent.vue';
    import { ref } from 'vue';

    const message = ref("Hello There!!!");

    const handleMessageEmitted = (emittedMessage) => {
    message.value = emittedMessage;
    };

</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-semibold">Parent Component</h1>
        <p class="mt-2">Message: {{ message }}</p>
        <ChildComponent :message="message" @messageEmitted="handleMessageEmitted"/>
    </div>
</template>
  
<style scoped>

</style>
  