<template>
  <div class="dialog-box" v-if="show">
    <div class="dialog-cover">
      <div class="dialog-content">
        <div></div>
        <div class="containder-fluid">
          <div class="row title" style="border-bottom: 3px solid rgb(166, 148, 207);margin:0px">
            <div
              class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cate-title"
              v-for="item in category"
              :key="item"
            >{{item}}</div>
          </div>
          <!-- 城市 -->
          <div class="nav-box">
            <div
              class="row nav"
              v-for="item in this.proData"
              :key="item.cityName"
              :style="'padding-left:3px;background-color:'+item.color"
            >
              <div
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cityName"
                style="padding:0"
              >{{item.cityName}}</div>
              <div
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
                style="padding:0"
              >{{item.currentConfirmedCount}}</div>
              <div
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
                style="padding:0"
              >{{item.confirmedCount}}</div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:0">{{item.deadCount}}</div>
            </div>
            <div
              style="height:50px;line-height:50px;font-size:12px;font-weight:700;color:#c6c6c6"
            >暂无更多数据....</div>
          </div>
        </div>
        <svg
          t="1583208032271"
          @click="outIn"
          class="icon font"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1187"
          width="48"
          height="48"><path
            d="M512 1023.998046A511.999023 511.999023 0 0 1 312.610948 41.080156a511.999023 511.999023 0 0 1 398.778104 942.839689 508.993158 508.993158 0 0 1-199.389052 40.078201z m0-943.841643C273.534702 80.156403 80.15738 274.53568 80.15738 511.999023s193.377322 431.84262 431.84262 431.84262 431.84262-193.377322 431.84262-431.84262S749.463343 80.156403 512 80.156403z"
            fill="#dbdbdb"
            p-id="1188"
          />
          <path
            d="M320.626588 743.450636a40.078201 40.078201 0 0 1-28.054741-68.132942l381.744869-381.744869a40.383798 40.383798 0 0 1 57.111437 57.111437L349.683284 731.427176a40.078201 40.078201 0 0 1-29.056696 12.02346z"
            fill="#dbdbdb"
            p-id="1189"
          />
          <path
            d="M702.371457 743.450636a40.078201 40.078201 0 0 1-28.054741-12.02346L292.571847 349.682307a40.383798 40.383798 0 0 1 57.111437-57.111437l380.742914 382.746824a40.078201 40.078201 0 0 1-28.054741 68.132942z"
            fill="#dbdbdb"
            p-id="1190"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
require("echarts/map/js/province/hubei");
export default {
  props: {
    show: Boolean,
    proData: Array
  },
  watch: {
    show: {
      handler(newValue, oldValue) {
        if (this.show == true) {
          this.getNewData();
          this.stop();
        } else {
          this.move();
        }
      }
    }
  },
  data() {
    return {
      category: ["城市", "现存病例", "累计确诊", "死亡"],
      option: {}
    };
  },
  methods: {
    getNewData() {
      for (const key in this.proData) {
        if (key % 2 == 0) {
          this.proData[key].color = "#eee";
        } else {
          this.proData[key].color = "#fff";
        }
      }
      this.proData;
    },
    //退出
    outIn() {
      this.$emit("changes");
    },
    //限制滑屏
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    //恢复滑屏
    move() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-box {
  color: #2e2c2d;
  font-size: 16px;
  -webkit-overflow-scrolling: touch;
  .dialog-cover {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    position: fixed;
    font-size: 20px;
    color: #000;
    top: 10%;
    // 移动端使用felx布局
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 100%;
    padding: 20px;
  }
  .containder-fluid {
    position: relative;
    width: 100%;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    text-align: center;
    .row {
      margin: 0px;
    }
    .nav-box {
      height: 520px;
      overflow: scroll;
      .nav {
        border-bottom: 0.5px solid #ccc;
        padding: 0;
        height: 40px;
        line-height: 40px;
      }
    }

    .title {
      div {
        height: 50px;
        line-height: 50px;
      }
    }
    .cityName {
      white-space: nowrap; /* 使文本不可换行 */
      overflow: hidden; /* 隐藏溢出部分 */
      text-overflow: ellipsis;
    }

    .cate-title {
      padding: 0;
      height: 30px;
      line-height: 30px;
    }
  }
}
.font {
  margin-top: 15px;
}
::-webkit-scrollbar {
  display: none;
}
</style>