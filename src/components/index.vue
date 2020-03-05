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
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">疫情地图</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">辟谣与防护</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">实时播报</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">疾病知识</div>
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
      orrcTop:""
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    scrollTop: {
      handler(newValue, oldValue) {
        if (newValue>this.orrcTop) {
            this.$refs.title.style.position = 'fixed',
            this.$refs.title.style.top = 0
            this.$refs.title.style.left = 0
        }else{
          this.$refs.title.style.position = '',
          this.$refs.title.style.top = ''
          this.$refs.title.style.left = ''
        }
      },
      deep: true
    }
  },

  methods: {
    routerIn(path) {
      this.$router.push({
        name: path
      });
    },
    handleScroll() {
         this.scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
        this.orrcTop = this.$refs.banner.offsetHeight
      
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
  z-index: 99999;
  div {
    height: 50px;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding: 0;
  }
}
</style>