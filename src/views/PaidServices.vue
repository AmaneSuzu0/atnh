<script setup lang="ts">
import ServiceItem from '../components/ServiceItem.vue'

const paidServices = [
  {
    title: 'Advanced Digital Life Course',
    description: 'Master online shopping, video calling, social services booking, short video production, and food delivery services.',
    type: 'both',
    price: '$30/year'
  },
  {
    title: 'Interest Courses',
    description: 'Explore photography, mobile phone painting, e-book reading, and other engaging digital hobbies.',
    type: 'both',
    price: '$50/year'
  },
  {
    title: 'Digital Devices Workshop',
    description: 'Learn smart device selection, setup, settings management, and privacy protection.',
    type: 'both',
    price: '$40/year'
  },
  {
    title: 'Family Sharing Course',
    description: 'Learn collaborative social media usage with family members through interactive sessions.',
    type: 'offline',
    price: '$70/year'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">Paid Services</h1>
    <p class="text-gray-600 mb-8">Advanced learning opportunities for digital mastery</p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ServiceItem
        v-for="service in paidServices"
        :key="service.title"
        v-bind="service"
      />
    </div>
  </div>
</template>