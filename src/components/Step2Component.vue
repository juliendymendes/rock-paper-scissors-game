<template>
  <section>
    <div>
      <p>You picked</p>
      <ScissorsComponent />
    </div>

    <div>
      <p>The house picked</p>
      <RockComponent />
    </div>
  </section>
</template>

<script setup>
import ScissorsComponent from "./ScissorsComponent.vue";
import RockComponent from "./RockComponent.vue";
import CircleSkeleton from "./CircleSkeleton.vue";
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  margin: 85px auto 0px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: white;
      text-transform: uppercase;
      font-size: 21px;
      margin-bottom: 32px;
    }
  }
}
</style>
