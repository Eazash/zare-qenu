<script lang="ts" setup>
const serverDate = useServerDate()
withDefaults(defineProps<{as: string}>(), {
  as: 'h2',
})
</script>
<template>
  <component :is="as" v-once>
    {{ serverDate.displayTime }}
  </component>
</template>