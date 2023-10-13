<template>
  <div class="home">
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item
          v-for="(item, index) in bannerList"
          :key="index"
          @click="onDetail(item.id)"
        >
          <img :src="item.url" alt="" srcset="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const bannerList = reactive([
  {
    url: 'https://1vimg.hitv.com/100/2307/2818/1840/ZErDNyq0YW7I/8pqYAK.jpg',
    id: '156255',
  },
  {
    url: 'https://p.sda1.dev/9/493da6aa49302d66525bf4d132f8476c/625fc574672ba.jpg',
    id: '156255',
  },
  {
    url: 'https://images.weserv.nl/?url=https://pic1.iqiyipic.com/lequ/common/lego/20230617/6c9f77af269f4a4d80ff2daa640b517e.jpg',
    id: '156255',
  },
  {
    url: 'https://puui.qpic.cn/tv/0/1250167449_1920800/0',
    id: '156255',
  },
]);
const onDetail = (id: any) => {
  router.push({
    path: '/detail',
    query: {
      id,
    },
  });
};
</script>
<style scoped lang="scss">
.home {
  .banner {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
  min-width: 836px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
