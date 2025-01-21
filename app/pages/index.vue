<script setup lang="ts">
useServerSeoMeta({
  title: 'Today in the Ethiopic Calendar | ዛሬ በኢትዮጵያውያን ቀን አቆጣጠር',
  description: `Today according to the Ethiopic Calendar; a calendar that is 7-8 years behind Gregorian, has 13 months (12 of 30 days, 1 of 5-6), and starts on Sept 11/12.`,
})

</script>
<template>
  <div class="font-noto flex gap-4 md:gap-6 lg:gap-8 flex-col items-center justify-center text-center grow">
    <DateText as="span" class="font-bold text-4xl" />
    <h1 class="text-2xl font-bold flex flex-col gap-2">{{ $t('heading') }}</h1>
    <p class="font-bold font-3xl" lang="am">{{ $t('alt_lang_subheading') }}</p>
  </div>
</template>
