<template>
  <section>
    <div>
      <p>You picked</p>
			<div :class="'shadow' ? result === 'player' : ''">
				<ScissorsComponent v-if="gameStore.player === 2"/>
				<PaperComponent v-if="gameStore.player === 1"/>
				<RockComponent v-if="gameStore.player === 0"/>

			</div>
    </div>
		<div class="result" v-if="!waitingHouse">
      <p>{{ resultText }}</p>
      <button type="button">Play again</button>
    </div>
    <div>
      <p>The house picked</p>
			<CircleSkeleton v-if="waitingHouse"/>
			<div v-if="!waitingHouse" :class="'shadow' ? result === 'house' : ''">
				<ScissorsComponent v-if="gameStore.house === 2"/>
				<PaperComponent v-if="gameStore.house === 1"/>
				<RockComponent v-if="gameStore.house === 0"/>
			</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ScissorsComponent from "./ScissorsComponent.vue";
import RockComponent from "./RockComponent.vue";
import CircleSkeleton from "./CircleSkeleton.vue";
import { useGameStore } from "../stores/game";
import PaperComponent from "./PaperComponent.vue";

const gameStore = useGameStore()
const waitingHouse = ref(true)

const result = ref('')

const resultText = computed(() => {
	return result.value === "player" ? 'You win' : "You lose"
})

onMounted(() => {
	setTimeout(() => {
		const houseChoice = Math.floor(Math.random() * 3);
		gameStore.setChoice('house', houseChoice)
		waitingHouse.value = false
		result.value = gameStore.getResult
		console.log(result.value);
	}, 2000)
})
</script>

<style lang="scss" scoped>
section {
  display: flex;
  column-gap: 100px;
	justify-content: center;
  width: 750px;
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
	.shadow {
    width: 220px;
    height: 220px;
    background-color: hsla(216, 30%, 64%, 0.12);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      width: 280px;
      height: 280px;
      background-color: hsla(216, 30%, 64%, 0.091);
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    }
    &::before {
      content: "";
      width: 340px;
      height: 340px;
      background-color: hsla(216, 30%, 64%, 0.065);
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    }
  }

	.result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      color: #fff;
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 700;
    }

    button {
      background: #fff;
      border: none;
      width: 200px;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      border-radius: 5px;
      font-family: "Barlow Semi Condensed", sans-serif;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      cursor: pointer;
      margin-top: 1rem;
    }

    button:hover {
      color: rgb(220, 46, 78);
    }
  }
}
</style>
