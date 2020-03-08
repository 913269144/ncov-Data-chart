<template>
  <div class="dialog-box" v-if="show" @click="outin">
    <div class="dialog-cover">
      <div class="dialog-content">
            <div class="img-box">
                <img src="@/assets/img/icon-pilot.png" alt="">
            </div>
            <div class="content-text">
                点击右上角更多<br>
                分享给好友或朋友圈
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        show:Boolean
    },
    methods: {
        outin(){
             this.$emit('changes')
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog-box {
  color: #2e2c2d;
  font-size: 16px;
  -webkit-overflow-scrolling: touch;
  .dialog-cover {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    position: fixed;
    font-size: 20px;
    color: #000;
    top: 3%;
    // 移动端使用felx布局
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 100%;
    padding: 5%;
    .img-box{
        position: absolute;
        top:0px;
        right: 20px;
      img{
        width: 100px;
      }
    }
    .content-text{
        text-align: left;
        position: absolute;
        top:100px;
        right:100px ;
        font-size: 16px;
        color: #fff;
    }
  }
}
</style>