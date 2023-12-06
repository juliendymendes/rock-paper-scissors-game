<script setup>
import { RouterView } from 'vue-router'
import RulesButton from './components/RulesButton.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent/>
  <RouterView />
  <RulesButton/>
</template>

<style scoped>

</style>
