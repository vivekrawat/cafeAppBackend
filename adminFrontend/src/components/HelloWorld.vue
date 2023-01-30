<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="bg-red-400 text-white">
    this is a red background {{count}}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
