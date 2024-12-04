<script setup lang="ts">
import ServiceItem from '../components/ServiceItem.vue'

const premiumServices = [
  {
    title: 'Personalized Learning Assistance',
    description: 'One-on-one tutoring tailored to your needs, including specialized topics like opening online stores or live streaming.',
    type: 'both',
    price: '$100/hour'
  },
  {
    title: 'Interest Theme Activities',
    description: 'Participate in organized outings and practical teaching activities, such as mobile phone photography contests.',
    type: 'offline',
    price: '$200/activity'
  },
  {
    title: 'Platform Membership',
    description: 'Full access to all platform courses, dedicated customer service, and customized learning plans.',
    type: 'both',
    price: '$200/year'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">Premium Services</h1>
    <p class="text-gray-600 mb-8">Exclusive personalized learning experiences</p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ServiceItem
        v-for="service in premiumServices"
        :key="service.title"
        v-bind="service"
        class="border-2 border-gold"
      />
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
      <h2 class="text-2xl font-bold mb-4 text-yellow-800">Member Benefits</h2>
      <ul class="list-disc list-inside space-y-2 text-yellow-900">
        <li>Access to all platform courses</li>
        <li>Priority booking for offline activities</li>
        <li>Dedicated customer service support</li>
        <li>Personalized learning roadmap</li>
        <li>Exclusive member-only events</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.border-gold {
  border-color: #FFD700;
}
</style>