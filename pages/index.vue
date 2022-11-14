<script setup lang="ts">
import { onCounterIncrement, onLoad } from './index.telefunc.mjs'
import { ref } from 'vue'

const { data } = await useAsyncData(() => onLoad())
let count = ref(data)

async function handleClick() {
  count.value = await onCounterIncrement()
}
</script>

<template>
  <button @click="handleClick()">Counter {{ count }}</button>
  <p>This counter is persisted to the server's memory. Reload this page and observe that count value is preserved.</p>
</template>
