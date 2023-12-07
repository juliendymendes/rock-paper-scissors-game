<template>
	<div class="header-container">
		<div>
			<img src="/images/logo.svg" width="100" height="60">
		</div>

		<div class="score">
			<p>Score</p>
			<p>{{gameStore.score}}</p>
		</div>
	</div>


</template>

<script setup>
import { useGameStore } from '../stores/game';

const gameStore = useGameStore()

</script>

<style lang="scss" scoped>
.header-container{
	max-width: 400px;
	margin: 40px auto;
	padding: 16px;
	border: 2px solid #606e85;
	border-radius: 7px;

	display: flex;
	justify-content: space-between;

	div{
		display: flex;
		flex-direction: column;
	}

	.score{
		background-color: #fff;
		border-radius: 7px;
		padding: 5px 16px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		:first-child{
			color: var(--blue);
			text-transform: uppercase;
			font-size: 12px;
			line-height: 9px;
			letter-spacing: 2px;
		}

		p{
			color: var(--dark);
			font-size: 35px;
			line-height: 30px;
			font-weight: 700;
		}
	}

}

@media screen and (max-width: 576px) {
	.header-container{
		margin: 16px;
	}
}
</style>