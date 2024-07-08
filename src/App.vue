<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ReDialog } from '@/components/ReDialog'

defineOptions({
  name: 'App',
})

const currentLocale = computed(() => zhCn)
</script>

<template>
  <ElConfigProvider :locale="currentLocale">
    <router-view />
    <ReDialog />
  </ElConfigProvider>
</template>
