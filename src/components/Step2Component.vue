<template>
	<section>
		
      <ScissorsComponent/>
			<RockComponent/>
   
	</section>
</template>

<script setup>
import ScissorsComponent from './ScissorsComponent.vue'
import RockComponent from './RockComponent.vue'
</script>

<style lang="scss" scoped>
section{
	display: grid;
	grid-template-columns: repeat(2, 180px);
	width: fit-content;
	margin: 0 auto;
	position: relative;
}
</style>