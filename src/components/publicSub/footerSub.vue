<template>
  <div class="footer">
    <div class="margin mtop">
      <p>友情链接</p>
      <ul>
        <li v-for="(item, index) in msg" :key="index" class="cu" @click="toUrl(item)">
          <img :src="item.imgUrl" alt="">
        </li>
      </ul>
    </div>
    <div class="redSsolid"></div>
    <div class="margin mbottom">
      <p><span class="cu" @click="toPage(1)">首页</span> | <span class="cu" @click="toPage(2)">协会简介</span> | <span class="cu" @click="toPage(3)">联系我们</span></p>
    </div>
    <div class="lastOne">
      青鸟科技提供技术支持
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
        {title:'国家AAAAA级旅游景区—横店影视城官网，提供横店影视城门票、酒店、旅游套餐等预订服务',url:' http://www.hengdianworld.com/',imgUrl:'static/yingshi.png'},
        {title:'横店集团控股有限公司',url:'http://www.hengdian.com/',imgUrl:'static/hendian.png'},{title:'圆明新园|横店圆明新园门票|横店圆明园新园官方网站 ',url:' http://www.hdyuanmingxinyuan.com/',imgUrl:'static/yuanming.jpg'},
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
    },
    toPage(key){
      if(key===1){
        this.$router.push('/')
      }else if(key===2){
        this.$store.commit('SET_TITLLE_RESULT',{title:'vjie'})
        this.$router.push('/AssociationBrief')
      }else{
        this.$store.commit('SET_TITLLE_RESULT',{title:'vzhang'})
        this.$router.push('/AssociationBrief')
      }
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
      /*border-bottom:1px solid #333333;*/
      margin-right: 50px;
      line-height:100px;
      img {
        display: inline-block;
      }
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
  .lastOne{
    text-align: center;
    font-size: 12px;
    color: #777777;
    padding-bottom: 20px;
  }
</style>
