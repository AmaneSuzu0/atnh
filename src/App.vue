<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavigationBar />
    <router-view />
  </div>
</template>