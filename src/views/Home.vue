<template>
  <main>

    <section>
      <div class="paper-circle">
        <div>
          <img src="/images/icon-paper.svg" alt="Paper" />
        </div>
      </div>

      <div class="scissors-circle">
        <img src="/images/icon-scissors.svg" alt="Paper" />
      </div>
    </section>
  </main>
	<PlayerComponent/>
</template>

<script setup>
import PlayerComponent from '../components/PlayerComponent.vue';

</script>

<style scoped lang="scss">
main {
  height: 100vh;

  .paper-circle {
    background: var(--paper-gradient);
    width: 100px;
    height: 100px;
    border-radius: 100px;
		box-shadow: 4px 4px inset;
    div {
      background-color: white;
      border-radius: 100px;
      width: 100px;
      height: 100px;
			box-shadow: rgb(213, 220, 225) 0 5px inset;
		

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .paper-circle {
    border: 20px solid hsl(230, 89%, 62%);
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
