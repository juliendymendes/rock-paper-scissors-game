<template>
	<section>
      <div class="paper-circle">
        <div class="inner-circle">
          <img src="/images/icon-paper.svg" alt="Paper" />
        </div>
      </div>
      <img src="/images/bg-triangle.svg" alt="Triangle" class="triangle">
      <div class="scissors-circle">
        <div class="inner-circle">
          <img src="/images/icon-scissors.svg" alt="Scissor" />
        </div>
      </div>
			
      <div class="rock-circle">
        <div class="inner-circle">
          <img src="/images/icon-rock.svg" alt="Rock" />
        </div>
      </div>
    </section>
</template>

<script setup>
import router from '../router';
import { useGameStore } from '../stores/game';


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
    .bar1 {
      width: 100px;
      height: 15px;
      background-color: hsl(237, 49%, 15%);
      position: absolute;
			left: 34%;
			top: 19%;
			z-index: -1;
    }
		.bar2 {
      width: 15px;
      height: 100px;
      background-color: hsl(237, 49%, 15%);
      position: absolute;
			left: 28%;
			top: 35%;
			rotate: -25deg;
			z-index: -1;
    }
		.bar3 {
      width: 15px;
      height: 100px;
      background-color: hsl(237, 49%, 15%);
      position: absolute;
			right: 35%;
			top: 40%;
			rotate: 25deg;
			z-index: -1;
    }
    .inner-circle {
      background-color: white;
      border-radius: 50%;
      width: 110px;
      height: 110px;
      box-shadow: rgb(213, 220, 225) 0 5px inset;
			
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -55px 0px 0px -54px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .paper-circle {
      background: var(--paper-gradient);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: rgb(60, 79, 175) 0px -5px inset;
			cursor: pointer;
      position: relative;
    }

    .scissors-circle {
      background: var(--scissors-gradient);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: rgb(158, 112, 26) 0px -5px inset;
			cursor: pointer;
      position: relative;
    }

    .rock-circle {
      background: var(--rock-gradient);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: rgb(145, 38, 58) 0px -5px inset;
			cursor: pointer;
      position: relative;
      top: 10%;
      left: 50%;
    }
  }

</style>