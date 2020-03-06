<template>
  <div>
    <div class="container-fluid num-box">
      <div v-if="this.Inplate == 'china'">
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
      <!-- 海外版 -->
      <div v-else>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-in" style="border:none">
            <div class="num" style="color:#f74c31">{{wordList.currentConfirmedCount}}</div>
            <div>现存确诊</div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-in">
            <div class="num" style="color:#f78207">{{wordList.suspectedCount}}</div>
            <div>累计确诊</div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-in">
            <div class="num" style="color:rgb(162, 90, 78)">{{wordList.deadCount}}</div>
            <div>累计死亡</div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-in">
            <div class="num" style="color:rgb(162, 90, 78)">{{wordList.seriousCount}}</div>
            <div>累计治愈</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 各省份/地区 -->
    <div class="Province">
      <div class="containder-fluid">
        <div class="region-title" style="height:30px;line-height:30px" ref="region">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="padding:0;background:#e3e7f3">地区</div>
          <div
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
            v-for="item in this.record"
            :key="item.key"
            :style="'padding:0;background-color:'+item.color"
          >{{item.name}}</div>
          <div
            class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
            v-for="item in this.recordTwo"
            :key="item.item"
            :style="'padding:0;background-color:'+item.color"
          >{{item.name}}</div>
        </div>
        <div class="content-nav" ref="content_nav">
         <!-- 中国 -->
          <div v-if="this.Inplate == 'china'">
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
         <!-- 海外 -->
          <div v-else>
            <div v-for="(item, index) of courseSubList" :key="item.name">
              <div class="row area-data" @click="showHide(index,item.index)">
                <div
                  class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
                  style="font-size:12px;padding:0;"
                >{{item.name}}</div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{item.currentConfirmedCount}}</div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">{{item.confirmedCount}}</div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">{{item.deadCount}}</div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">{{item.curedCount}}</div>
              </div>
              <div>
                <div
                  class="row area-data"
                  v-for="i in item.city"
                  style="display:none"
                  :key="i.id"
                  ref="child"
                >
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 city-name">{{i.provinceName}}</div>
                  <div
                    class="col-lg-3 col-md-3 col-sm-3 col-xs-3 city-name"
                  >{{i.currentConfirmedCount}}</div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 city-name">{{i.confirmedCount}}</div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 city-name">{{i.curedCount}}</div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 city-name">{{i.deadCount}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <province :show="show" :proData="proData" @changes="outIn"></province>
  </div>
</template>

<script>
import province from "@/components/pages/china/province";
import { getStatisticsService, getareaData, getOverseas } from "@/api/data";
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
      regionType: [""],
      wordList: {
        currentConfirmedCount: "",
        suspectedCount: "",
        seriousCount: "",
        deadCount: ""
      },
      courseSubList: [
        {
          name: "亚洲",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        },
        {
          name: "欧洲",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        },
        {
          name: "北美洲",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        },
        {
          name: "南美洲",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        },
        {
          name: "非洲",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        },
        {
          name: "其他",
          index: 0,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          curedCount: 0,
          deadCount: 0,
          city: []
        }
      ],
      areaList: [],
      dataList: [],
      proData: [],
      content_scroll:'',
      isleft: true,
      show: false
    };
  },
  props: {
    Inplate: String
  },
  created() {
    this.getdata(this.Inplate);
    this.area(this.Inplate);
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    Inplate: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.getdata(newValue);
          this.area(newValue);
        }
      },
      deep: true
    },
    content_scroll: {
      handler(newValue, oldValue) {
         if (newValue <= 49) {
             this.$refs.region.style.position = "fixed",
             this.$refs.region.style.top = "50px";
             this.$refs.region.style.width = "95%";
             
         }else{
             this.$refs.region.style.position = "",
             this.$refs.region.style.top = "";
             this.$refs.region.style.width = "100%";
        }
      },
      deep: true
    }
  },
  components: {
    province
  },
  methods: {
    //获取数据 (类型)
    getdata(type) {
      if (type == "china") {
        getStatisticsService().then(res => {
          this.dataList = res.data;
        });
      } else {
      }
    },
    //各地区详情
    area(type) {
      if (type == "china") {
        getareaData().then(res => {
          this.areaList = res.data;
        });
      } else {
        //海外各国详情
        getOverseas().then(res => {
          var arr, arr2, arr3, arr4;
          arr = arr2 = arr3 = arr4 = 0;
          this.courseSubList = [
            {
              name: "亚洲",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            },
            {
              name: "欧洲",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            },
            {
              name: "北美洲",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            },
            {
              name: "南美洲",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            },
            {
              name: "非洲",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            },
            {
              name: "其他",
              index: 0,
              currentConfirmedCount: 0,
              confirmedCount: 0,
              curedCount: 0,
              deadCount: 0,
              city: []
            }
          ];
          for (const key in res.data) {
            arr = arr + Number(res.data[key].currentConfirmedCount);
            arr2 = arr2 + Number(res.data[key].confirmedCount);
            arr3 = arr3 + Number(res.data[key].curedCount);
            arr4 = arr4 + Number(res.data[key].deadCount);
            for (const index in this.courseSubList) {
              if (this.courseSubList[index].name == res.data[key].continents) {
                this.courseSubList[index].index =
                  this.courseSubList[index].index + 1;
                this.courseSubList[index].city.push(res.data[key]);
                this.courseSubList[index].currentConfirmedCount =
                  this.courseSubList[index].currentConfirmedCount +
                  res.data[key].currentConfirmedCount;
                this.courseSubList[index].confirmedCount =
                  this.courseSubList[index].confirmedCount +
                  res.data[key].confirmedCount;
                this.courseSubList[index].curedCount =
                  this.courseSubList[index].curedCount +
                  res.data[key].curedCount;
                this.courseSubList[index].deadCount =
                  this.courseSubList[index].deadCount + res.data[key].deadCount;
              }
            }
          }
          this.wordList = {
            currentConfirmedCount: arr,
            suspectedCount: arr2,
            seriousCount: arr3,
            deadCount: arr4
          };
        });
      }
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
      }
    },
    //关闭弹窗
    outIn() {
      this.show = !this.show;
    },
    //打开/关闭地区详情
    showHide(index, num) {
      let NewNum = 0;
      let indexIn = 0;
      for (let key = 0; key < index; key++) {
        NewNum = NewNum + this.courseSubList[key].index;
      }
      if (NewNum == 0) {
        this.displayHide(NewNum, num);
      } else {
        let end = 0;
        for (let key = 0; key < index + 1; key++) {
          end = end + this.courseSubList[key].index;
        }
        this.displayHide(NewNum, end);
      }
    },

    displayHide(start, end) {
      for (let i = start; i < end; i++) {
        if (this.$refs.child[i].style.display === "none") {
          this.$refs.child[i].style.display = "block";
        } else {
          this.$refs.child[i].style.display = "none";
        }
      }
    },
    //获取滑屏距离
    handleScroll() {
      this.content_scroll = this.$refs.content_nav.getBoundingClientRect().top
    }
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}
.row {
  padding: 0;
  margin: 0;
}
.region-title {
  width: 100%;
  z-index: 9999;
}
.num-box {
  box-shadow: 1px 2px 1px 1px rgba(212, 212, 241, 0.2);
  border-radius: 0 0 10px 10px;
  border: 1px solid #eee;
  padding: 10px;
  background-color: #fff;

  .yesterday {
    font-size: 11.5px;
    color: #666;
    span {
      font-weight: 500;
    }
  }
  .num {
    font-size: 1.65rem;
    margin-bottom: 3px;
  }
  .text-in {
    margin: 5px 0;
    border-left: 1px solid #eee;
    padding: 0;
    font-size: 1.35rem;
    font-weight: 800;
    color: #333;
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
.city-name {
  font-size: 12px;
  padding: 0 3px;
  background: #fff;
  white-space: nowrap; /* 使文本不可换行 */
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis;
}
</style>