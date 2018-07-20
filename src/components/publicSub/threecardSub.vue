<template>
      <div class="card">
          <div class="Cheader">
            <h4>会员藏品</h4>
            <p @click="toMove()" class="cu">更多</p>
          </div>
        <ul>
          <li class="cup">
            <p v-for="(item,index) in leftData" class="cu" @click="changeType(item,index)" :class="{activeP : activekey===index}">{{item.title}}</p>
          </li>
          <li v-for="(item,index) in dataList" style="width: 190px;padding: 5px;" class="cu fiveTe" :class="{activeFive : index===4}" @click="toDetial(item)">
            <img :src="item.titleImg" alt="">
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
    name: 'threecard',
    props:['msg'],
    data() {
      return {
        activekey:0,
        currentPage5:1,
        Newsrows:10,
        leftData: [
          {title: '瓷器', titlename: ''}, {title: '玉器', titlename: ''}, {title: '字画', titlename: ''},
          {title: '金属器', titlename: ''}, {title: '杂项', titlename: ''},
        ]
      }
    },
    computed: {
      ...mapGetters([
        'indexDataResult'
      ]),
      dataList(){
        if(this.activekey===0){
          return this.indexDataResult.obj.porcelainList
        }else if(this.activekey===1){
          return this.indexDataResult.obj.jadewareList
        }else if(this.activekey===2){
          return this.indexDataResult.obj.paintingsList
        }else if(this.activekey===3){
          return this.indexDataResult.obj.metalwareList
        }else if(this.activekey===4){
          return this.indexDataResult.obj.miscellaneousList
        }
      }
    },
    components: {},
    methods:{
      changeType(item,key){
          this.activekey=key
      },
      toDetial(item){
        this.$router.push('/artDetial?id='+item.id)
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
      toMove(){
        this.$router.push('/ArtLibrary')
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
        .activeP{
          color:#bd2c00;
        }
        li:first-child{
          border-right: 1px solid #999999;
          margin-right: 15px;
          width:125px;
          padding: 5px 15px 0 10px;
        }
        li {
          img{
            display: block;
            width:100%;
            height: 190px;
          }
          p{
           margin-top: 14px;
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
</style>
