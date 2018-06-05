<template>
  <div style="padding-top: 15px">
   <!-- <div class="first">
      <div class="fleft">
        <h4>艺术文库</h4>
        <ul>
          <li v-for="(item,index) in leftData.item" :key="index" class="cu">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="fright">
        <v-card :leftData="leftData"></v-card>
        &lt;!&ndash; <div class="rTop">
           <h4>名家风采</h4>
           <span class="cu">更多</span>
         </div>
         <ul>
           <li v-for="item in 5">
             {{item}}
           </li>
         </ul>&ndash;&gt;
      </div>
    </div>-->
    <v-super :leftData="leftData"></v-super>
    <div>
      <vthree-card :msg="shareimg"></vthree-card>
    </div>
    <!--<div class="first">
      <div class="fleft">
        <h4>艺术文库</h4>
        <ul>
          <li v-for="(item,index) in leftData.item" :key="index" class="cu">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="fright nomargin">
        <v-card :leftData="shareimg"></v-card>
        &lt;!&ndash; <div class="rTop">
           <h4>名家风采</h4>
           <span class="cu">更多</span>
         </div>
         <ul>
           <li v-for="item in 5">
             {{item}}
           </li>
         </ul>&ndash;&gt;
      </div>
    </div>-->
    <!--<div class="shareImg" style="margin: 10px 0;">-->
      <!--<v-card :leftData="shareimg"></v-card>-->
    <!--</div>-->
    <div class="nowGoods">
      <v-card :leftData="shareNow"></v-card>
    </div>
    <div class="news">
      <div class="nleft">
        <div class="ntop">
          <h4>政策法规</h4>
          <span class="cu">更多</span>
        </div>
        <ul class="nbottom">
          <li v-for="(item,index) in news" :key="index" class="over cu" @click="toDetial(item)">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="newscenter" v-for="item in newsList">
        <div class="ntop">
          <h4>{{item.title}}</h4>
          <span class="cu">更多</span>
        </div>
        <ul class="nbottom">
          <li v-for="val in item.item" class="cu"  @click="toDetial(item)">
            <p  class="over">{{val.title}}</p>
            <p>{{val.timer}}</p>
          </li>
        </ul>
      </div>
      <!--<div class="newscenter">
        <div class="ntop">
          <h4>新闻动态</h4>
          <span>更多</span>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vCard from '../../publicSub/cardSub.vue'
  import vthreeCard from '../../publicSub/threecardSub.vue'
  import vSuper from '../../publicSub/superStar.vue'

  export default {
    name: 'first',
    data() {
      return {
        leftData: {
          title: '名家风采',type:false, item: [
            {title: '瓷器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '瓷器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '瓷器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '玉器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182727570&di=142c0b3eb232c9b1dfdf6c7a2c5597b0&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg8%2FM06%2FCC%2F94%2FwKhQtlQasGyEXM18AAAAAIWKz4Y519.jpg'},
            {title: '字画', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182727568&di=6e4eb061e274af3d89f46f7fbdf6b102&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D92387e7a80d4b31ce4319cfbeeae4213%2F09fa513d269759eee5b805f2b9fb43166d22df1b.jpg'},
            {title: '金属器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182825367&di=85031dfaf7b2708729b5160f50854992&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D894973757%2C3687128431%26fm%3D214%26gp%3D0.jpg'},
            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182727567&di=b85dfedb5ca8c94a1bcbfad2dae0bfcf&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fm1%2FM02%2F6D%2F6F%2FwKhQcFQ09UCEF6rwAAAAAF4xVOk693.jpg'},
            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182727567&di=b85dfedb5ca8c94a1bcbfad2dae0bfcf&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fm1%2FM02%2F6D%2F6F%2FwKhQcFQ09UCEF6rwAAAAAF4xVOk693.jpg'},
          ]
        },
        shareimg:{
          title: '藏品鉴赏',type:true, item: [
            {title: '瓷器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '玉器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '字画', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '金属器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
//            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527182727567&di=b85dfedb5ca8c94a1bcbfad2dae0bfcf&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fm1%2FM02%2F6D%2F6F%2FwKhQcFQ09UCEF6rwAAAAAF4xVOk693.jpg'},
          ]
        },
        shareNow:{
          title: '当前拍品',type:true, item: [
            {title: '瓷器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '玉器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '字画', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '金属器', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
            {title: '杂项', imgName: '',imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'},
          ]
        },
        news:[
          {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:''},{title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:''},{title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:''},
          {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:''},{title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:''}
        ],
        newsList:[{title:'通知公告',item:[
          {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘品移交管考古发掘品移交管考古发掘考古发掘品移交管品移交管',url:'',timer:'2018-05-27'},
          {title:'考古发掘品移交管考古考古发掘品移交管发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘考古发掘品移交管品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'}
        ]},{title:'新闻动态',item:[
          {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘品移交管考古发掘品移交管考古发掘考古发掘品移交管品移交管',url:'',timer:'2018-05-27'},
          {title:'考古发掘品移交管考古考古发掘品移交管发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'},{title:'考古发掘考古发掘品移交管品移交管考古发掘品移交管考古发掘品移交管',url:'',timer:'2018-05-27'}
        ]},],
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {
      vCard,vthreeCard,vSuper
    },
    methods:{
      toDetial(item){
        this.$router.push('/newsDetial?id='+12)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .first {
    margin-top: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    margin: 10px 0;
    h4 {
      font-size: 18px;
      text-align: left;
      line-height: 30px;
    }
    .fleft {
      padding: 5px 0;
      border: 1px solid #999999;
      width: 140px;
      text-align: center;
      font-size: 14px;
      line-height: 35px;
      padding-left: 10px;
      li {
        margin-bottom: 5px;
        &:hover{
          color: #bd2c00;
        }
      }
    }
    .fright {
      flex: 1;
      margin-left: 14px;
    }
    .fright.nomargin{
     margin-left: 0;
    }
  }
  .news{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    text-align: left;
    /*padding-left:10px;*/
    margin-top: 20px;
    .nbottom{
     // padding:0 15px;
      line-height: 30px;
      font-size:14px;
      padding-bottom: 15px;
      li:hover{
        color: #bd2c00;
      }
      li{
        border-bottom: 1px solid #999999;
        padding:3px 10px;
      }
    }
    .ntop{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #999999;
      line-height: 30px;
      font-size: 16px;
      padding:0 10px;
    }
    .nleft{
      width:262px;
     // padding:2px 10px 2px 0;
      border:1px solid #999999;
      padding:5px 10px;
      margin-right: 15px;
    }
    .newscenter{
      width:460px;
      &:nth-child(2){
        margin-right:15px;
      }
      border:1px solid #999999;
      padding:5px 10px;
      .nbottom li{
        display: flex;justify-content: space-between;
        .over{
          width:75%;
        }
      }
    }
    .newscenter:last-child{
      flex: 1;
    }
  }
</style>
