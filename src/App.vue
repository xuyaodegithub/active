<template>
  <div id="app" v-bind:style="back">
    <index-page></index-page>
    <div class="callUs">
      <p>联系我们</p>
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <i :class="item.icon"></i>{{item.title}}
          <div>
            <p>{{item.item}}</p>
            <p>{{item.item2}}</p>
            <p>{{item.item3}}</p>
            <p>{{item.item4}}</p>
          </div>

          <!--<div>{{item.item2}}</div>-->
        </li>
      </ul>
    </div>
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
//        backgroundColor:'#E6A23C'
      },
      data:[
//        {title:'姓名',item:'慈琴琴',item2:'赵启洪',icon:'icon iconfont icon-yonghu'},
        {title:'电话',item:'客服1： 18767926188',item2:'客服2： 15325915070',icon:'icon iconfont icon-dianhua'},
        {title:'地址',item:'浙江省东阳市横店镇古民居小南门',icon:'icon iconfont icon-dizhi'},
        {title:'邮编',item:'322118',icon:'icon iconfont icon-lingdang-xianxing'},
        {title:'网址',item:'www.hdscjxh.com',icon:'icon iconfont icon-shezhi'},
      ]
    }
  },
  components:{
    indexPage
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*background: url("../static/logoBack.jpg") repeat center;*/
  text-align: center;
  min-width: 1300px;
  .callUs{
    position: fixed;
    right: 0;
    top:50%;
    margin-top: -80px;
    font-size: 14px;
    line-height: 36px;
    background-color: #999999;
    color: #e6a23c;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    z-index:1000;
    li{
      position: relative;
    }
    li:hover > div{
      display: block;
    }
    i{
      font-size: 14px;
      margin-right: 5px;
    }
    div{
      font-size: 14px;
      display: none;
      position: absolute;
      top:0;
      left:-150px;
      color: #ffffff;
      background-color: #999999;
      width:150px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
      border-radius: 10px;
      line-height: 22px;
      margin-top: 8px;
    }
}
}
</style>
