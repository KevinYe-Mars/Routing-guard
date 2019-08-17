<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
      <!-- <router-view></router-view>如果有两个就会再次映射 -->
      <!-- 是用来渲染通过路由映射过来的组件 -->
    </div>
    <br />
    <!-- 下面的router-view为公共的谁需要就引用 -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='orderingguide'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='delivery'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='history'></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
components:{
  "app-header":Header
}
}
</script>

<style>
</style>
 