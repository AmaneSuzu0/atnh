<script setup lang="ts">
  import ServiceItem from '../components/ServiceItem.vue'

  const freeServices = [
    {
      title: 'Introduction to Digital Society',
      description: 'Learn basic smartphone functions including WeChat chat, scan code payment and other essential digital skills.',
      type: 'both',
      price: 'Free!'
    },
    {
      title: 'Digital Skills Experience Day',
      description: 'Hands-on demonstrations and instructions for electronic payment, shared bike usage, and other practical digital skills.',
      type: 'offline',
      price: 'Free!'
    }
  ]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">Free Services</h1>
    <p class="text-gray-600 mb-8">Start your digital journey with our complimentary offerings</p>

    <div class="grid md:grid-cols-2 gap-8">
      <ServiceItem v-for="service in freeServices" :key="service.title" v-bind="service" />
    </div>
  </div>
</template>