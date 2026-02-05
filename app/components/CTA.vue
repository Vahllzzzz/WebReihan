<script setup lang="ts">
import { Mail, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-24">
    <div class="container mx-auto px-6">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        class="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-accent/20 to-deep-blue/20 border border-white/10 p-12 lg:p-24 text-center"
      >
        <!-- Background Blur -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-emerald-accent/30 blur-[100px] rounded-full"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-deep-blue/30 blur-[100px] rounded-full"></div>

        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Build Something <span class="text-gradient">Extraordinary?</span>
          </h2>
          <p class="text-lg text-slate-300 mb-12">
            Whether you have a game idea that needs high-performance engineering or a web project that needs a modern touch, I'm here to help.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@reihan.dev" class="btn-primary flex items-center justify-center gap-3 text-lg">
              <Mail class="w-5 h-5" /> Start a Conversation
            </a>
            <a href="#" class="btn-secondary flex items-center justify-center gap-3 text-lg">
              Download CV <ArrowRight class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
