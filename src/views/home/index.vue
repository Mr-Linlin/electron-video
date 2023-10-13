<template>
  <div class="home">
    <div class="sidebar">
      <div class="logo flex justify-center mt-3">
        <img src="~@/assets/img/logo.png" alt="" srcset="" />
      </div>
    </div>
    <header class="flex items-center justify-between">
      <div class="search ml-6">搜索栏</div>
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
  </div>
</template>
<script lang="ts" setup>
import { CloseBold, FullScreen, Minus } from '@element-plus/icons-vue';
import ipcMainService from '@/service/IpcMainService';
import { ref } from 'vue';
const isScreen = ref(false);
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
.home {
  color: #fff;
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
      height: 100%;
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
    .logo {
      height: 100%;
      img {
        width: 118px;
        height: 44px;
      }
    }
  }
}
</style>
