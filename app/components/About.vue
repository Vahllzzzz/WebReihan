<script setup lang="ts">
import { Terminal, Cpu, Layout } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-24 bg-white/[0.02]">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1 }"
          class="order-2 lg:order-1"
        >
          <div class="relative">
            <div class="absolute -inset-4 bg-emerald-accent/20 blur-2xl rounded-[2rem] -z-10"></div>
            <div class="glass p-8 rounded-[2rem]">
              <div class="flex gap-4 mb-8">
                <div class="w-12 h-12 rounded-xl bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                  <Terminal class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold">Code Philosophy</h3>
                  <p class="text-slate-400 text-sm mt-1">Clean, maintainable, and efficient architectures.</p>
                </div>
              </div>
              <p class="text-slate-300 leading-relaxed mb-6">
                With a background in both high-performance game engineering and scalable web architecture, I bridge the gap between complex logic and stunning user interfaces. My approach is rooted in the belief that software should not only function flawlessly but also provide an emotional connection through design and interaction.
              </p>
              <p class="text-slate-300 leading-relaxed">
                Whether it's optimizing C++ loops for a real-time game engine or architecting microservices with Laravel, I focus on delivering robust solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0 }"
          class="order-1 lg:order-2"
        >
          <div class="mb-4 text-emerald-accent font-semibold flex items-center gap-2">
            <span class="w-8 h-px bg-emerald-accent"></span> About Me
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            The Intersection of <span class="text-gradient">Logic&nbsp;&&nbsp;Art</span>
          </h2>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
                <Cpu class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-lg font-bold">Game Engineering</h4>
                <p class="text-slate-400 text-sm">Deep expertise in Godot, Unity, and custom engine development using C++ and GDScript.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
                <Layout class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-lg font-bold">Modern Web Architecture</h4>
                <p class="text-slate-400 text-sm">Crafting fast, responsive, and SEO-optimized web applications with Nuxt.js, Laravel, and Tailwind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
