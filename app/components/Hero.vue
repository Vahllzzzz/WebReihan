<script setup lang="ts">
import { Code2, Gamepad2, Rocket, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full -z-10">
      <div class="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-emerald-accent/10 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-deep-blue-glow/10 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50"></div>
    </div>

    <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div 
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-accent text-xs font-semibold uppercase tracking-wider mb-6">
          <span class="flex h-2 w-2 rounded-full bg-emerald-accent animate-ping"></span>
          Available for new projects
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Crafting <span class="text-gradient">Digital Worlds</span> & Web Experiences
        </h1>
        
        <p class="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
          Senior Game Developer & Modern Web Specialist. Building high-performance games and immersive web applications with precision and soul.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#projects" class="btn-primary flex items-center gap-2">
            View Projects <ArrowRight class="w-4 h-h" />
          </a>
          <a href="#about" class="btn-secondary">
            About Me
          </a>
        </div>

        <div class="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-white">5+</span>
            <span class="text-xs text-slate-500 uppercase tracking-widest">Years Exp</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-white">50+</span>
            <span class="text-xs text-slate-500 uppercase tracking-widest">Projects</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-white">10+</span>
            <span class="text-xs text-slate-500 uppercase tracking-widest">Global Clients</span>
          </div>
        </div>
      </div>

      <div 
        class="relative hidden md:block"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1 }"
        :duration="1000"
      >
        <div class="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 group">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
            alt="Developer workspace"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
        </div>
        
        <!-- Floating Badges -->
        <div 
          class="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-bounce" 
          style="animation-duration: 4s"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Gamepad2 class="w-6 h-6" />
            </div>
            <div>
              <div class="text-xs text-slate-400">Expertise</div>
              <div class="text-sm font-bold text-white">Game Dev</div>
            </div>
          </div>
        </div>

        <div 
          class="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-bounce" 
          style="animation-duration: 5s"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-accent/20 flex items-center justify-center text-emerald-accent">
              <Code2 class="w-6 h-6" />
            </div>
            <div>
              <div class="text-xs text-slate-400">Expertise</div>
              <div class="text-sm font-bold text-white">Web Arch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
