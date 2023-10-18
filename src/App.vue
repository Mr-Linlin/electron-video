<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>
<style>
::-webkit-scrollbar {
  width: 0px; /* 设置滚动条宽度 */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* 设置滚动条背景颜色 */
}

::-webkit-scrollbar-thumb {
  background: #888; /* 设置滚动条滑块颜色 */
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* 设置滑块悬停时的颜色 */
}
</style>
