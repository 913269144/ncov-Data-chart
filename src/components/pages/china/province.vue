<template>
  <div class="dialog-box" v-if="show" @click="outIn()">
    <div class="dialog-cover">
      <div class="dialog-content">
        <div></div>
        <div class="containder-fluid" @click.stop="setIn()">
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
    },
    //防止冒泡占位
    setIn(){

    },
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
     border-radius: 15px;
     overflow: hidden;
    width: 100%;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    text-align: center;
    .row {
      margin: 0px;
    }
    .nav-box {
      height: 420px;
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

</style>