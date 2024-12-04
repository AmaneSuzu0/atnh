<script setup lang="ts">
  defineProps < {
    title: string;
    description: string;
    price?: string;
    type: 'online' | 'offline' | 'both';
  } > ()
</script>


<template>
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex items-center justify-between">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm" :class="{
              'bg-blue-100 text-blue-800': type === 'online',
              'bg-green-100 text-green-800': type === 'offline',
              'bg-purple-100 text-purple-800': type === 'both'
            }">
        {{ type === 'both' ? 'Online & Offline' : type === 'online' ? 'Online' : 'Offline' }}
      </span>
      <span v-if="price" class="font-semibold text-blue-600">{{ price }}</span>
    </div>
  </div>
</template>