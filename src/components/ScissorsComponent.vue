<template>
  <div class="scissors-circle">
    <div class="inner-circle">
      <img src="/images/icon-scissors.svg" alt="Scissor" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.scissors-circle {
  background: var(--scissors-gradient);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: rgb(158, 112, 26) 0px -5px inset;
  cursor: pointer;
  position: relative;
}
</style>
