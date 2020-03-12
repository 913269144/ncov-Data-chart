<template>
  <div class="box">
    <div class="content" v-for="(item,index) in this.list" :key="item.id">
      <div class="image-box" v-if="item.linkUrl">
        <img :src="item.imgUrl" alt />
      </div>
      <div v-if="index==0">
        <span>{{item.title}}</span>
        <p>{{item.description}}</p>
      </div>
      <div class="txt" v-else>
        <span>{{item.title}}</span>
        <p>{{item.description}}</p>
      </div>
      <i @click="routerIn(item.linkUrl)">查看详情</i>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import { getWikiList } from "@/api/data";
export default {
  data() {
    return {
      list: [],
      loading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      getWikiList()
        .then(res => {
          this.list = res.data.result;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    },
    routerIn(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
i {
  font-style: normal;
  font-size: 12px;
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: #232ded;
}
.box {
  width: 100%;
  background: linear-gradient(to top, #fff, #d9dcff);
  padding: 10px;
  margin-bottom: 70px;
  box-sizing: border-box;
  .content {
    position: relative;
    background: #fff;
    margin-top: 10px;
    text-align: left;
    padding: 10px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #ccc;
    span {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      margin-top: 10px;
      color: #777;
      font-size: 12px;
    }
    .image-box {
      width: 130px;
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 10px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .txt {
      position: absolute;
      left: 150px;
      top: 10px;
      width: 200px;
    }
  }
}
</style>