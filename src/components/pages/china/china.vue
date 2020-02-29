<template>
  <div>
    <div class="swiper-container" :style="styles">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div>
            <img src="@/assets/img/zhihu33.jpg" alt />
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
              width:this.screenWidth*0.95+'px',
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
      }else{
        this.styles={
           width:this.screenWidth*0.95+'px',
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
  padding:0;
  margin:0;
}
</style>