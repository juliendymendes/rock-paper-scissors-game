<template>
  <div class="rock-circle">
    <div class="inner-circle">
      <img src="/images/icon-rock.svg" alt="Rock" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rock-circle {
  background: var(--rock-gradient);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: rgb(145, 38, 58) 0px -5px inset;
  cursor: pointer;
  position: relative;
}
</style>
