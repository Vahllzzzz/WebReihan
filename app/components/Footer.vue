<script setup lang="ts">
import { Github, Linkedin, Twitter, Instagram } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 border-t border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <NuxtLink to="/" class="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2 mb-4">
            <span class="w-8 h-8 rounded-lg bg-emerald-accent flex items-center justify-center text-deep-black">R</span>
            <span>Reihan<span class="text-emerald-accent">.</span></span>
          </NuxtLink>
          <p class="text-sm text-slate-500 max-w-xs">
            Pushing the boundaries of digital experiences through code and design. Based in Indonesia, working globally.
          </p>
        </div>

        <div class="flex gap-6">
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-accent hover:bg-emerald-accent/10 transition-all border border-white/5">
            <Github class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-accent hover:bg-emerald-accent/10 transition-all border border-white/5">
            <Linkedin class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-accent hover:bg-emerald-accent/10 transition-all border border-white/5">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-accent hover:bg-emerald-accent/10 transition-all border border-white/5">
            <Instagram class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-xs text-slate-600">
          © {{ currentYear }} Reihan. All rights reserved.
        </div>
        <div class="flex gap-8 text-xs text-slate-600 uppercase tracking-widest font-bold">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
