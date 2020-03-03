<template>
  <div style="margin:0 10px">
    <div class="containder-fluid">
      <div class="row">
        <div class="nav-t col-lg-12">
          <img src="@/assets/img/feiyandongt.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 中国 or 世界 -->
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
    <assetsData ref="Plate_data" ></assetsData>
  </div>
</template>

<script>
import assetsData from "@/components/pages/china/assembly/cumulative_data";
import { getStatisticsService, getareaData } from "@/api/data";
export default {
  data() {
    return {
      china_active: "#b3c8ff",
      word_active: "",
      Inplate: "china"
    };
  },
  components: {
    assetsData
  },
  //监听屏幕宽度
  watch: {
    Inplate:{
      handler(newValue,oldValue){
        if(this.Inplate == 'china'){
          this.$refs.Plate_data.getdata()
          this.$refs.Plate_data.area()
        }
      },
      deep:true
    }
  },
  methods: {
    //模块切换
    routerin(region) {
      console.log(region);
      this.Inplate = region;
      if (region == "china") {
        this.china_active = "#b3c8ff";
        this.word_active = "#fff";
      } else {
        (this.word_active = "#b3c8ff"), (this.china_active = "#fff");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  margin: 0 auto;
}
.container-fluid {
  padding: 0;
  margin: 0;
}
.row {
  padding: 0;
  margin: 0;
}
.plate {
  div {
    height: 50px;
    line-height: 50px;
    border-radius: 10px 10px 0 0;
    border: 1px solid #eee;
    border-bottom: none;
    font-size: 22px;
    font-weight: 500;
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
.num-box {
  box-shadow: 1px 2px 1px 1px rgba(212, 212, 241, 0.2);
  border-radius: 0 0 10px 10px;
  border: 1px solid #eee;
  padding: 10px;

  .yesterday {
    font-size: 11.5px;
    color: #666;
  }
  .num {
    font-size: 25.6px;
  }
  .text-in {
    margin: 5px 0;
    border-left: 1px solid #eee;
  }
}
.nav-t {
  margin: -5px auto 10px;
  padding: 0;
}
.Province {
  margin-top: 5px;
  font-size: 12px;
}
.area-data {
  height: 30px;
  line-height: 30px;
  background: #f7f7f7;
  margin-bottom: 1px;
  font-weight: 700;
}
.icon-sp {
  float: left;
  line-height: 30px;
  margin-left: 5px;
  color: #ccc;
}
</style>
