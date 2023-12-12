<script setup>
import { RouterView } from "vue-router";
import RulesButton from "./components/RulesButton.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import RulesModalComponent from "./components/RulesModalComponent.vue";
</script>

<template>
  <HeaderComponent />
  <!-- <RulesModalComponent/> -->
  <main>
    <RouterView />
  </main>
  <RulesButton />
</template>

<style scoped lang="scss">
main {
  height: 500px;
}
</style>
