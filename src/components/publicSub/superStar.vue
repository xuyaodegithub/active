<template>
      <div class="card">
          <div class="Cheader">
            <h4>{{leftData.title}}</h4>
            <p>更多</p>
          </div>
        <ul>
            <li v-for="(item,index) in leftData.item" class="cu" @click="toDetial(item)">
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
            </li>
        </ul>
        <!--<div class="block" v-if="leftData.item.length>6 && leftData.block">
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
    name: 'super',
    props:['leftData'],
    data() {
      return {
        currentPage5:1,
        Newsrows:10,
//        leftData: [
//          {title: '瓷器', titlename: ''}, {title: '玉器', titlename: ''}, {title: '字画', titlename: ''},
//          {title: '金属器', titlename: ''}, {title: '杂项', titlename: ''},
//        ]
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {},
    methods:{
      changeType(item){

      },
      toDetial(item){
        this.$router.push('/artDetial?id='+12)
      }
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
      padding:5px 10px;
      border: 1px solid #999999;
      font-size: 16px;
      line-height: 30px;
      margin: 15px 0;
      .Cheader {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #999999;
        padding:5px 20px 5px 0;
      }
      ul {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        padding: 10px 5px 5px 5px;
        justify-content: space-between;
        li {
          width:120px;
          /*margin-right: 35px;*/
          img{
            display: block;
            width:100%;
            height: 120px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            border-radius: 50%;
          }
          p{
            margin-top: 14px;
            text-align: center;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
</style>
