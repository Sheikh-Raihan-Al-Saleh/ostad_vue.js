<script setup>
    import { ref, defineEmits, defineProps } from 'vue';

    defineProps(['message']);
    const emit = defineEmits(['messageEmitted']);

    const emitMessage = () => {
        const customMessage = "Hey How are you?";
        emit('messageEmitted', customMessage);
    };

</script>
  

<template>
    <div class="p-4 border border-gray-300 rounded-md mt-4">
        <h2 class="text-lg font-semibold">Child Component</h2>
        <p class="mt-2">Message: {{ message }}</p>
        <button @click="emitMessage" class="mt-2 bg-blue-900 text-white px-4 py-2 rounded">Click Me</button>
    </div>
</template>

<style scoped>

</style>
  