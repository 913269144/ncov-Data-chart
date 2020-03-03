<template>
  <div>
    <div class="container-fluid num-box">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in" style="border:none">
          <div class="yesterday">
            较昨日
            <span style="color:#f74c31">{{dataList.currentConfirmedIncr}}</span>
          </div>
          <div class="num" style="color:#f74c31">{{dataList.currentConfirmedCount}}</div>
          <div>现存确诊</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in">
          <div class="yesterday">
            较昨日
            <span style="color:#f78207">+{{dataList.suspectedIncr}}</span>
          </div>
          <div class="num" style="color:#f78207">{{dataList.suspectedCount}}</div>
          <div>现存疑似</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in">
          <div class="yesterday">
            较昨日
            <span style="color:rgb(162, 90, 78)">{{dataList.seriousIncr}}</span>
          </div>
          <div class="num" style="color:rgb(162, 90, 78)">{{dataList.seriousCount}}</div>
          <div>现存重症</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in" style="border:none">
          <div class="yesterday">
            较昨日
            <span style="color:#ae212c">+{{dataList.confirmedIncr}}</span>
          </div>
          <div class="num" style="color:#ae212c">{{dataList.confirmedCount}}</div>
          <div>累计确诊</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in">
          <div class="yesterday">
            较昨日
            <span style="color:#5d7092">+{{dataList.deadIncr}}</span>
          </div>
          <div class="num" style="color:#5d7092">{{dataList.deadCount}}</div>
          <div>累计死亡</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-in">
          <div class="yesterday">
            较昨日
            <span style="color:#28B7a3">+{{dataList.curedIncr}}</span>
          </div>
          <div class="num" style="color:#28B7a3">{{dataList.curedCount}}</div>
          <div>累计治愈</div>
        </div>
      </div>
    </div>
    <!-- 各省份/地区 -->
    <div class="Province">
      <div class="containder-fluid">
        <div class="row" style="height:30px;line-height:30px">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="padding:0;background:#e3e7f3">地区</div>
          <div
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
            v-for="item in this.record"
            :key="item.item"
            :style="'padding:0;background-color:'+item.color"
          >{{item.name}}</div>
          <div
            class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
            v-for="item in this.recordTwo"
            :key="item.item"
            :style="'padding:0;background-color:'+item.color"
          >{{item.name}}</div>
        </div>
        <div class="row area-data" v-for="(item,index) in areaList" :key="index">
          <div
            class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
            style="font-size:12px;padding:0;"
            @click="getCity(item)"
          >{{item.provinceShortName}}</div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{item.currentConfirmedCount}}</div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{item.confirmedCount}}</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">{{item.deadCount}}</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">{{item.curedCount}}</div>
        </div>
      </div>
    </div>
    <province :show="show" :proData="proData" @changes="outIn"></province>
  </div>
</template>

<script>
import province from "@/components/pages/china/province";
import { getStatisticsService, getareaData } from "@/api/data";
export default {
  data() {
    return {
     styles: {},
      record: [
        {
          name: "现存确诊",
          color: "#f3bab0"
        },
        {
          name: "累计确诊",
          color: "#e69a8d"
        }
      ],
      recordTwo: [
        {
          name: "死亡",
          color: "#b4c0d5"
        },
        {
          name: "治愈",
          color: "#95db9a"
        }
      ],
      areaList: [],
      dataList: [],
      proData: [],
      isleft: true,
      show: false,
    };
  },
  created(){
      this.getdata()
      this.area()
  },
  components:{
     province 
  },
  methods: {
      
    //获取数据 (中国)
    getdata() {
      getStatisticsService().then(res => {
        this.dataList = res.data;
      });
    },
    area() {
      getareaData().then(res => {
        this.areaList = res.data;
      });
    },
    //查看各个省份详情
    getCity(data) {
      if (
        data.provinceName != "台湾" &&
        data.provinceName != "香港" &&
        data.provinceName != "澳门"
      ) {
        this.outIn();
        this.proData = data.cities;
        console.log(data.provinceName);
      }
    },
    //关闭弹窗
    outIn() {
      this.show = !this.show;
    }
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