<script setup lang="ts">
  import ServiceCard from '../components/ServiceCard.vue'

  const features = [
    {
      title: 'Digital Skills Training',
      description: 'Learn essential computer and internet skills at your own pace',
      icon: '💻',
      image: '/images/digital-skills.jpg'
    },
    {
      title: 'Hobby Courses',
      description: 'Explore new interests and connect with like-minded individuals',
      icon: '🎨',
      image: '/images/hobby-courses.jpg'
    },
    {
      title: 'Community Support',
      description: 'Join our welcoming community of lifelong learners',
      icon: '👥',
      image: '/images/community.jpg'
    }
  ]

  const serviceCategories = [
    {
      title: 'Free Services',
      description: 'Start your digital journey with essential skills training',
      image: '/images/free-services.jpg',
      link: '/free-services',
      highlights: ['Basic smartphone skills', 'Digital experience days', 'Community workshops']
    },
    {
      title: 'Paid Services',
      description: 'Advance your digital knowledge with structured courses',
      image: '/images/paid-services.jpg',
      link: '/paid-services',
      highlights: ['Advanced digital skills', 'Interest courses', 'Family sharing sessions']
    },
    {
      title: 'Premium Services',
      description: 'Get personalized attention and exclusive benefits',
      image: '/images/premium-services.jpg',
      link: '/premium-services',
      highlights: ['One-on-one tutoring', 'Customized learning plans', 'VIP member benefits']
    }
  ]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-blue-600 text-white">
      <div class="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="Senior learning digital skills"
          class="w-full h-full object-cover opacity-20">
      </div>
      <div class="relative container mx-auto px-4 py-24">
        <h1 class="text-5xl font-bold text-center mb-6">Welcome to Aging To New Heights</h1>
        <p class="text-xl text-center mb-12 max-w-2xl mx-auto">
          Empowering seniors through education and technology. Join our community and discover the joy of lifelong
          learning.
        </p>
        <div class="flex justify-center">
          <router-link to="/free-services"
            class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Start Learning
          </router-link>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose ATNH?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ServiceCard v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </div>

    <!-- Service Categories -->
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="category in serviceCategories" :key="category.title"
            class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img :src="category.image" :alt="category.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ category.title }}</h3>
              <p class="text-gray-600 mb-4">{{ category.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="highlight in category.highlights" :key="highlight" class="flex items-center text-gray-700">
                  <span class="text-green-500 mr-2">✓</span>
                  {{ highlight }}
                </li>
              </ul>
              <router-link :to="category.link"
                class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="container mx-auto px-4 py-16 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our community today and discover how technology can enrich your life.
      </p>
      <router-link to="/free-services"
        class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
        Get Started Now
      </router-link>
    </div>
  </div>
</template>