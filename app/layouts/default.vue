<script setup lang="ts">
const { $colorMode, $i18n } = useNuxtApp()
const { state, next } = useCycleList([
  ['light', 'ic:sharp-light-mode',],
  ['dark', 'ic:sharp-dark-mode'],
], {
  initialValue: ['light', 'ic:sharp-light-mode']
})

const i18nHead = useLocaleHead()

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
    <Html :lang="i18nHead.htmlAttrs?.lang" :dir="i18nHead.htmlAttrs?.dir">
      <Head>
        <template v-for="link in i18nHead.link" :key="link.hid">
          <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in i18nHead.meta" :key="meta.hid">
          <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
        </template>
      </Head>

      <Body>
        <nav class="flex justify-end items-center gap-2 md:gap-4">
          <button @click="toggleLocale()" role="button" aria-label="Cycle between Languages">
            <Icon name="ic:baseline-language" class="size-6 md:size-8" />
          </button>
          <button @click="next()" aria-label="Cycle between color modes">
            <Icon :name="state[1]!" class="size-6 md:size-8" />
          </button>
        </nav>
        <slot />
      </Body>
    </Html>
  </div>
</template>