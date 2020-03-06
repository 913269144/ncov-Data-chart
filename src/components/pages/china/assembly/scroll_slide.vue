<template>
  <div>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">{{text.val}}</p>
      </transition>
    </div>
  </div>
</template>
 
<script>
import { getStatisticsService } from "@/api/data";
export default {
  name: 'scroll',
  data () {
    return {
      textArr:[
        '1',
        '2',
        '3'
      ],
      number: 0
    }
  },
  computed: {
     text () {
       return {
         id: this.number,
         val: this.textArr[this.number].marqueeContent
       }
     }
  },
  mounted () {
    this.getdata()
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); 
    },
    getdata(){
      getStatisticsService().then(res=>{
        this.textArr = res.data.marquee

      })
    }

  }
}
</script>
 
<style scoped>
  h2 {
    padding: 20px 0
  }
  .textBox {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 1px 2px 1px 1px rgba(212, 212, 241, 0.2);
    margin: 10px auto;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s ease;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>