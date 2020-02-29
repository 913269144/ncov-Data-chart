<template>
  <div>
    <div class="echarts-box">
      <div id="main" style="height:320px;" class="col-lg-4 col-md-6 col-sm-12" ></div>
       <div id="bar" style="height:320px;" class="col-lg-4 col-md-6 col-sm-12"></div> 
    </div>
  </div>
</template>

<script>
require("echarts/map/js/province/hubei");
import { getAreaStat } from "@/api/data";
export default {
  data() {
    return {
      DataList: [],
      option: {},
      bar: {},
      cityData:{
          cityName:[],
          value:[],
          deathsNum:[],
          curesNum:[]

      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //获取数据
    getData() {
      getAreaStat({}, "湖北").then(res => {
        res.data[0].cities.forEach(item => {
          this.DataList.push({
            name: item.cityName + "市",
            value: item.currentConfirmedCount,
            curesNum: item.curedCount,
            deathsNum: item.deadCount
          });
        });

        for (const key in this.DataList) {
          this.cityData.cityName.push(this.DataList[key].name)
          this.cityData.deathsNum.push(this.DataList[key].deathsNum)
          this.cityData.curesNum.push(this.DataList[key].curesNum)
          this.cityData.value.push(this.DataList[key].value)
          switch (this.DataList[key].name) {
            case "神农架林区市":
              this.DataList[key].name = "神农架林区";
              break;
            case "恩施州市":
              this.DataList[key].name = "恩施土家族苗族自治州";
              break;
          }
          
        }
        console.log(this.cityData.cityName)
        this.Mycharts();
        this.MychartsBar();
      });
    },

    //表单实例化
    Mycharts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      this.option = {
        //表单类型
        series: [
          {
            type: "map",
            map: "湖北",
            left: "center",

            data: this.DataList,
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
              "<br/>确诊: " +
              params.value +
              "<br/>治愈: " +
              params.data.curesNum +
              "<br/>死亡: " +
              params.data.deathsNum
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
      myChart.setOption(this.option);
    },

   // bar系列图
     MychartsBar() {
       var myChart = this.$echarts.init(document.getElementById("bar"));
       this.bar = {
         tooltip: {
           trigger: "axis",
           axisPointer: {
             // 坐标轴指示器，坐标轴触发有效
             type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
           }
         },
         legend: {
           data: ["现存确诊", "死亡", "康复"]
         },
         grid: {
           left: "3%",
           right: "4%",
           bottom: "3%",
           containLabel: true
         },
         xAxis: [
           {
            
           }
         ],
         yAxis: [
           {
             type: "category",
             axisTick: {
               show: false
             },
             data:this.cityData.cityName
           }
         ],
         series: [
           {
             name: "现存确诊",
             type: "bar",
             label: {
               show: false,
              
             },
             data: this.cityData.value
           },
           {
             name: "康复",
             type: "bar",
             stack: "总量",
             label: {
               show: false
             },
             data: this.cityData.curesNum
           },
           {
             name: "死亡",
             type: "bar",
             stack: "总量",
             label: {
               show: false,
             },
             data:this.cityData.deathsNum
           }
         ]
       };
       myChart.setOption(this.bar);
     },
    //字体大小
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
  }
};
</script>
<style lang="scss" scoped>
 .row {
   margin-left: 0px;
   margin-right: 0px;
 }
#id {
  height: 300px;
}
#main {
  border: 3.5px solid rgba(192, 183, 183,0.3);
  border-radius: 10px;
  padding: 5px;
}
#bar {
  padding: 5px;
}
</style>