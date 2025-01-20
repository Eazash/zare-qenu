<script setup lang="ts">
const { $colorMode } = useNuxtApp()
const { state, next } = useCycleList([
  ['light', 'ic:sharp-light-mode',],
  ['dark', 'ic:sharp-dark-mode'],
  ['system', 'ic:round-monitor']
], {
  initialValue: ['system', 'ic:round-monitor']
})
watchEffect(() => {
  $colorMode.preference = state.value[0]!
}, {
  flush: 'pre'
})
</script>
<template>
  <div class="min-h-screen flex flex-col p-4 md:p-8">
    <nav class="flex">
      <button class="ml-auto" @click="next()" aria-label="Cycle between color modes">
        <Icon :name="state[1]!" class="size-6 md:size-8" mode="svg" />
      </button>
    </nav>
    <slot />
  </div>
</template>