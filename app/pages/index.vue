<script setup lang="ts">
useServerSeoMeta({
  title: 'Today in the Ethiopic Calendar | ዛሬ በኢትዮጵያውያን ቀን አቆጣጠር',
  description: `Today according to the Ethiopic Calendar; a calendar that is 7-8 years behind Gregorian, has 13 months (12 of 30 days, 1 of 5-6), and starts on Sept 11/12.`,
})

const locale = new Intl.DateTimeFormat().resolvedOptions().locale
const dateTime = ref(new Date())
useIntervalFn(() => {
  dateTime.value = new Date()
}, 1000)
const dateTimeString = computed(() => {
  return dateTime.value.toLocaleString(locale, {
    calendar: 'ethiopic',
    timeStyle: 'medium',
  })
})

</script>
<template>
  <div class="font-noto flex gap-4 md:gap-6 lg:gap-8 flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold flex flex-col gap-2 text-center">Today according to the Ethiopic Calendar </h1>
    <p class="font-bold font-3xl" lang="am">ዛሬ ቀኑ እንደ ኢትዮጵያውያን ቀን አቆጣጠር</p>
    <hr class="w-1/2 md:w-1/3 lg:w-1/4 border-t-2 border-gray-300">
    <div class="flex gap-2 md:gap-4 text-2xl md:text-3xl w-full justify-center items-center">
      <DateText as="span" class="font-bold" />
      <span>:</span>
      <span>{{ dateTimeString }}</span>
    </div>
  </div>
</template>
