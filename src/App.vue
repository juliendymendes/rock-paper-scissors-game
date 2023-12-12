<script setup>
import { RouterView } from 'vue-router'
import RulesButton from './components/RulesButton.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import RulesModalComponent from './components/RulesModalComponent.vue';
</script>

<template>
  <HeaderComponent/>
	<!-- <RulesModalComponent/> -->
  <RouterView />
  <RulesButton/>
</template>

<style scoped>

</style>
