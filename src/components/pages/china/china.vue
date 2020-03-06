<template>
  <div style="margin:0 10px;overflow-y: hidden">
    <!--  播报新闻 -->
    <scroll class="scroll"></scroll>
    <!-- 中国 or 世界 -->
    <div>
      <div class="container-fluid">
        <div class="row plate">
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 in-china"
            :style="'background-color:'+china_active"
            @click="routerin('china')"
          >国内疫情数据</div>
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 in-word"
            :style="'background-color:'+word_active"
            @click="routerin('word')"
          >海外疫情数据</div>
        </div>
      </div>
      <assetsData ref="Plate_data" :Inplate="Inplate"></assetsData>
    </div>
  </div>
</template>

<script>
import assetsData from "@/components/pages/china/assembly/cumulative_data";
import scroll from '@/components/pages/china/assembly/scroll_slide'
import { getStatisticsService, getareaData } from "@/api/data";
export default {
  data() {
    return {
      china_active: "",
      word_active: "#b3c8ff",
      Inplate: "china",
    };
  },
  components: {
    assetsData,
    scroll
  },
  //监听屏幕宽度
  watch: {
    Inplate: {
      handler(newValue, oldValue) {
        if (this.Inplate == "china") {
          this.$refs.Plate_data.getdata(this.Inplate);
          this.$refs.Plate_data.area(this.Inplate);
        }
      },
      deep: true
    }
  },
  methods: {
    //模块切换
    routerin(region) {
      this.Inplate = region;
      if (region == "china") {
        (this.word_active = "#b3c8ff"), (this.china_active = "#fff");
      } else {
        this.china_active = "#b3c8ff";
        this.word_active = "#fff";
      }
    }
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
    border: 1px solid #eee;
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
