<script setup></script>

<template>
  <header
    class="h-[380px] lg:h-auto lg:aspect-[1365/546] bg-cover bg-center flex flex-col"
    style="
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.05),
          rgba(0, 0, 0, 0.95)
        ),
        url(/img/hero-bg.png);
    ">
    <BaseNavigation />
    <BaseHeroContent />
  </header>
</template>
