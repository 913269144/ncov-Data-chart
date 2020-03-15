<template>
  <div>
    <!-- 国内疫情地图 -->
    <div v-show="Inplate=='china'">
      <div class="title">{{type}}</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slide-box">
              <div id="main" style="height:300px"></div>
              <div class="type-value">
                <img src="@/assets/img/value.png" alt />
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="width:300px;">
            <div class="slide-box">
              <div id="mainTwo" style="height:300px"></div>
            </div>
            <div class="type-value" style="width:300px;margin:0 auto">
              <img src="@/assets/img/value.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="Inplate == 'word'">
      <div class="title">
        世界疫情总览(除中国外)
        <i @click="worldMap">
          <svg
            t="1583839686020"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2871"
            width="16"
            height="16"
          >
            <path
              d="M512 992C249.6 992 32 774.4 32 512S249.6 32 512 32s480 217.6 480 480-217.6 480-480 480z m0-896C281.6 96 96 281.6 96 512s185.6 416 416 416 416-185.6 416-416S742.4 96 512 96z"
              fill="#bfbfbf"
              p-id="2872"
            />
            <path
              d="M531.2 627.2H448V588.8c0-32 12.8-57.6 25.6-76.8 12.8-19.2 19.2-19.2 57.6-44.8 44.8-32 57.6-51.2 57.6-83.2 0-38.4-32-64-83.2-64-38.4 0-64 12.8-76.8 38.4-6.4 12.8-12.8 25.6-12.8 51.2L320 396.8c12.8-44.8 25.6-70.4 51.2-96C403.2 268.8 448 256 512 256c51.2 0 96 12.8 128 38.4 25.6 25.6 38.4 51.2 38.4 89.6 0 38.4-12.8 64-38.4 89.6-12.8 12.8-25.6 19.2-64 44.8-32 32-44.8 44.8-44.8 76.8v32z m-83.2 44.8h83.2v83.2H448v-83.2z"
              fill="#bfbfbf"
              p-id="2873"
            />
          </svg>
        </i>
      </div>
      <div class="containder-fluid">
        <div class="row">
          <div id="min" style="height:300px" class="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
          <div id="par" style="height:300px" class="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
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
    City: Array,
    Inplate: String,
    words: Object
  },
  data() {
    return {
      type: "国内疫情地图",
      icon: [
        {
          value: "0",
          color: ""
        }
      ],
      show: false
    };
  },
  watch: {
    City: function(newValue, oldValue) {
      if (this.City) {
        var that = this;
        var mySwiper = new Swiper(".swiper-container", {
          on: {
            slideChangeTransitionEnd: function() {
              if (this.activeIndex == 0) {
                that.type = "国内疫情地图";
              } else {
                that.type = "湖北省疫情地图";
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

              data: this.City,
              roam: false, //是否开启鼠标缩放和平移漫游
              zoom: 1.2,
              label: {
                // 覆盖物设置
                show: true,
                color: "#000",
                fontSize: "0.8rem"
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
                { min: 10000 },
                { min:1000,max:9999},
                { min: 599, max: 999 },
                { min: 100, max: 499 },
                { min: 10, max: 99 },
                { min: 1, max: 9 }
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
                fontSize: ".1rem"
              }
            }
          ],
          backgroundColor: "#f7f7f7",
          //提示框
          tooltip: {
            //提示框组件。
            formatter: function(params) {
              return (
                "省份: " +
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
                { min: 10000 },
                { min:1000,max:9999},
                { min: 599, max: 999 },
                { min: 100, max: 499 },
                { min: 10, max: 99 },
                { min: 1, max: 9 }
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
    },
    Inplate: function(newValue, oldValue) {
      if (this.Inplate == "word") {
        this.worldMap();
        this.worldpie();
      }
    }
  },

  methods: {
    worldMap() {
      let arrName = [];
      let arrVuale = [];
      let arrdead = [];
      let arrcured = [];
      for (const key in this.words.Topten) {
        arrName.push(this.words.Topten[key].name);
        arrVuale.push(this.words.Topten[key].value);
        arrdead.push(this.words.Topten[key].deadCount);
        arrcured.push(this.words.Topten[key].curedCount);
      }
      this.ranking = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type:'value',
        },
        yAxis: {
          type: "category",
          data: arrName
        },
        legend: {
          data: ["现存病例", "死亡病例", "治愈病例"]
        },
        series: [
          {
            name: "现存病例",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideLeft"
            },
            left: "20px",
            data: arrVuale
          },
          {
            name: "治愈病例",
            type: "bar",
            stack: "总量",
            label: {
              show: false,
              position: "insideRight"
            },
            data: arrcured
          },
          {
            name: "死亡病例",
            type: "bar",
            stack: "总量",
            label: {
              show: false
            },
            data: arrdead
          }
        ],
        grid: {
          left: "1%",
          right: "10%",
          containLabel: true
        }
      };
      this.$nextTick(() => {
        var myChart = this.$echarts.init(document.getElementById("min"));
        myChart.setOption(this.ranking);
      });
    },
    worldpie() {
      let arrName = [];
      let arrVuale = [];
      for (const key in this.words.continent) {
        arrName.push(this.words.continent[key].name);
      }
      this.par = {
        tooltip: {
          trigger: "item",
          formatter: "现存病例" + "<br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "-10px",
          data: arrName
        },
        series: [
          {
            name: "数据类型",
            type: "pie",
            radius: "55%",
            left: "50px",
            data: this.words.continent,
            label: {
              show: true
            }
          }
        ]
      };
      this.$nextTick(() => {
        var myChart = this.$echarts.init(document.getElementById("par"));
        myChart.setOption(this.par);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  margin: 10px 0;
  width: 100%;
  border-left: 5px solid #4169e2;
  text-align: left;
  padding-left: 10px;
  font-size: 16px;
  i {
    position: absolute;
    right: 10px;
    top: 2px;
  }
}
.swiper-slide {
  background-color: #f7f7f7;
  .slide-box {
    margin: 0 auto;
    max-width: 350px;
  }
}
.type-value {
  width: 100%;
  img {
    width: 100%;
  }
}
.row {
  padding: 0;
  margin: 0;
}
</style>