<template>
  <div>
    <div class="containder-fluid" ref="banner">
      <div class="row">
        <div class="nav-t col-lg-12" style="padding:0">
          <img src="@/assets/img/feiyandongt.jpg" alt />
        </div>
      </div>
    </div>
    <div class="containder-fluid">
      <div class="row plate-nav" ref="title">
        <div
          class="col-xs-3 col-sm-3 col-md-3 col-lg-3"
          v-for="(item,index) of this.menu"
          :key="item.name"
          @click="routerIn(index,item.routerName)"
        >
          {{item.name}}
          <i class="active" ref="bottom" style="display:none"></i>
        </div>
      </div>
    </div>
    <router-view />
    <div class="bottom-box">
      <div class="more">
        <svg
          t="1583649004476"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2563"
          width="32"
          height="32"
        >
          <path
            d="M193.7664 406.0416l301.8752 183.8848c7.4752 4.352 16.7168 4.352 24.192 0l301.8752-183.8848a23.04 23.04 0 0 0 7.7312-31.9232 28.2112 28.2112 0 0 0-7.7312-7.7312l-301.8752-183.808a23.9616 23.9616 0 0 0-24.192 0L193.7664 366.336a23.04 23.04 0 0 0-7.8336 31.9488c1.8688 3.2256 4.5824 5.888 7.8336 7.7568z"
            fill="#4169e2"
            p-id="2564"
          />
          <path
            d="M797.7472 492.3904l-290.1248 176.8448-290.0992-176.8448a22.8352 22.8352 0 0 0-30.9248 7.424 22.528 22.528 0 0 0 7.3984 30.8992l301.8752 183.8848c7.1168 4.3776 16.0768 4.3776 23.1936 0l301.8752-183.8848a22.3232 22.3232 0 0 0 6.7072-30.9248 21.8624 21.8624 0 0 0-29.9008-7.3984z"
            fill="#4169e2"
            p-id="2565"
          />
          <path
            d="M797.7472 616.448l-290.1248 176.8192L217.5232 616.448a22.8352 22.8352 0 0 0-30.9248 7.3984 22.8352 22.8352 0 0 0 7.3984 30.9248L495.872 838.656c7.1168 4.352 16.0768 4.352 23.1936 0l301.8752-183.8848a22.4256 22.4256 0 0 0-23.1936-38.3232z"
            fill="#4169e2"
            p-id="2566"
          />
        </svg>
        <span @click="Blog()">前端技术交流</span>
      </div>
      <div class="share" @click="wechatIn">
        <svg
          t="1583650083196"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10372"
          width="26"
          height="26"
        >
          <path
            d="M511.998 64c21 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-205.4 0-371.9 166.5-371.9 371.9s166.5 371.8 371.9 371.8 371.9-166.5 371.9-371.9c0-21 17-38.1 38.1-38.1s38 17.1 38 38.1c0 247.4-200.6 448-448 448s-448-200.6-448-448 200.6-448 448-448z m230.6 190.5c-14.2-14.7-14-38 0.5-52.4 14.5-14.5 37.8-14.6 52.7-0.2l65.6 65.6c19.8 19.8 19.8 51.8 0 71.6l-65.6 65.6c-14.6 14.6-38.3 14.6-52.9 0-14.6-14.6-14.6-38.3 0-52.9l11.1-11.1h-48.3c-131.3 0-175.9 55.9-175.9 225 0 20.7-16.7 37.4-37.4 37.4s-37.4-16.7-37.4-37.4c0-209.1 76.3-299.8 250.7-299.8h48.3l-11.4-11.4z"
            p-id="10373"
            fill="#e6e6e6"
          />
        </svg>
        <span>分享至朋友圈</span>
      </div>
    </div>
    <wechat :show="show" @changes="wechatIn"></wechat>
  </div>
</template>
<script>
import wechat from "@/pages/china/assembly/dialog/weChat";
export default {
  data() {
    return {
      scrollTop: "",
      orrcTop: "",
      menu: [
        {
          name: "疫情地图",
          routerName: "chinese"
        },
        {
          name: "辟谣与防护",
          routerName: "rumor"
        },
        {
          name: "实时播报",
          routerName: "broadcast"
        },
        {
          name: "疾病知识",
          routerName: "knowledge"
        }
      ],
      index: "",
      text: "",
      show: false,
      routerName: this.$route.name
    };
  },
  components: {
    wechat
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.too();
  },
  watch: {
    //监听顶部位置
    scrollTop: {
      handler(newValue, oldValue) {
        if (newValue > this.orrcTop) {
          (this.$refs.title.style.position = "fixed"),
            (this.$refs.title.style.backgroundColor = "#4169e2");
          this.$refs.title.style.color = "#fff";
          this.$refs.title.style.top = 0;
          this.$refs.title.style.left = 0;
          this.$refs.bottom[this.index].style.backgroundColor = "#fff";
        } else {
          this.$refs.title.style.position = "relative";
          this.$refs.title.style.backgroundColor = "#fff";
          this.$refs.title.style.color = "";
          this.$refs.title.style.top = "";
          this.$refs.title.style.left = "";
          this.$refs.bottom[this.index].style.backgroundColor =
            "rgb(65, 105, 226)";
        }
      },
      deep: true
    },
    $route: "getPath"
  },

  methods: {
    routerIn(index, name) {
      for (let i = 0; i < this.menu.length; i++) {
        this.$refs.bottom[i].style.display = "none";
      }
      this.$refs.bottom[index].style.display = "block";
      this.$refs.bottom[index].style.backgroundColor = "rgb(65, 105, 226)";
      this.$router.push({
        name: name
      });
      this.index = index;
      this.routerName = this.$route.name;
    },
    handleScroll() {
      this.$nextTick(() => {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        this.orrcTop = this.$refs.banner.offsetHeight;
      });
    },
    too() {
      for (let i = 0; i < this.menu.length; i++) {
        this.$refs.bottom[i].style.display = "none";
        if (this.$route.name == this.menu[i].routerName) {
          this.$refs.bottom[i].style.display = "block";
          this.$refs.bottom[i].style.backgroundColor = "rgb(65, 105, 226)";
          this.index = i;
        }
      }
    },
    Blog() {
      window.open("http://www.junin.club");
    },
    //分享朋友圈
    wechatIn() {
      this.show = !this.show;
    },
    getPath() {
      for (const key in this.menu) {
        if (this.$route.name == this.menu[key].routerName) {
          return this.routerIn(key, this.$route.name);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>


img {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}
.row {
  margin-left: 0px;

  margin-right: 0px;
}
.container-fluid {
  padding: 0;
  margin: 0;
}
.plate-nav {
  width: 100%;
  text-align: center;
  background: #fff;
  z-index: 999;
  padding: 0 10px;
  position: relative;
  -webkit-overflow-scrolling: touch;
  div {
    height: 50px;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding: 0;
  }
}
.active {
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #4169e2;
  width: 55%;
  height: 3px;
}
.bottom-box {
  width: 100%;
  z-index: 999;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  div {
    display: inline-block;
    width: 45%;
    height: 45px;
    line-height: 43px;
    margin: 0 5px;
    background: #fff;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    border: 1.5px solid rgb(65, 105, 226);
    box-shadow: 1px 1px 1px #f7f7f7;
    svg {
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .more {
    color: rgb(65, 105, 226);
  }
  .share {
    background: rgb(65, 105, 226);
    color: #fff;
  }
}
</style>