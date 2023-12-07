<template>
	<section>
      <PaperComponent/>
      <img src="/images/bg-triangle.svg" alt="Triangle" class="triangle">
      <ScissorsComponent/>
			
      <RockComponent/>
    </section>
</template>

<script setup>
import router from '../router';
import { useGameStore } from '../stores/game';
import PaperComponent from './PaperComponent.vue';
import RockComponent from './RockComponent.vue';
import ScissorsComponent from './ScissorsComponent.vue';


const gameStore = useGameStore()

function setPlayerChoice(choice){
	gameStore.player = choice
	router.push('results')
}
</script>

<style lang="scss" scoped>
 section {
    display: grid;
		width: fit-content;
    grid-template-columns: 230px 180px;
    grid-template-rows: 180px;
		margin: 60px auto;
    position: relative;
		.triangle{
			width: 250px;
      position: absolute;
			left: 15%;
			top: 20%;
			z-index: -1;
		}
    
  }

</style>