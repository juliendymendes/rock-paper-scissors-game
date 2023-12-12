<template>
  <section>
    <div>
      <p>You picked</p>
      <ScissorsComponent v-if="gameStore.player === 2"/>
			<PaperComponent v-if="gameStore.player === 1"/>
			<RockComponent v-if="gameStore.player === 0"/>
    </div>

    <div>
      <p>The house picked</p>
			<CircleSkeleton v-if="waitingHouse"/>
      <RockComponent  v-if="!waitingHouse"/>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ScissorsComponent from "./ScissorsComponent.vue";
import RockComponent from "./RockComponent.vue";
import CircleSkeleton from "./CircleSkeleton.vue";
import { useGameStore } from "../stores/game";
import PaperComponent from "./PaperComponent.vue";

const gameStore = useGameStore()
const waitingHouse = ref(true)

</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  margin: 85px auto 0px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: white;
      text-transform: uppercase;
      font-size: 21px;
      margin-bottom: 32px;
    }
  }
}
</style>
