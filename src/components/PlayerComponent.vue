<template>
	<div class="player-container">
		
		<div class="paper-gradient">
			<img src="/public/icon-paper.svg" alt="Paper" height="40" width="40">
		</div>

		<div class="scissors-gradient">
			<img src="/public/icon-scissors.svg" alt="Scissors" height="40" width="40">
		</div>


		<div class="rock-gradient">
			<img src="/public/icon-rock.svg" alt="Rock" height="40" width="40">
		</div>

		<!--<div class="spock-gradient">
			<img src="/public/icon-spock.svg" alt="Spock" height="40" width="40">
		</div>

		<div class="lizard-gradient">
			<img src="/public/icon-lizard.svg" alt="Spock" height="40" width="40">
		</div>-->
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.player-container{
		background: url('/public/bg-triangle.svg') no-repeat;
		background-position: center;
		margin-top: 2rem;
		background-size: 180px;


		.paper-gradient, .scissors-gradient, .rock-gradient{
			width: 40px;
			padding: 1.4rem;
		
			border: 9px solid transparent;
			
			border-radius: 100px;
	
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.rock-gradient{
			position: relative;
			left: 330px;
		}

		.paper-gradient{
			position: absolute;
			top: 140px;
			left: 280px;
		}

		.scissors-gradient{
			position: relative;
			left: 400px;
		}
	
	}
	

	@media screen and (max-width: 374px) {
		.player-container{
			.rock-gradient{
				position: relative;
				left: 100px ;
			}
	
			.paper-gradient{
				left: 40px;
			}
	
			.scissors-gradient{
				left: 180px;
			}
		}
	}

	@media screen and (min-width: 375px) and (max-width: 425px) {
		.player-container{
			background-position: 100px;
			.rock-gradient{
				left: 140px;
			}
	
			.paper-gradient{
				left: 80px;
			}
	
			.scissors-gradient{
				left: 215px;
			}
		}
	}



	@media screen and (min-width: 1024px) {
		.player-container{
			.rock-gradient{
				left: 485px;
			}
	
			.paper-gradient{
				left: 420px;
			}
	
			.scissors-gradient{
				left: 550px;
			}
		}
	}

	@media screen and (min-width: 1440px) {
		.player-container{
			.rock-gradient{
				left: 590px;
			}
	
			.paper-gradient{
				left: 630px;
			}
	
			.scissors-gradient{
				left: 660px;
			}
		}
	}

</style>