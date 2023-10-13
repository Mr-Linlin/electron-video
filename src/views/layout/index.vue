<template>
  <div class="layout">
    <div class="sidebar">
      <div class="logo flex justify-center mt-3">
        <img src="~@/assets/img/logo.png" alt="" srcset="" />
      </div>
      <sidebar />
    </div>
    <header class="flex items-center justify-between">
      <div class="search ml-6 flex items-center">
        <input
          v-model="data.keyWord"
          type="text"
          placeholder="搜索电影、电视剧、综艺、动漫"
          class="search-input"
        />
        <div class="mr-3">
          <el-icon><Search /></el-icon>
        </div>
      </div>
      <div class="setting mr-6 flex cursor-pointer text-white">
        <div>
          <el-icon @click="setWindow('Minimize')"><Minus /></el-icon>
        </div>
        <div class="mx-6" @click="setFullScreen">
          <el-icon><FullScreen /></el-icon>
        </div>
        <div>
          <el-icon @click="setWindow('CLosed')"><CloseBold /></el-icon>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { CloseBold, FullScreen, Minus, Search } from '@element-plus/icons-vue';
import ipcMainService from '@/service/IpcMainService';
import { reactive, ref } from 'vue';
import sidebar from './components/sidebar.vue';
const isScreen = ref(false);
const data = reactive({
  keyWord: '',
});
// 软件全屏
const setFullScreen = () => {
  isScreen.value = !isScreen.value;
  const type = isScreen.value ? 'Maximize' : 'WillResize';
  ipcMainService.sendIpcMsg({ type });
};
// 操作窗口
const setWindow = (type: String) => {
  ipcMainService.sendIpcMsg({ type });
};
</script>
<style scoped lang="scss">
.layout {
  color: #fff;
  background-color: rgb(26, 28, 31);
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background: #16161a;
    border-right: 1px solid #25252b;
    width: 200px;
    .logo {
      height: 64px;
      img {
        width: 118px;
        height: 44px;
      }
    }
  }
  header {
    position: fixed;
    top: 0;
    left: 200px;
    z-index: 10;
    width: calc(100% - 200px);
    height: 64px;
    background-color: #1a1c1f;
    .search {
      width: 100%;
      max-width: 380px;
      height: 40px;
      position: relative;
      height: 40px;
      border-radius: 8px;
      background: #ffffff14;
      .search-input {
        height: 100%;
        width: 100%;
        padding: 0 15px;
        flex: 1;
        display: flex;
      }
      input,
      button,
      textarea,
      select {
        outline: none;
        resize: none;
        border: none;
        -webkit-appearance: none;
        appearance: none;
        background: 0 0;
        color: inherit;
        font: inherit;
      }
    }
  }
  main {
    position: fixed;
    top: 64px;
    left: 200px;
    bottom: 0;
    z-index: 10;
    width: calc(100% - 200px);
    background-color: #1a1c1f;
    padding: 25px;
  }
}
</style>
