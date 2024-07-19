<script lang="ts" setup>
import { Icon as IconifyIcon } from '@iconify/vue'

defineOptions({
  name: 'Icon',
})

defineProps({
  icon: {
    type: String,
    default: '',
  },
})

const attrs = useAttrs()
const iconStyle = computed(() => (attrs?.style
  ? Object.assign(attrs.style, { outline: 'none' })
  : { outline: 'none' }
))
</script>

<template>
  <IconifyIcon :icon="icon" :style="iconStyle" v-bind="$attrs" />
</template>
