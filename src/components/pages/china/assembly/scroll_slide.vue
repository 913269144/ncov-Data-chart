<template>
  <div class="box">
    <slider ref="slider" :options="options" class="scroll-box">
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" class="title-content">
        <span class="rise">{{item.marqueeLabel}}</span>
        <span @click="See(item.marqueeLink)" style="color:'#333';margin-top:1px;font-size:13.25px">{{item.html}}</span>
       </slideritem>
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import { getStatisticsService } from "@/api/data";
export default {
  data() {
    return {
      someList: [

      ],
      options: {
         direction: "vertical",
         autoplay: 3000,
         pagination: false,
         loop: true
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getStatisticsService().then(res => {
        let arr = res.data.marquee
             arr.forEach(item => {
                  this.someList.push({     
                     html:item.marqueeContent,
                     marqueeLink:item.marqueeLink,
                     marqueeLabel: item.marqueeLabel,
                     style:{
                      background:"#fff",
                      color:'#000',
                      'font-size':'1.45rem',
                      'line-height':'1.17rem',
                      'padding':'5px',

                     }
                  })
             });
          
      });
    },
    See(e) {
      window.location.href = e
    }
  },
  components: {
    slider,
    slideritem
  },
  options: {
    currentPage: 0
  }
};
</script>
<style lang="scss" scoped>
.box{
  width:100%;
  margin:10px auto;
  height:40px;
  border:1px solid #f7f7f7;
}
.scroll-box{
      border-radius: 7px;
      box-shadow: 1px 1px 2px 0 rgba(0,0,0,.05);
}
.rise{
    flex: none;
    padding: 0.35rem;
    color: #f74c31;
    font-size: 1.15rem;
    background-color: #ffefed;
    border-radius: .02rem;
    vertical-align: middle;
    margin-right: 3px;

}
.title-content{
  position: relative;
}
</style>