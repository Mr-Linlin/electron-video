<template>
  <div class="detail">
    <div class="flex">
      <div id="mse">
        <vue3VideoPlay v-bind="options" />
      </div>
      <div class="info-wrap flex-1 flex flex-col">
        <div class="payer-info">
          <h1 class="text-3xl font-extrabold font-mono relative">
            {{ vedioInfo.name }}
            <i></i>
          </h1>
          <div class="flex my-3">
            <span class="btn">{{ vedioInfo.createTime }}</span>
            <span class="btn">{{ vedioInfo.area }}</span>
            <span class="btn">{{ vedioInfo.vedio_type }}</span>
          </div>
          <p>选集播放</p>
        </div>
        <div class="selection-box flex-1">
          <div class="flex flex-wrap">
            <div
              class="selection-item my-1"
              :class="{ active: index === 0 }"
              v-for="(item, index) in vedioInfo.selections"
              :key="item.id"
            >
              <span class="btn">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, onBeforeUnmount } from 'vue';
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
const options = reactive({
  type: 'm3u8',
  width: window.innerWidth / 1.8 + 'px', //播放器高度
  height: '450px', //播放器高度
  color: '#99a9bf', //主题色
  title: '', //视频名称
  src: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8', //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
});
// 视频内容
const vedioInfo = reactive({
  name: '长风渡',
  createTime: '2023',
  vedio_type: '古装',
  area: '大陆',
  introduction: '',
  selections: [
    {
      id: 1,
      title: '第01集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 2,
      title: '第02集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 3,
      title: '第03集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 4,
      title: '第04集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 5,
      title: '第05集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 6,
      title: '第06集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 1,
      title: '第01集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 2,
      title: '第02集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 3,
      title: '第03集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 4,
      title: '第04集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 5,
      title: '第05集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 6,
      title: '第06集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 1,
      title: '第01集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 2,
      title: '第02集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 3,
      title: '第03集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 4,
      title: '第04集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 5,
      title: '第05集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 6,
      title: '第06集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 1,
      title: '第01集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 2,
      title: '第02集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 3,
      title: '第03集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 4,
      title: '第04集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 5,
      title: '第05集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
    {
      id: 6,
      title: '第06集',
      url: 'https://hd.lz-cdn18.com/20230618/3450_afaff38f/2000k/hls/mixed.m3u8',
    },
  ],
});
const handleResize = () => {
  // 处理窗口大小变化的逻辑
  if (window.innerWidth / 1.8 > 1100) {
    options.width = '1080px';
  } else {
    options.width = window.innerWidth / 1.8 + `px`;
  }
  // console.log('窗口发生变化', options.width);
};
</script>
<style scoped lang="scss">
.detail {
  .info-wrap {
    height: 450px;
    // background-color: red;
    margin-left: -2px;
    .payer-info {
      padding: 1.3rem;
      padding-bottom: 0.75rem;
      position: relative;
      background: #25252b;
      h1 {
        i {
          position: absolute;
          left: -18px;
          height: 40px;
          width: 5px;
          background: #e50914;
          border-radius: 0 4px 4px 0;
        }
      }
      .btn {
        margin-right: 10px;
        padding: 0 10px;
        line-height: 30px;
        height: 30px;
        font-size: 13px;
        border-radius: 8px;
        display: inline-block;
        border: 1px solid rgba(#ccc, 0.3);
        cursor: pointer;
      }
    }
    .selection-box {
      padding: 1.3rem;
      background-color: rgb(22, 22, 26);
      overflow-y: auto;
      .selection-item {
        .btn {
          margin-right: 10px;
          padding: 0 20px;
          line-height: 30px;
          height: 30px;
          font-size: 13px;
          border-radius: 8px;
          display: inline-block;
          border: 1px solid rgba(#ccc, 0.3);
          cursor: pointer;
        }
      }
      .selection-item:hover {
        color: #e50914;
      }
      .active {
        color: #e50914;
      }
    }
  }
}
</style>
