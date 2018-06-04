<template>
  <div id="app" v-bind:style="back">
    <index-page></index-page>
  </div>
</template>

<script>
  import indexPage from './components/pageHome/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return {
      back: {
        backgroundImage: "url("+ require("./assets/logoBack.jpg")+")",
        backgroundRepeat: "repeat",
        backgroundSize: "center"
      }
    }
  },
  components:{
    indexPage
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*background: url("../static/logoBack.jpg") repeat center;*/
  text-align: center;
  min-width: 1300px;
}
</style>
