<template>
  <div class="box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in this.list" :key="index">
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
    <div>
      <div class="protect-box">
        <div class="title">
          <i>
            <svg
              t="1584000181207"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1826"
              width="32"
              height="32"
            >
              <path
                d="M468.650667 948.565333h-10.922667l-338.261333-47.786666a99.669333 99.669333 0 0 1-90.794667-94.549334V191.146667a90.112 90.112 0 0 1 32.085333-68.266667 115.712 115.712 0 0 1 92.501334-26.282667L448.170667 136.533333a99.669333 99.669333 0 0 1 91.136 95.573334v651.605333a62.805333 62.805333 0 0 1-21.845334 47.104 74.069333 74.069333 0 0 1-48.810666 17.749333z m0-68.266666a9.557333 9.557333 0 0 0 4.096 0V232.106667c0-12.970667-13.994667-24.576-32.085334-26.965334l-296.96-40.96a48.810667 48.810667 0 0 0-38.229333 10.24 23.210667 23.210667 0 0 0-8.874667 17.066667v614.4c0 12.970667 13.994667 24.576 32.085334 26.965333z"
                fill="#bfbfbf"
                p-id="1827"
              />
              <path
                d="M544.085333 948.565333a74.069333 74.069333 0 0 1-48.810666-17.749333 62.805333 62.805333 0 0 1-21.845334-47.104V232.106667A99.669333 99.669333 0 0 1 564.565333 136.533333l294.912-40.96a115.712 115.712 0 0 1 92.501334 26.282667 90.112 90.112 0 0 1 32.085333 68.266667v614.4a99.669333 99.669333 0 0 1-91.136 94.549333l-337.92 47.104z m-2.389333-68.266666a9.557333 9.557333 0 0 0 4.096 0l337.92-47.104c18.432-2.730667 32.085333-14.336 32.085333-26.965334V191.146667a22.869333 22.869333 0 0 0-8.874666-17.066667 48.469333 48.469333 0 0 0-38.229334-10.24L573.781333 204.8c-18.432 2.730667-32.085333 14.336-32.085333 26.965333z"
                fill="#bfbfbf"
                p-id="1828"
              />
              <path
                d="M593.613655 401.209011m31.521352-3.753114l208.108715-24.778625q31.521353-3.753114 35.274467 27.768239l0.564985 4.74515q3.753114 31.521353-27.768238 35.274466l-208.108716 24.778625q-31.521353 3.753114-35.274466-27.768239l-0.564985-4.74515q-3.753114-31.521353 27.768238-35.274466Z"
                fill="#bfbfbf"
                p-id="1829"
              />
              <path
                d="M593.754286 570.013725m31.521352-3.753114l208.108715-24.778624q31.521353-3.753114 35.274467 27.768239l0.564985 4.745149q3.753114 31.521353-27.768239 35.274467l-208.108715 24.778624q-31.521353 3.753114-35.274466-27.768238l-0.564985-4.74515q-3.753114-31.521353 27.768238-35.274467Z"
                fill="#bfbfbf"
                p-id="1830"
              />
              <path
                d="M154.558482 538.75513m31.521353 3.753115l208.108715 24.778624q31.521353 3.753114 27.768238 35.274467l-0.564985 4.745149q-3.753114 31.521353-35.274466 27.768239l-208.108715-24.778624q-31.521353-3.753114-27.768239-35.274467l0.564985-4.74515q3.753114-31.521353 35.274467-27.768238Z"
                fill="#bfbfbf"
                p-id="1831"
              />
              <path
                d="M154.354479 370.298503m31.521352 3.753114l208.108715 24.778625q31.521353 3.753114 27.768239 35.274467l-0.564985 4.745149q-3.753114 31.521353-35.274467 27.768239l-208.108715-24.778624q-31.521353-3.753114-27.768239-35.274467l0.564985-4.74515q3.753114-31.521353 35.274467-27.768239Z"
                fill="#bfbfbf"
                p-id="1832"
              />
            </svg>
          </i>
          <span>防护知识合辑</span>
        </div>
        <div class="content" v-for="item in this.Recomme" :key="item.id">
          <div class="left">
            <p>
              <i v-if="item.contentType == '家有小孩'">{{item.contentType}}</i>
              <i v-else style="background:#4169e2">{{item.contentType}}</i>
              {{item.title}}
            </p>
            <div class="time">{{item.createTime}}</div>
          </div>
          <div class="right">
            <img :src="item.imgUrl" alt />
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import { getIndexRumorList, getIndexRecommendList } from "@/api/data";
import { timetrans } from "@/assets/js/timesTotime";
import Swiper from "swiper";
import "@/assets/css/swiper.min.css";
export default {
  data() {
    return {
      list: [],
      Recomme: [],
      loading: false
    };
  },
  created() {
    this.getlist();
    this.getrem();
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      slidesPerView: 1.3,
      centeredSlides: true,
      loop: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  },
  methods: {
    getlist() {
      this.loading = true;
      getIndexRumorList()
        .then(res => {
          this.list = res.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    getrem() {
      this.loading = true;
      getIndexRecommendList()
        .then(res => {
          this.Recomme = res.data;
          for (const key in this.Recomme) {
            switch (this.Recomme[key].contentType) {
              case 1 || "1":
                this.Recomme[key].contentType = "我要出行";
                break;
              case 2 || "2":
                this.Recomme[key].contentType = "家有小孩";
                break;
              default:
                this.Recomme[key].contentType = "我宅在家";
                break;
            }
            this.Recomme[key].createTime = timetrans(
              this.Recomme[key].createTime
            );
          }
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
i {
  font-style: normal;
}
.box {
  padding: 10px 0;
  background: #f7f7f7;
}
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
.protect-box {
  margin-top: 20px;
  width: 100%;
  background: #f7f7f7;
  text-align: left;
  padding-bottom: 50px;
  .title {
    position: relative;
    padding: 10px;
    height: 50px;
    line-height: 30px;
    background: #ffff;
    i {
      position: absolute;
      left: 20px;
      top: 10px;
    }
    span {
      position: absolute;
      left: 65px;
      top: 10px;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .content {
    position: relative;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    height: 115px;
    background: #fff;
    i {
      display: inline-block;
      background-color: #eb89c8;
      padding: 3px;
      font-size: 12px;
      color: #fff;
      border-radius: 3px;
    }
    p {
      color: #333;
      font-size: 16px;
    }
    .left {
      display: inline-block;
      width: 65%;
      height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //2行
      -webkit-box-orient: vertical;
    }
    .right {
      display: inline-block;
      width: 113px;
      position: absolute;
      top: 10px;
      right: 10px;
      img {
        width: 100%;
      }
    }
    .time {
      color: #999;
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }
}
</style>