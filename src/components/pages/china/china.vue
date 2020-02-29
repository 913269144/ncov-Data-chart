<template>
  <div class="row">
    <div class="swiper-container" :style="styles">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide col-lg-6 "  style="background-image:url('https://pic3.zhimg.com/v2-27739d9bc34e838444a1ad714505d1f5_1200x500.jpg')"></div> -->
        <div class="swiper-slide col-lg-3 col-md-4 col-sm-6">
          <div>
            <img src="https://pic3.zhimg.com/v2-27739d9bc34e838444a1ad714505d1f5_1200x500.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {getStatisticsService} from '@/api/data'
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      styles: {}
    };
  },
  //监听屏幕宽度
  watch: {
    screenWidth: {
      handler(newValue, oldValue){
          if(newValue>1160){
            this.styles={
              width:this.screenWidth*0.75+'px',
              heigh:this.screenWidth*0.4+'px',
            }
          
          }else if(newValue<767){
            this.styles={
              width:'100%'
          }
          }
      },
      deep: true
    }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true
    });

    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  created() {
    this.getWidth()
    this.getdata()
  },
  methods:{
    //获取实时宽度
    getWidth(){
      if(this.screenWidth>1199){
         this.styles={
             width:this.screenWidth*0.75+'px',
              heigh:this.screenWidth*0.4+'px',
          }
      }
    },
    //获取数据
    getdata() {
        getStatisticsService().then(res=>{
          console.log(res)
        })
    }
  }
};
</script>

<style>
.swiper-container{
  border-radius: 10px;
}
img {
  width: 100%;
  border-radius: 10px;
}
.row {
  margin-left: 0px;

  margin-right: 0px;
}
</style>