<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
       <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group"><!-- 路由链接 -->
              <router-link class="list-group-item" to="/about">About</router-link>
              <router-link class="list-group-item" to="/home">Home</router-link>
          </div>
       </div>
       <div class="col-xs-6">
          <div class="penel">
              <div class="panel-body">
                  <keep-alive include="About">
                      <!-- 在此处显示当前路由组件 -->
                      <router-view msg ="abc"></router-view>
                  </keep-alive>
              </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped>


</style>