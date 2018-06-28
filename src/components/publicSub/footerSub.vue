<template>
  <div class="footer">
    <div class="margin mtop">
      <p>友情链接</p>
      <ul>
        <li v-for="(item, index) in msg" :key="index" class="cu" @click="toUrl(item)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="redSsolid"></div>
    <div class="margin mbottom">
      <p>首页 | 协会简介 | 联系我们</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: 'footer1',
  data () {
    return {
      msg: [
        {title:'国家AAAAA级旅游景区—横店影视城官网，提供横店影视城门票、酒店、旅游套餐等预订服务',url:' http://www.hengdianworld.com/'},
        {title:'横店集团控股有限公司',url:'http://www.hengdian.com/'},{title:'圆明新园|横店圆明新园门票|横店圆明园新园官方网站 ',url:' http://www.hdyuanmingxinyuan.com/'},
//        {title:'浙江省收藏家协会',url:''},{title:'安徽省收藏家协会',url:''},
      ],

    }
  },
  computed:{
    ...mapGetters([
      'result'
    ])
  },
  methods:{
    toUrl(item){
      window.open(item.url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer .mtop{
  padding:10px 0 0 0px;
  margin-bottom: 30px;
  border-top: 1px solid #999999;
  margin-top: 25px;
  p{
    line-height:40px;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  ul{
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    margin-left: 20px;
    font-size: 14px;
    li{
      border-bottom:1px solid #333333;
      margin-right: 50px;
    }
  }
}
  .redSsolid{
    height:25px;
    background: #EE0707;
    min-width: 1300px;
  }
  .mbottom{
    line-height:40px;
    margin-top:10px;
    /*margin-bottom: 40px;*/
  }
</style>
