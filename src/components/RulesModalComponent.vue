<template>
  <dialog>
    <div class="modal-header">
      <button>Fechar</button>
      <p>Rules</p>
    </div>
    <img src="/images/image-rules.svg" alt="Rules" width="280" />
  </dialog>
</template>

<script setup></script>

<style lang="scss" scoped>
dialog {
  background-color: white;
  border-radius: 12px;
  border: none;
  width: 400px;
  height: 400px;
  margin: auto;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;
    margin-bottom: 38px;

    p {
      align-self: flex-start;
      margin-left: 32px;
      font-size: 28px;
      text-transform: uppercase;
      color: var(--dark);
    }

    button {
      border: none;
      background-color: transparent;
      background-image: url("/images/icon-close.svg");
      background-repeat: no-repeat;
      color: transparent;
      width: 20px;
      height: 20px;
      align-self: flex-end;
      margin-right: 32px;
    }
  }
}
</style>
