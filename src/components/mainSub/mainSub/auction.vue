<template>
  <div>
    <div class="auction">
      <div class="aucflex">
        <h4>拍品预告</h4>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
        <el-button type="primary" plain size="mini">搜索</el-button>
        <div class="span cu" @click="toMove()">更多</div>
      </div>
      <ul>
        <li v-for="(item,index) in auctionsProductbefoeResult.list" @click="toDetial(item)" class="cu">
          <img :src="item.titleImg" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div>
      <vCard :leftData="auctionsProductnowResult.list" style="margin-bottom: 15px" :title="title" :type="2"></vCard>
    </div>
    <div>
      <vCard :leftData="auctionsProductagoResult.list" :title="twoTitle" :type="3"></vCard>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vCard from '../../publicSub/cardSub.vue'

  export default {
    name: 'auction',
    data() {
      return {
        input: '',
        title:'拍品展示',
        twoTitle:'往期拍品',
      }
    },
    computed: {
      ...mapGetters([
        'auctionsProductbefoeResult','auctionsProductnowResult','auctionsProductagoResult'
      ])
    },
    mounted(){
      let data={
        page:1,
        limit:6,
        type:1
      }
      this.auctionsProductActions(data)
      let data2={
        page:1,
        limit:6,
        type:2
      }
      this.auctionsProductActions(data2)
      let data3={
        page:1,
        limit:6,
        type:3
      }
      this.auctionsProductActions(data3)
    },
    components: {
      vCard
    },
    methods: {
      ...mapActions([
        'auctionsProductActions'
      ]),
      toDetial(item) {
        this.$router.push('/artDetial?id=' + 12)
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
      toMove(){
        this.$router.push('/morePai?type='+ 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .auction {
    padding: 0px 12px;
    border:1px solid #999999;
    margin: 15px 0;
    ul {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      padding: 10px 5px 5px 5px;
      flex-wrap: wrap;
      li {
        width: 190px;
        margin-right: 12px;
        padding: 5px;
        &:nth-child(6n) {
          margin-right: 0;
        }
        img {
          display: block;
          width: 100%;
          height: 190px;
        }
        p {
          font-size: 14px;
          text-align: center;
          line-height: 36px;
        }
      }
    }
  }

  .aucflex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /*margin-top: 15px;*/
    font-size: 18px;
    line-height: 28px;
    padding:15px;
    border-bottom: 1px solid #999999;
    h4 {
      margin-right: 80px;
    }
    .el-input {
      width: 150px;
      margin-right: 5px;
    }
    .span {
      text-align: right;
      /*flex: 1;*/
     margin-left: 850px;
    }
    .el-button--mini, .el-button--mini.is-round {
      padding: 0px 10px;
      /*height:28px;*/
      /*display: inline-block;*/
      /*vertical-align: middle;*/
    }
  }
</style>
