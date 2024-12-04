<script setup lang="ts">
</script>
<script setup lang="ts">
  defineProps({
    title: String,
    description: String,
    icon: String,
    image: String
  })
</script>


<template>
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <img :src="image" :alt="title" class="w-full h-48 object-cover rounded-lg mb-6">
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>