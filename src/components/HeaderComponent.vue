<template>
	<div class="header-container">
		<div>
			<img src="/public/logo.svg" width="100" height="60">
		</div>

		<div class="score">
			<span class="blue-text">Score</span>
			<span class="dark-text">{{gameStore.score}}</span>
		</div>
	</div>


</template>

<script setup>
import { useGameStore } from '../stores/game';


const gameStore = useGameStore()

</script>

<style lang="scss" scoped>
.header-container{
	max-width: 370px;
	margin: 1rem auto;
	padding: 1rem 1rem;
	border: 2px solid #606e85;
	border-radius: .4rem;

	display: flex;
	justify-content: space-between;

	div{
		display: flex;
		flex-direction: column;
	}


	.score{
		background-color: #fff;
		border-radius: .4rem;
		padding: .3rem 1rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.blue-text{
			text-transform: uppercase;
			font-size: .7rem;
			line-height: .6rem;
			letter-spacing: .1rem;
		}

		.dark-text{
			font-size: 2.2rem;
			line-height: 1.9rem;
			font-weight: 700;
		}
	}

}

@media screen and (max-width: 576px) {
	.header-container{
		margin: 1rem;
	}
}
</style>