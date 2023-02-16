<template>
  <section class="flex flex-col items-center gap-2 lg:gap-4 text-center mt-16">
    <GenericsStick />

    <div class="flex flex-col gap-2">
      <h2 class="text-[32px] lg:text-[40px] font-bold">
        Exclusive Shows & Originals
      </h2>
      <p class="font-medium lg:text-xl">
        Enjoy hundreds of episodes , shows, and sports in one app.
      </p>
    </div>

    <button
      class="font-extrabold text-black uppercase bg-white px-6 py-3 rounded-lg lg:px-14 lg:py-3 lg:mt-4">
      START FREE TRIAL
    </button>

    <span class="text-[#9E9E9E] text-sm"> *Terms & Conditions apply </span>

    <BaseShowCarousel />
  </section>
</template>
