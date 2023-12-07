<template>
  <div class="paper-circle">
    <div class="inner-circle">
      <img src="/images/icon-paper.svg" alt="Paper" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.paper-circle {
  background: var(--paper-gradient);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: rgb(60, 79, 175) 0px -5px inset;
  cursor: pointer;
  position: relative;
}
</style>
