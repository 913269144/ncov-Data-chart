<template>
  <div>
    <div class="updataTime">
        <span>截至<span style="margin-left:1px">{{updateTime}}</span> 全国数据统计</span>
        <div @click="dialog">
            <svg t="1583559873965" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="16" height="16"><path d="M512.156566 111.196545c52.015677 0 102.931301 9.899464 150.860916 29.387307 49.65798 20.114107 94.288456 49.814546 132.63174 88.001263 38.344307 38.344307 67.88818 82.97376 88.002286 132.63174 19.485797 48.087205 29.387307 98.845239 29.387308 150.860916 0 52.016701-9.900487 102.931301-29.387308 150.860917-20.114107 49.659003-49.815569 94.288456-88.002286 132.632763-38.343283 38.343283-82.97376 67.887157-132.63174 88.001263-48.086182 19.485797-98.845239 29.386284-150.860916 29.386284s-102.931301-9.900487-150.860916-29.386284c-49.65798-20.11513-94.288456-49.815569-132.63174-88.001263-38.343283-38.344307-67.887157-82.97376-88.002287-132.632763-19.485797-48.086182-29.386284-98.844216-29.386284-150.860917 0-52.014654 9.900487-102.930277 29.386284-150.860916 20.11513-49.65798 49.815569-94.287433 88.002287-132.63174 38.343283-38.343283 82.97376-67.887157 132.63174-88.001263 47.929616-19.487843 98.688673-29.387307 150.860916-29.387307m0-44.629453c-114.088408 0-228.02025 43.529399-315.080072 130.588197-173.96103 173.962054-173.96103 455.882911 0 629.844965 86.902232 87.058798 200.991664 130.431631 314.922483 130.431631 113.930819 0 228.02025-43.529399 314.921459-130.431631 173.962054-173.962054 173.962054-456.040501 0-630.001531C740.176816 110.096491 626.088408 66.567092 512.156566 66.567092z m0.629333 215.44791c-41.958624 0-75.745125 11.314697-101.359502 33.786501-25.457812 22.629393-40.85857 55.001685-46.044686 97.432053l57.358359 6.75689c5.028527-31.743982 15.400758-54.845119 31.428804-69.773109 15.871479-14.929014 35.830043-22.314215 59.55949-22.314215 24.671912 0 45.415352 8.327666 62.386886 24.671912 16.972557 16.343223 25.457812 35.514865 25.457811 57.201793 0 11.943007-2.984984 23.100114-8.642844 33.158191-5.814426 10.058077-18.385742 23.729447-37.714973 40.699957-19.329231 17.129122-32.68747 30.015617-40.072671 38.972617-10.057053 12.257162-17.442254 24.357757-22.00006 36.300764-6.128581 15.871479-9.272177 34.886555-9.272177 56.729026 0 3.771907 0.157589 9.272177 0.315178 16.814967h53.586453c0.471744-22.314215 1.885953-38.500872 4.714371-48.40136 2.671852-9.900487 6.915503-18.700921 12.414751-26.401299 5.500271-7.699356 17.443277-19.485797 35.672454-35.671431 27.028587-24.043602 45.257763-44.315298 54.529941-61.130266 9.271154-16.657378 13.985526-35.043121 13.985526-54.844096 0-34.258245-13.199627-63.644529-39.758516-87.844697-26.714432-24.044626-62.072731-36.144198-106.544595-36.144198z m-0.471744 391.610072c-18.857487 0-34.258245 15.243169-34.258245 34.258245 0 18.85851 15.243169 34.259268 34.258245 34.259268 18.857487 0 34.259268-15.243169 34.259268-34.259268-0.158612-18.85851-15.401782-34.258245-34.259268-34.258245z" p-id="2284" fill="#8a8a8a"></path></svg>
            <span> 数据说明</span>
        </div>
    </div>
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
    <province :show="show" :proData="proData" :types='types' @changes="outIn"></province>
  </div>
</template>

<script>
import province from "@/components/pages/china/assembly/dialog/province";
import {timetrans} from '@/assets/js/timesTotime'
import { getStatisticsService, getareaData, getOverseas } from "@/api/data";
export default {
  data() {
    return {
      styles: {},
      updateTime:'',
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
      show: false,
      types:'City'
    };
  },
  components: {
    province,
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
  methods: {
    //获取数据 (类型)
    getdata(type) {
      if (type == "china") {
        getStatisticsService().then(res => {
          this.dataList = res.data;
          this.updateTime = timetrans(res.data.modifyTime,'y-y-d-time') 
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
        this.types = 'City'
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
    },
    //提示弹窗
    dialog() {
        this.types = 'Explain',
        this.proData = []
        this.outIn()
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
.updataTime{
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  font-size: 1.2rem;
  color: #666;
  text-align: left;
  background: #fff;
  div{
    float: right;
    margin: 10px 0;
    line-height: 30px;
    padding:0 5px;
    border-radius: 10px 0 0px 10px;
    background-color: #f7f7f7;
    svg{
      vertical-align: sub;
      cursor: pointer;
    }
  }
}
.region-title {
  width: 100%;
  z-index: 9999;
}
.num-box {
  box-shadow: 1px 2px 1px 1px rgba(212, 212, 241, 0.2);
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
  margin-top: 15px;
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