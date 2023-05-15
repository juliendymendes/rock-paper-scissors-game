<template>
	<div class="results-container">

		<div class="container">
			<p>You picked</p>
			<div class="scissors-gradient">
				<img src="/public/icon-scissors.svg" alt="Scissors" height="50" width="50">
			</div>

		</div>

		<div class="result">
			<p>You lose</p>
			<button type="button">Play again</button>
		</div>

		<div class="container"> 
			<p>The house picked</p>
			<div class="rock-gradient" @click="setPlayerChoice(1)">
				<img src="/public/icon-rock.svg" alt="Rock" height="50" width="50">
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.results-container{
	display: flex;
	justify-content: space-around;
	margin-top: 5rem;

	.container{
		color: #fff;
		text-transform: uppercase;
		letter-spacing: .2rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		p{
			margin-bottom: 1rem;
			font-size: 1.3rem;
		}
	}

	.result{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p{
			color: #fff;
			text-transform: uppercase;
			font-size: 3rem;
			font-weight: 700;
		}

		button{
			background: #fff;
			border: none;
			width: 220px;
			padding-top: .8rem;
			padding-bottom: .8rem;
			border-radius: 5px;
			font-family: 'Barlow Semi Condensed', sans-serif;
			letter-spacing: .1rem;
			text-transform: uppercase;
			cursor: pointer;
			margin-top: 1rem;
		}

		button:hover{
			color: rgb(220, 46, 78);
		}
	}

	.scissors-gradient, .rock-gradient{
		width: 40px;
		padding: 3rem 3.2rem;
	
		border: .8rem solid transparent;
		
		border-radius: 100px;
	
		display: flex;
		justify-content: center;
		align-items: center;
	}
}


</style>