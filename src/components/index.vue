<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            ref="but"
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">nCoV</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" >
            <li>
              <a @click="routerIn('chinese')">全国</a>
            </li>
            <li>
              <a @click="routerIn('hube')">湖北</a>
            </li>
            <li>
              <a href="#">海外</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                其他
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="http://www.baidu.com">同车信息查询</a>
                </li>
                <li>
                  <a href="#">测试2 action</a>
                </li>
                <li>
                  <a href="#">测试3 else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
         screenWidth: document.body.clientWidth  
    };
  },

  methods: {
    getinfo() {},
    routerIn(path) {
      this.$router.push({
        name: path
      });
      this.outIn()
    },

    //自动收回菜单
    outIn() {
    var that =this
    var a = document.querySelector(".navbar-toggle");
        if(that.screenWidth < 768 ){
            a.click()
        }
         
    }
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  border: 1px solid #000;
}
img {
  width: 100%;
}

.row {
  margin-left: 0px;

  margin-right: 0px;
}
</style>