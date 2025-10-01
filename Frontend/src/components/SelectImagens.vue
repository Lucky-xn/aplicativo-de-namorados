<template>
  <div class="absolute inset-0 top-1/3 left-1/3">
    <div
      class="flex flex-col items-center bg-neutral-800 justify-between px-7 py-3 gap-3 w-[40rem] h-[15rem] border rounded-md transiton-all duration-300 border-neutral-700 hover:border-pink-700/50"
    >
      <div
        class="flex items-center justify-center outline-2 outline-neutral-500 outline-dashed rounded-md w-full h-full group cursor-pointer"
      >
        <div
          @onclick="''"
          class="font-semibold text-neutral-500 group-hover:text-neutral-400 transition-all duration-300"
        >
          Click aqui ou Deixe sua imagem aqui!
        </div>
      </div>
      <div class="flex w-full justify-between">
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
        <div class="h-15 w-20 bg-neutral-700 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>