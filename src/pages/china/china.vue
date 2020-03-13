<template>
  <div class="china-box" style="margin:0 10px;overflow-y: hidden">
    <!--  播报新闻 -->
    <scroll></scroll>
    <!-- 中国 or 世界 -->
    <div>
      <div class="container-fluid">
        <!-- 汇总数据 -->
        <div class="row plate">
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 in-china"
            :style="'color:'+color_china+';'+'background-color:'+china_active"
            @click="routerin('china')"
          >国内疫情数据</div>
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 in-word"
            :style="'color:'+color_word+';'+'background-color:'+word_active"
            @click="routerin('word')"
          >海外疫情数据</div>
        </div>
      </div>
      <assetsData ref="Plate_data" :Inplate="Inplate"></assetsData>
    </div>
  </div>
</template>

<script>
import assetsData from "@/pages/china/assembly/cumulative_data";
import scroll from '@/pages/china/assembly/scroll_slide'
import { getStatisticsService, getareaData } from "@/api/data";
export default {
  data() {
    return {
      china_active: "",
      word_active: "#b3c8ff",
      Inplate: "china",
      color_word:'#333',
      color_china:'rgb(65, 105, 226)'
    };
  },
  components: {
    assetsData,
    scroll
  },
  methods: {
    //模块切换
    routerin(region) {
      this.Inplate = region;
      if (region == "china") {
        this.word_active = "#b3c8ff", this.china_active = "#fff";
        this.color_china = 'rgb(65, 105, 226)'
        this.color_word = '#333'
      } else {
        this.china_active = "#b3c8ff";
        this.word_active = "#fff";
         this.color_word = 'rgb(65, 105, 226)'
         this.color_china = '#333'
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}
.nav-t {
  padding: 0;
  margin-bottom: 5px;
}
.row {
  padding: 0;
  margin: 0;
}
.plate {
  div {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    border: 0.5px solid #f7f7f7;
    border-bottom: none;
    font-size: 18px;
    font-family: "微软雅黑";
    font-weight: 700;
    cursor: pointer;
  }
  .in-china {
    border-radius: 10px 0px 0 0;
  }
  .in-word {
    border-radius: 0px 10px 0 0;
    border-left: none;
  }
}

</style>
