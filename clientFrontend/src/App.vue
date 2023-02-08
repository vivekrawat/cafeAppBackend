<script setup lang="ts">
import Navbar from "./Components/Navbar/Navbar.vue";
</script>

<template>
  <div class="bg-primary-bg min-h-screen relative overflow-hidden">
    <Navbar/>
    <div class="min-h-full relative">
			<router-view>
			</router-view>
		</div>
  </div>
</template>

<style scoped>
</style>
