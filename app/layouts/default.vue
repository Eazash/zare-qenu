<script setup lang="ts">
const { $colorMode, $i18n} = useNuxtApp()
const { state, next } = useCycleList([
  ['light', 'ic:sharp-light-mode',],
  ['dark', 'ic:sharp-dark-mode'],
  ['system', 'ic:round-monitor']
], {
  initialValue: ['system', 'ic:round-monitor']
})
const [selectedLocale, toggleLocale] = useToggle($i18n.locale.value, {
  truthyValue: 'en',
  falsyValue: 'am'
})

watchEffect(() => {
  $i18n.setLocale(selectedLocale.value)
})
watchEffect(() => {
  $colorMode.preference = state.value[0]!
}, {
  flush: 'sync'
})
</script>
<template>
  <div class="min-h-screen flex flex-col p-4 md:p-8">
    <nav class="flex justify-end items-center gap-2 md:gap-4">
      <button @click="toggleLocale()" role="button" aria-label="Cycle between Languages">
        <Icon name="ic:baseline-language" class="size-6 md:size-8"/>
      </button>
      <button @click="next()" aria-label="Cycle between color modes">
        <Icon :name="state[1]!" class="size-6 md:size-8"/>
      </button>
    </nav>
    <slot />
  </div>
</template>