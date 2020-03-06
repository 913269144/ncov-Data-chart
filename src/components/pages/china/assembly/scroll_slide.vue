<template>
  <div style="width:100%;margin:20px auto;height:40px" class="scroll-box">
    <slider ref="slider" :options="options">
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
        <span class="rise">{{item.marqueeLabel}}</span>
        <a :href='item.marqueeLink' style="color:'#333'">{{item.html}}</a>
        <svg style=" margin-left:20px;" t="1583496107721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2279" width="16" height="16"><path d="M342.272 936a33.28 33.28 0 0 1-23.616-56.96l377.664-377.664a33.28 33.28 0 1 1 47.168 47.232l-377.664 377.6a32.96 32.96 0 0 1-23.552 9.792" fill="#cdcdcd" p-id="2280"></path><path d="M720 558.336a33.024 33.024 0 0 1-23.616-9.792L309.76 161.984a33.344 33.344 0 1 1 47.232-47.232l386.56 386.56a33.28 33.28 0 0 1-23.552 57.024" fill="#cdcdcd" p-id="2281"></path></svg>
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
                      'padding':'.3rem'
                     }
                  })
             });
          
      });
    },
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
/deep/ a{
  color: #333;
  font-style: normal;
  text-decoration:none;
}
.rise{
    flex: none;
    padding: .3rem;
    color: #f74c31;
    font-size: 1.35rem;
    background-color: #ffefed;
    border-radius: .02rem;
    vertical-align: middle;
    margin-right: 3px;

}
</style>