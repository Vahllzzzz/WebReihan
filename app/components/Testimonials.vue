<script setup lang="ts">
import { Quote } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Product Manager at GameFlow',
    content: 'Reihan is a rare talent who understands both the technical constraints of game engines and the aesthetic requirements of modern web apps. His work on CyberStrike was instrumental to our launch.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    name: 'Sarah Chen',
    role: 'CEO of TechNova',
    content: 'The dashboard Reihan built for us exceeded all expectations. It is fast, beautiful, and incredibly intuitive. A true professional in every sense.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Wright',
    role: 'Lead Developer at IndieSphere',
    content: 'Collaborating with Reihan was a breeze. His knowledge of Godot and C++ helped us solve performance bottlenecks that were holding our project back for months.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
]
</script>

<template>
  <section class="py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Client <span class="text-emerald-accent">Success</span></h2>
        <p class="text-slate-400">What industry professionals say about working with me.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in testimonials" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1 }"
          :delay="index * 150"
          class="glass p-10 rounded-[2.5rem] relative flex flex-col"
        >
          <Quote class="w-12 h-12 text-emerald-accent/20 absolute top-8 left-8" />
          <p class="text-slate-300 leading-relaxed mb-8 relative z-10 italic">
            "{{ item.content }}"
          </p>
          <div class="mt-auto flex items-center gap-4">
            <img :src="item.avatar" :alt="item.name" class="w-12 h-12 rounded-full border border-white/10" />
            <div>
              <div class="font-bold text-white">{{ item.name }}</div>
              <div class="text-xs text-slate-500">{{ item.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
