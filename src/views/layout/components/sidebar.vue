<template>
  <div class="menu px-5">
    <div
      class="nav-item text-lg font-sans font-semibold cursor-pointer h-12"
      v-for="(item, index) in menuList"
      :key="index"
      @click="selectPath(item.path)"
    >
      <span :class="{ active: index === 0 }">{{ item.name }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const menuList = ref([
  {
    path: '/',
    icon: 'home',
    name: '首页',
  },
  {
    path: '/',
    icon: 'home',
    name: '电影',
  },
  {
    path: '/',
    icon: 'home',
    name: '电视剧',
  },
  {
    path: '/',
    icon: 'home',
    name: '动漫',
  },
  {
    path: '/',
    icon: 'home',
    name: '综艺',
  },
]);
const selectPath = (path: any) => {
  router.push(path);
};
</script>
<style scoped lang="scss">
.nav-item {
  padding-left: 16px;

  .active {
    margin: 0 -16px 0 0;
    color: #f30 !important;
  }
  .active::before {
    border-radius: 0 20px;
    z-index: 11;
  }
}
</style>
