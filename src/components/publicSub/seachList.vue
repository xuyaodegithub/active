<template>
      <div class="card">
        <!--<div class="rTop">-->
          <!--<h4>{{title}}</h4>-->
          <!--<span class="cu" @click="toMove()">更多</span>-->
        <!--</div>-->
        <div v-if="seachWordsResult.list.length===0 || !seachWordsResult.list">
          暂无数据......
        </div>
        <ul style="flex-wrap: wrap;" v-else>
      <!--    <li v-for="(item,index) in seachWordsResult.list"  v-if="leftData.length===5" style="width: 190px;padding: 5px;" class="cu fiveTe" :class="{activeFive : index===4}" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;height: 190px;">
            <p>{{item.title}}</p>
          </li>
         <li v-for="(item,index) in seachWordsResult.list" v-if="leftData.length===6" style="width: 190px;padding: 5px;" class="cu" :class="{addmar :index!==5}" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;height: 190px;">
            <p>{{item.title}}</p>
          </li>-->
          <li v-for="(item,index) in seachWordsResult.list" style="width: 190px;padding: 5px;" class="cu teimg" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;height: 190px;">
            <p>{{item.title}}</p>
          </li>
        </ul>
        <!--<div class="block" v-if="leftData.length>6 && leftData.block">
          <el-pagination
            small
            :pager-count="5"
            @size-change="handleSizeChangeNews"
            @current-change="handleCurrentChangeNews"
            :current-page="currentPage5"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="Newsrows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>-->
      </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'card',
    props:['leftData','title','type'],
    data() {
      return {
        currentPage5:1,
        Newsrows:10,
        /*leftData: [
          {title: '瓷器', titlename: ''}, {title: '玉器', titlename: ''}, {title: '字画', titlename: ''},
          {title: '金属器', titlename: ''}, {title: '杂项', titlename: ''},
        ]*/
      }
    },
    computed: {
      ...mapGetters([
        'seachWordsResult'
      ])
    },
    components: {},
    methods:{
      handleSizeChangeNews(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChangeNews(val) {
        console.log(`当前页: ${val}`);
      },
      toDetial(item){
        this.$router.push('/artDetial?id='+item.id)
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h4 {
      font-size: 18px;
      text-align: left;
      line-height: 30px;
    }
    .card {
      span {
        font-size: 16px;
        text-align: left;
        line-height: 30px;
      }
      .rTop {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #999999;
        padding:5px 20px 5px 0;
      }
      padding: 5px 10px;
      border: 1px solid #999999;
      ul {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        padding: 10px 5px 5px 5px;
        .addmar{
          margin-right: 13px;
        }
        li {
          width: 18%;
          /*height: 190px;*/
          /*margin-right: 20px;*/
          img{
            display: block;
            width:100%;
            height: 162px;
          }
          p{
           margin-top: 12px;
            text-align: center;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .fiveTe{
          margin-right: 25px;
        }
        .fiveTe.activeFive{
          margin-right: 0;
        }
      }
    }
.teCard{
 border-left: none;
  padding-left: 14px;
}
li.teimg{
  margin-right: 13px;
}
  .teimg:nth-child(6n){
    margin-right: 0;
  }
  .block{
    margin: 30px auto;
  }
</style>
