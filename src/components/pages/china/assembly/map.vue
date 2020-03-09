<template>
  <div>
    <!-- 国内疫情地图 -->
    <div>
      <div class="title">{{type}}</div>
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="slide-box">
                    <div id="main" style="height:300px"></div>
                   <div class="type-value">
                       <img src="@/assets/img/value.png" alt="">
                   </div>
              </div>
          </div>
          <div class="swiper-slide">
              <div class="slide-box">
                  <div id="mainTwo" style="height:300px"></div>
              </div>
               <div class="type-value">
                       <img src="@/assets/img/value.png" alt="">
                </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("echarts/map/js/china.js");
require("echarts/map/js/province/hubei");
import Swiper from "swiper";
import "@/assets/css/swiper.min.css";
export default {
  props: {
    //  省份数据
    ProvinceList: Array,
    //  城市数据
    City: Array
  },
  data(){
      return{
          type:'国内疫情地图',
          icon:[
              {
                  value:'0',
                  color:''
              }
          ]
      }
  },
  watch: {
    City: function(newValue, oldValue) {
      if (this.City) {
        var that = this
        var mySwiper = new Swiper(".swiper-container", {
        on: {
          slideChangeTransitionEnd: function () {
              if(this.activeIndex ==0){
                  that.type = '国内疫情地图'
              }else {
                  that.type = '湖北省疫情地图'
              }
          }
        }
        });
        var myChartTwo = this.$echarts.init(document.getElementById("mainTwo"));
        this.hube = {
          //表单类型
          series: [
            {
              type: "map",
              map: "湖北",
              left: "center",

              data: newValue,
              roam: false, //是否开启鼠标缩放和平移漫游
              zoom: 1.2,
              label: {
                // 覆盖物设置
                show: true,
                color: "#000",
                fontSize: this.fontSize(0.16)
              }
            }
          ],
          //提示框
          tooltip: {
            //提示框组件。
            formatter: function(params) {
              return (
                "城市: " +
                params.name +
                "<br/>现存确诊: " +
                params.value +
                "<br/>治愈: " +
                params.data.curedCount +
                "<br/>死亡: " +
                params.data.deadCount
              );
            }
          },
          visualMap: [
            {
              type: "piecewise",
              pieces: [
                { gt: 10000 },
                { gt: 1000, lte: 9999 },
                { gt: 100, lte: 999 },
                { gt: 10, lte: 99 },
                { gt: 0, lte: 9 }
              ],
              show: false,
              // bottom: "center",
              inRange: {
                color: ["#fdebcf", "#f59e83", "#e55a4e", "#cb2a2f", "#811c24"]
              }
            }
          ]
        };
        myChartTwo.setOption(this.hube);
      }
    },
    ProvinceList: function(newValue, oldValue) {
      if (this.ProvinceList) {
        var myChart = this.$echarts.init(document.getElementById("main"));
        this.china = {
          //表单类型
          series: [
            {
              type: "map",
              map: "china",
              left: "center",
              data: this.ProvinceList,
              roam: false, //是否开启鼠标缩放和平移漫游
              zoom: 1.2,
              label: {
                // 覆盖物设置
                show: true,
                color: "#000",
                fontSize: this.fontSize(0.16)
              }
            }
          ],
          backgroundColor:'#f7f7f7',
          //提示框
          tooltip: {
            //提示框组件。
          formatter: function(params) {
              return (
                "城市: " +
                params.name +
                "<br/>现存确诊: " +
                params.value +
                "<br/>累计治愈: " +
                params.data.curedCount +
                "<br/>累计死亡: " +
                params.data.deadCount
              );
            }
          },
          visualMap: [
            {
              type: "piecewise",
              pieces: [
                { gt: 10000 },
                { gt: 1000, lte: 9999 },
                { gt: 100, lte: 999 },
                { gt: 9, lte: 99 },
                { gt: 0, lte: 8 },
              ],
              bottom: "",
              top: "280px",
              show: false,
              // bottom: "center",
              inRange: {
                color: ["#fdebcf", "#f59e83", "#e55a4e", "#cb2a2f", "#811c24"]
              }
            }
          ]
        };
        myChart.setOption(this.china);
      }
    }
  },

  methods: {
    fontSize(res) {
      let docEl = document.documentElement,
        clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
      if (!clientWidth) return;
      let fontSize = 105 * (clientWidth / 1920);
      return res * fontSize;
    }
  },
  getMyecharts() {}
};
</script>

<style lang="scss" scoped>
.title {
  margin:10px 0 ;
  width: 100%;
  border-left: 5px solid #4169e2;
  text-align: left;
  padding-left: 10px;
  font-size: 16px;
}
.swiper-slide{
    background-color:#f7f7f7 ;
    .slide-box{
        margin: 0 auto;
    }
}
 .type-value{
          width: 100%;
          img{
              width: 100%;
          }
      }
</style>