<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(item,index) in this.list" :key="index">
          <!-- 标题 -->
          <div class="title-box">
            <img src alt />
            <div class="seal">
              <img src="@/assets/img/badge.png" alt />
            </div>
            <div class="left">
              <img src="@/assets/icon/左上.png" />
              <span>{{index+1}}</span>
            </div>
            <div>
              <img class="title" src="@/assets/img/yaoyanTxt.png" alt />
              <div class="contion">
                <p class="contion-nav">{{item.title}}</p>
              </div>
            </div>
          </div>
          <!-- 内容 -->
          <div class="content-box">
            <div>
              <p>{{item.mainSummary}}</p>
            </div>
            <div class="content-txt">{{item.body}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIndexRumorList } from "@/api/data";
import Swiper from "swiper";
import "@/assets/css/swiper.min.css";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      getIndexRumorList().then(res => {
        console.log(res);
        this.list = res.data;
        var mySwiper = new Swiper(".swiper-container", {
          effect: "coverflow",
          slidesPerView: 1.3,
          centeredSlides: true,
          loop: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  .swiper-slide {
    height: 450px;
    background: #fff;
    border-radius: 20px;
    margin: 5px auto;
    overflow: hidden;

    box-shadow: 1px 2px 2px #928989;
  }
  .title-box {
    position: relative;
    padding: 10px;
    height: 35%;
    background: #2834b9;
    color: #fff;
    border-radius: 20px 20px 0 0;
    img {
      position: absolute;
    }
  }
  .title {
    left: 25px;
    top: 40px;
    width: 95px;
    height: 45px;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    span {
      position: absolute;
      display: inline-block;
      font-size: 20px;
      font-weight: 700;
      top: 5px;
      left: 15px;
    }
  }
  .contion {
    width: 220px;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
    position: absolute;
    bottom: 5px;
    left: 25px;
    font-size: 18px;
    font-weight: 700;
  }
  .seal {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 60px;
    bottom: 45px;
    z-index: 10;
    img {
      width: 100%;
    }
  }
  .content-box {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
    padding: 10px;
    p {
      color: #333;
      font-weight: 700;
      font-size: 16px;
    }
    .content-txt {
      color: #666;
      font-size: 1.2rem;
      margin: 0 0 4px;
      padding-right: 5px;
    }
  }
}
</style>