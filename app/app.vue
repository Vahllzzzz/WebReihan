<template>
  <div class="relative bg-deep-black min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Base page transitions if needed */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

