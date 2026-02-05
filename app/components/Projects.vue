<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'

const projects = [
  {
    title: 'CyberStrike: Origins',
    category: 'Game Dev',
    description: 'A fast-paced tactical shooter built with Godot Engine and C++.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    tags: ['C++', 'Godot', 'Networking'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Nexus Hub',
    category: 'Web Dev',
    description: 'Enterprise-grade SaaS platform for digital asset management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Laravel', 'Vue 3', 'PostgreSQL'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Ethereal Soul',
    category: 'Game Dev',
    description: 'Immersive RPG with advanced procedural generation systems.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    tags: ['GDScript', 'Shaders', 'Godot'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Nova Dashboard',
    category: 'Web Dev',
    description: 'Modern analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800',
    tags: ['Nuxt 3', 'Tailwind', 'D3.js'],
    links: { github: '#', live: '#' }
  }
]
</script>

<template>
  <section id="projects" class="py-24 bg-white/[0.02]">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-end mb-16">
        <div>
          <h2 class="text-4xl font-bold mb-4">Selected <span class="text-gradient">Work</span></h2>
          <p class="text-slate-400">A showcase of passion projects and professional engagements.</p>
        </div>
        <NuxtLink to="/projects" class="hidden sm:block text-emerald-accent font-semibold hover:underline decoration-emerald-accent/30 underline-offset-8 transition-all">
          View all projects
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="group relative glass rounded-[2rem] overflow-hidden"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent text-[10px] font-bold uppercase tracking-wider">
                {{ project.category }}
              </span>
              <div class="flex gap-2">
                <span v-for="tag in project.tags" :key="tag" class="text-[10px] text-slate-500 font-medium tracking-wide">
                  #{{ tag }}
                </span>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-emerald-accent transition-colors">{{ project.title }}</h3>
            <p class="text-slate-400 mb-6 leading-relaxed">{{ project.description }}</p>
            <div class="flex gap-4">
              <a :href="project.links.live" class="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-accent transition-colors">
                <ExternalLink class="w-4 h-4" /> Live Demo
              </a>
              <a :href="project.links.github" class="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                <Github class="w-4 h-4" /> Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
