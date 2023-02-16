<template>
  <ul
    class="flex flex-nowrap overflow-x-auto gap-4 lg:gap-6 scrollbar-none mt-4 w-full px-4 transform">
    <li
      class="aspect-[9/16] w-[135px] lg:w-[220px] bg-purple-900 flex-none rounded-lg overflow-hidden slide"
      v-for="i in 16"
      :key="i"></li>
  </ul>
</template>

<style>
.slide {
  transform: translate(0, 0);
  animation: slideshow 30s linear;
}

@keyframes slideshow {
  100% {
    -webkit-transform: translateX(-100%);
  }
}
</style>
