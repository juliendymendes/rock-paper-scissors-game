<template>
  <main>
    <section class="score-container">
      <h1>Rock<br />Paper<br />Scissors</h1>
      <div class="score">
        <p>Score</p>
        <p>12</p>
      </div>
    </section>

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
  .score-container {
    margin: 0 auto;
    max-width: 500px;
    border: 1px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    padding: 0 20px;
    margin-top: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: white;
      font-weight: 700;
      font-size: 27px;
      line-height: 27px;
      text-transform: uppercase;
    }
    .score {
      background-color: white;
      width: 110px;
      height: 40%;
      border-radius: 8px;
      padding: 10px 0;
      text-align: center;
      color: var(--dark-text);

      p {
        margin: 0;
        text-transform: uppercase;
        font-size: 44px;
        font-weight: 700;
      }

      :first-child {
        color: var(--blue-text);
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 2px;
      }
    }
  }

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
