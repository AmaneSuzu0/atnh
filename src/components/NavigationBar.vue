<script setup lang="ts">
  import { ref } from 'vue'

  const isOpen = ref(false)
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Free Services', path: '/free-services' },
    { name: 'Paid Services', path: '/paid-services' },
    { name: 'Premium Services', path: '/premium-services' },
    { name: 'About Us', path: '/about' }
  ]
</script>

<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold bg-white text-blue-600 px-3 py-1 rounded-lg">ATNH</span>
          <span class="text-xl font-semibold hidden sm:block">Aging To New Heights</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-1">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white hover:text-blue-600"
            :class="$route.path === item.path ? 'bg-blue-700' : ''">
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isOpen" class="md:hidden" @click="isOpen = false">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-white hover:text-blue-600"
            :class="$route.path === item.path ? 'bg-blue-700' : ''">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .router-link-active {
    @apply bg-blue-700;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .mobile-menu-enter-active {
    animation: slideDown 0.2s ease-out;
  }

  .mobile-menu-leave-active {
    animation: slideDown 0.2s ease-out reverse;
  }
</style>