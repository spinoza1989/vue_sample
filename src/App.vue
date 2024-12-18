<script setup lang="ts">
 import  {RouterView,RouterLink} from "vue-router"
</script>

<template>
 <h2>Vue路由测试</h2>

 <div class="navigate">
  <ul>
    <li> <router-link to="/home">首页</router-link></li>
    <li> <router-link to="/news">新闻</router-link></li>
    <li>  <router-link to="/about">关于</router-link></li>
  </ul>
 
 

 </div>

 <div class="content">

   <router-view></router-view>
 </div>

 
</template>

<style scoped>
  .content {
    border: 1px solid red;
  }
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
