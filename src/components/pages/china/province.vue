<template>
  <div class="dialog-box" v-if="show">
    <div class="dialog-cover">
      <div class="dialog-content">
        <div>
            <i class="glyphicon glyphicon-remove font" @click="outIn"></i>
        </div>
        <div class="containder-fluid">
          <div class="row title" style="border-bottom: 3px solid rgb(166, 148, 207);margin:0px">
            <div
              class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cate-title"
              v-for="item in category"
              :key="item"
            >{{item}}</div>
          </div>
          <div
            class="row nav"
            v-for="item in this.proData"
            :key="item.cityName"
            :style="'background-color:'+item.color"
          >
            <div
              class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cityName"
              style="padding:0"
              :title="item.cityName"
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
           <div>
     </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        }
      }
    }
  },
  data() {
    return {
      category: ["城市", "现存病例", "累计确诊", "死亡"]
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
    outIn() {
      this.$emit("changes");
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-box {
  color: #2e2c2d;
  font-size: 16px;
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
    top: 15%;
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
    padding-left: 3px;
    height: 500px;
    overflow: scroll;
    .row {
      margin: 0px;
    }
    .nav {
      border-bottom: 0.5px solid #ccc;
      padding: 0;
      height: 40px;
      line-height: 40px;
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
  .font{
      width: 50px;
      height: 50px;
      line-height: 50px;
      border:1px solid #fff;
      border-radius: 50%;
      font-size: 26px;
      position: absolute;
      z-index: 999999;
      color: #fff;
      top: -50px;
      left: 0;
      right: 0;
      margin:0 auto;
      cursor:pointer;
  }
}
</style>