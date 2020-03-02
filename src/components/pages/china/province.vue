<template>
  <div class="dialog-box" v-if="show">
    <div class="dialog-cover">
      <div class="dialog-content">
        <div class="containder-fluid">
          <div class="row" style="border-bottom: 3px solid rgb(166, 148, 207);margin:0px">
            <div
              class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cate-title"
              v-for="item in category"
              :key="item"
            >{{item}}</div>
          </div>
           <div class="row" v-for="item in this.proData" :key="item.cityName" style="padding:0" > 
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:0">
                {{item.cityName}}
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:0">
                {{item.currentConfirmedCount}}
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:0">
                 {{item.confirmedCount}}
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:0">
                {{item.deadCount}}
            </div>
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
    proData:Array
  },
  data() {
    return {
      category: ["城市", "现存病例", "累计确诊", "死亡"]
    };
  }
};
</script>

<style lang="scss" scoped>
.dialog-box {
  position: relative;
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
    top: 20%;
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
    width: 100%;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    text-align: center;
    padding-left: 3px;
   .row{
       margin:0px;
   }
    .cate-title {
      padding: 0;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>