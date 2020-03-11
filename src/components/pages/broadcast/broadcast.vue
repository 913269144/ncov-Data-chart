<template>
  <div class="box">
    <div class="content-box">
      <div class="content-title">
        <i></i>
        <span>实时播报</span>
      </div>
     <div>
         
     </div>
      <div class="content-nav" v-for="(item,index) in this.newlist" :key="item.id" @click="RouterInfo(item.sourceUrl)">
        <div>
          <div class="nav-icon">
            <img src="@/assets/icon/圆.png" alt />
            <i></i>
          </div>
          <div class="nav-text">
            <p>
              <i v-show="index==0">最新</i>{{item.title}}
            </p>
            <div class="text-body">
              <p>{{item.summary}}</p>
            </div>
            <div class="text-info">
              <span>信息来源：{{item.infoSource}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNewest} from '@/api/data'
export default {
        data () {
            return {
                newlist:[]
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                getNewest().then(res=>{
                    this.newlist = res.data
                })
            },
            RouterInfo(url){
                window.open(url)
            }
        }
};
</script>
<style lang="scss" scoped>
.box {
  background-color: #f7f7f7;
}
.row {
  padding: 0;
  margin: 0;
}
i {
  font-style: normal;
}
.content-box {
  .content-title {
    background: #fff;
    width: 100%;
    text-align: left;
    padding: 10px 20px;
    font-size: 20px;
    border: 1px solid #f7f7f7;
    margin: 10px 0;
    i {
      width: 20px;
      height: 20px;
      border: 3px solid #4169e2;
    }
    span {
      margin-left: 10px;
    }
  }
  .content-nav {
    height: 200px;
    .nav-icon {
      position: relative;
      img {
        position: absolute;
        left: 50px;
      }
      i {
        display: inline-block;
        width: 2px;
        height: 183px;
        position: absolute;
        background: #ccc;
        top: 17px;
        left: 57px;
      }
    }
    .nav-text {
      width: 75%;
      padding: 10px;
      position: absolute;
      left: 80px;
      background: #fff;
      border-radius: 1.04rem;
      border: 1px solid #f7f7f7;
      text-align: left;
      p {
        color: #333;
        font-size: 16px;
        font-weight: 700;
        i {
          padding: 2px;
          margin-right: 5px;
          vertical-align: 0.02rem;
          font-size: 12px;
          border-radius: 0.2rem;
          background-color: #f74c31;
          color: #fff;
        }
      }
      .text-body {
        p {
          font-size: 1.2rem;
          margin: 4px 0 0;
          color: #999;
          width: 100%;
          max-height: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //2行
          -webkit-box-orient: vertical;
        }
      }
      .text-info {
        margin-top: 20px;
        text-align: right;
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>