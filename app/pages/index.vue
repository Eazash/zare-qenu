<script setup lang="ts">
import { Temporal } from 'temporal-polyfill'
const zonedDate = Temporal.Now.plainDate('ethiopic')
const ethiopicDate = zonedDate.toLocaleString('am-ET', { calendar: 'ethiopic' })
useSeoMeta({
  title: 'Today in the Ethiopic Calendar | ዛሬ በኢትዮጵያውያን ቀን አቆጣጠር',
  description: `Today according to the Ethiopic Calendar is ${ethiopicDate}`,
})
</script>
<template>
  <div class="flex gap-4 md:gap-8 lg:gap-12 flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold flex flex-col gap-2 text-center"><span>Today according to the Ethiopic Calendar</span><span
        class="font-noto-ethiopic font-3xl">ዛሬ ቀኑ እንደ ኢትዮጵያውያን ቀን አቆጣጠር</span>
    </h1>
    <hr class="w-1/2 md:w-1/3 lg:w-1/4 border-t-2 border-gray-300">
    <h2 class="text-4xl font-extrabold">{{ ethiopicDate.replaceAll('/', '-') }}</h2>
  </div>
</template>
