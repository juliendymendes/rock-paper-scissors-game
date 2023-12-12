<template>
  <div class="circle-skeleton"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.circle-skeleton {
  background-color: hsl(214, 92%, 15%);
  width: 140px;
  height: 140px;
  border-radius: 50%;

	animation-name: pulse;
	animation-duration: 2s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes pulse {
  0% {
		transform: scale(0.85);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.85);
	}
}
</style>
