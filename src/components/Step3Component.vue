<template>
  <section class="results-container">
    <div class="container">
      <p>You picked</p>
      <div class="shadow">
        <PaperComponent />
      </div>
    </div>

    <div class="result">
      <p>{{ resultText }}</p>
      <button type="button">Play again</button>
    </div>

    <div class="container">
      <p>The house picked</p>
      <RockComponent />
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue"
import { useGameStore } from "../stores/game";
import PaperComponent from "./PaperComponent.vue";
import RockComponent from "./RockComponent.vue";

const gameStore = useGameStore()

const result = ref('')

const resultText = computed(() => {
	return result.value === "player" ? 'You win' : "You lose"
})

onMounted(() => {
	result.value = gameStore.getResult()
})
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: 700px;
  margin: 85px auto 0px;

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

  .container {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 1rem;
      font-size: 1.3rem;
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
