<template>
  <div class="main">
    <button class="btn" @click="handleChangeTheme">切换主题</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const bol = ref<Boolean>(false);
const handleChangeTheme = () => {
  bol.value = !bol.value;
  if (bol.value) {
    document.body.className = 'dark';
  } else {
    document.body.className = '';
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  color: red;
  background: var(--theme-bg-color);
  .btn {
    color: var(--btn-color);
  }
}
</style>
