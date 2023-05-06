<template>
	<div class="container">
		<div class="game-title">
			<span>Rock</span>
			<span>Paper</span>
			<span>Scissors</span>
		</div>

		<div class="score">
			<span class="blue-text">Score</span>
			<span class="dark-text">10</span>
		</div>
	</div>


</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
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

	.game-title{
		color: #fff;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1rem;
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
			font-size: .5rem;
			line-height: .5rem;
			letter-spacing: .1rem;
		}

		.dark-text{
			font-size: 1.9rem;
			line-height: 1.8rem;
			font-weight: 700;
		}
	}

}

@media screen and (max-width: 576px) {
	.container{
		margin: 1rem;
	}
}
</style>