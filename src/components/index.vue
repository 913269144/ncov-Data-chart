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
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-for="(item,index) of this.menu" :key="item.name" @click="routerIn(index,item.routerName)"> {{item.name}}
          <i class="active" ref="bottom" style="display:none"></i>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
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
          routerName: ""
        },
        {
          name: "疾病知识",
          routerName: ""
        }
      ],
      index : '',
      text:'',
      routerName: this.$route.name,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.too();
  },
  watch: {
    //监听顶部位置
    scrollTop: {
      handler(newValue, oldValue) {
        if (newValue > this.orrcTop) {
              this.$refs.title.style.position = "fixed",
              this.$refs.title.style.backgroundColor = "#4169e2";
              this.$refs.title.style.color = "#fff";
              this.$refs.title.style.top = 0;
              this.$refs.title.style.left = 0;
              this.$refs.bottom[this.index].style.backgroundColor = '#fff'
        } else {
          this.$refs.title.style.position = "",
          this.$refs.title.style.backgroundColor = "#fff";
          this.$refs.title.style.color = "";
          this.$refs.title.style.top = "";
          this.$refs.title.style.left = "";
           this.$refs.bottom[this.index].style.backgroundColor = 'rgb(65, 105, 226)'
        }
      },
      deep: true
    }
  },

  methods: {
    routerIn(index, name) {
      for (let i = 0; i < this.menu.length; i++) {
        this.$refs.bottom[i].style.display = "none";
      }
      this.$refs.bottom[index].style.display = "block";
      this.$refs.bottom[index].style.backgroundColor ='rgb(65, 105, 226)'
      this.$router.push({
        name: name
      });
      this.index = index
      this.routerName = this.$route.name;
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.orrcTop = this.$refs.banner.offsetHeight;
    },
    too() {
      for (let i = 0; i < this.menu.length; i++) {
        this.$refs.bottom[i].style.display = "none";
        if (this.$route.name == this.menu[i].routerName) {
          this.$refs.bottom[i].style.display = "block";
          this.$refs.bottom[i].style.backgroundColor = 'rgb(65, 105, 226)'
          this.index = i
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
</style>