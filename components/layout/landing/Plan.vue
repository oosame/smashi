<template>
  <section
    class="flex flex-col items-center gap-2 lg:gap-4 text-center mt-10 lg:mt-14 mb-14 layout">
    <GenericsStick />

    <div class="flex flex-col gap-2">
      <h2 class="text-[32px] lg:text-[40px] font-bold">Choose your plan</h2>

      <p>Enjoy <span class="text-indigo-800">30 DAYS FREE TRIAL</span></p>

      <button
        class="font-extrabold text-black uppercase bg-white px-6 py-3 rounded-lg lg:px-14 lg:py-3 lg:mt-4">
        START FREE TRIAL
      </button>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 grow w-full">
      <div
        class="flex flex-col gap-4"
        v-for="i in 4">
        <div class="">.</div>
        <span class="text-sm lg:text-base"
          >Exclussssdfive episodes & matches</span
        >
      </div>
    </div>

    <span class="text-[#9E9E9E] text-sm"> *Terms & Conditions apply </span>
  </section>
</template>
