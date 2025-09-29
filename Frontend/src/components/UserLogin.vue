<template>
  <div class="absolute inset-0 top-1/3 left-1/3">
    <div
      class="flex flex-col items-center bg-neutral-800 justify-center p-10 gap-5 w-[40rem] h-[15rem] border rounded-md transiton-all duration-300 border-neutral-700 hover:border-pink-700/50"
    >
      <div class="flex flex-col gap-3 flex-1 w-full">
        <div class="flex flex-col gap-1">
          <label for="" class="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="testedailva@teste.com"
            class="transiton-all duration-300 border border-neutral-600 hover:border-pink-700/50 px-2 py-1 rounded-md bg-neutral-700"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="" class="text-sm text-gray-400">Password</label>
          <input
            type="Password"
            placeholder="*******"
            class="transiton-all duration-300 border border-neutral-600 hover:border-pink-700/50 px-2 py-1 rounded-md bg-neutral-700"
          />
        </div>
      </div>

      <button
        class="w-40 border font-semibold transition-colors bg-blue-600 duration-300 bg-gradient-to-l hover:to-pink-700 hover:from-pink-400 border-blue-600 hover:border-pink-500 rounded-md px-4 py-1 cursor-pointer"
      >
        Login
      </button>
    </div>
  </div>
</template>
