<template>
  <div class="home">
    <div class="banner">
      <el-carousel :interval="4000" type="card" :height="height">
        <el-carousel-item
          v-for="(item, index) in bannerList"
          :key="index"
          @click="onDetail(item.id)"
        >
          <img :src="item.url" alt="" srcset="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-wrap">
      <div class="info-item my-10" v-for="item in homeInfo" :key="item.id">
        <div class="header flex justify-between items-center h-20">
          <div class="title cursor-pointer text-3xl font-extrabold font-mono">
            {{ item.title }}
          </div>
          <div class="move cursor-pointer text-gray-500 mr-3">更多</div>
        </div>
        <div class="content flex flex-wrap">
          <div class="box-item text-center" v-for="v in item.list" :key="v.id">
            <img :src="v.img" alt="" />
            <p class="mt-3">{{ v.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import img from '@/assets/img/test.jpg';

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
const homeInfo = reactive([
  {
    title: '电视剧',
    move: 1,
    id: 1,
    list: [
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156254',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156255',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156256',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156257',
      },
    ],
  },
  {
    title: '电影',
    move: 1,
    id: 2,
    list: [
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156254',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156255',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156256',
      },
      {
        name: '长风渡',
        img,
        score: '4.3',
        id: '156257',
      },
    ],
  },
  {
    title: '动漫',
    move: 1,
    id: 3,
    list: [
      {
        name: '海贼王',
        img: 'https://img.liangzipic.com/upload/vod/20230606-1/b8b6ef574e6df761eef30665bc2d66d9.jpg',
        score: '4.3',
        id: '156254',
      },
      {
        name: '斗破苍穹',
        img,
        score: '4.3',
        id: '156255',
      },
      {
        name: '完美世界',
        img,
        score: '4.3',
        id: '156256',
      },
      {
        name: '斗罗大陆',
        img,
        score: '4.3',
        id: '156257',
      },
    ],
  },
  {
    title: '综艺',
    move: 1,
    id: 3,
    list: [
      {
        name: '海贼王',
        img,
        score: '4.3',
        id: '156254',
      },
      {
        name: '斗破苍穹',
        img,
        score: '4.3',
        id: '156255',
      },
      {
        name: '完美世界',
        img,
        score: '4.3',
        id: '156256',
      },
      {
        name: '斗罗大陆',
        img,
        score: '4.3',
        id: '156257',
      },
    ],
  },
]);
const height = ref('');
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
const handleResize = () => {
  // 处理窗口大小变化的逻辑
  if (window.innerWidth > 1600) {
    height.value = '380px';
  } else if (window.innerWidth < 800) {
    height.value = '100px';
  } else {
    height.value = '200px';
  }
};
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
  height: 100%;
  overflow-y: auto;
  .banner {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .main-wrap {
    // margin-bottom: 100px;
    .info-item {
      .header {
        .title:hover {
          color: #e50914;
        }
      }
      .content {
        .box-item {
          width: calc(12.5% - 18px);
          margin-right: 1rem;
          margin-bottom: 1rem;
          height: auto;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }
          img:hover {
            height: 101%;
            width: 101%;
          }
        }
      }
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
