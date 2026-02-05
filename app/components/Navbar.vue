<script setup lang="ts">
import { Home, User, Lightbulb, Briefcase, MessageSquare, Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Lightbulb },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: MessageSquare },
]

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 50)
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass py-4' : 'bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2 group">
        <span class="w-8 h-8 rounded-lg bg-emerald-accent flex items-center justify-center text-deep-black group-hover:rotate-12 transition-transform">R</span>
        <span>Reihan<span class="text-emerald-accent">.</span></span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          {{ link.name }}
        </a>
        <a href="#contact" class="btn-primary py-2 px-5 text-sm">
          Hire Me
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white">
        <component :is="isOpen ? X : Menu" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Nav -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 py-6 px-6">
        <div class="flex flex-col gap-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            @click="isOpen = false"
            class="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-white"
          >
            <component :is="link.icon" class="w-5 h-5 text-emerald-accent" />
            {{ link.name }}
          </a>
          <a href="#contact" @click="isOpen = false" class="btn-primary text-center mt-2">
            Hire Me
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
