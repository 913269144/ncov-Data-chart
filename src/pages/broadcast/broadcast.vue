<template>
  <div class="box" >
    <div class="content-box">
      <div class="content-nav" v-for="(item,index) in this.newlist" :key="item.id">
        <div>
          <div class="nav-icon">
            <img src="@/assets/icon/圆.png" alt />
            <i></i>
            <span>{{item.pubDateStr}}</span>
          </div>
          <div class="nav-text" @click="RouterInfo(item.sourceUrl)">
            <p>
              <i v-show="index==0">最新</i>
              {{item.title}}
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
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import { getNewest } from "@/api/data";
import { timetrans } from "@/assets/js/timesTotime";
export default {
  data() {
    return {
      newlist: [],
      loading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      getNewest()
        .then(res => {
          this.newlist = res.data.slice(0,10);
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    RouterInfo(url) {
      window.open(url);
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  background-color: #f7f7f7;
  padding-bottom: 55px;
  overflow: hidden;
}
.row {
  padding: 0;
  margin: 0;
}
i {
  font-style: normal;
}
.content-box {
  position: sticky;
  padding: 20px 0;
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
      span {
        position: absolute;
        left: 10px;
        top: 2px;
        font-size: 1rem;
        color: #999;
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