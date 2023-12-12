import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Step1Component from '../components/Step1Component.vue'
import Step2Component from '../components/Step2Component.vue'
import Step3Component from '../components/Step3Component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'step1',
      component: Step1Component
    },
		{
      path: '/step2',
      name: 'step2',
      component: Step2Component
    },
		{
      path: '/step3',
      name: 'step3',
      component: Step3Component
    },
  ]
})

export default router
