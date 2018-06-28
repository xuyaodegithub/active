<template>
  <div class="NoticeBulletin">
    <div class="ntop">
      <h4>通知公告</h4>
      <!--<span class="cu">更多</span>-->
    </div>
    <ul class="nbottom">
      <li v-for="val in twoNewsResult.list" class="cu" @click="toDetial(val)">
        <p class="over">{{val.title}}</p>
        <p>{{val.publishTime | changeTime}}</p>
      </li>
    </ul>
    <div class="block">
      <el-pagination
        small
        :pager-count="5"
        @size-change="handleSizeChangeNews"
        @current-change="handleCurrentChangeNews"
        :current-page="currentPage5"
        :page-sizes="[5, 10, 15]"
        :page-size="Newsrows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="twoNewsResult.pager ? twoNewsResult.pager.totalRows : 0">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'NoticeBulletin',
    data() {
      return {
        currentPage5: 1,
        Newsrows: 5,
      }
    },
    computed: {
      ...mapGetters([
        'twoNewsResult'
      ])
    },
    mounted(){
      this.getTellList()
    },
    components: {},
    methods: {
      ...mapActions([
        'oneNewsActions'
      ]),
      handleSizeChangeNews(val) {
//        console.log(`每页 ${val} 条`);
        this.Newsrows=val
        this.getTellList()
      },
      handleCurrentChangeNews(val) {
//        console.log(`当前页: ${val}`);
        this.currentPage5=val
        this.getTellList()
      },
      getTellList(){
        let data={
          page:this.currentPage5,
          limit:this.Newsrows,
          type:2
        }
        this.oneNewsActions(data)
      },
      toDetial(item) {
        this.$router.push('/newsDetial?id='+item.id)
        this.$store.commit('NEWS_DETIALS_CHANGE',item.content)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .NoticeBulletin {
    padding: 15px 60px;
  }

  .ntop {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999999;
    line-height: 30px;
    font-size: 16px;
    padding: 0 20px;
  }

  .nbottom {
    // padding:0 15px;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    padding-bottom: 15px;
    li:hover {
      color: #bd2c00;
    }
    li {
      border-bottom: 1px solid #999999;
      padding: 5px 15px;
    }
  }

  .NoticeBulletin {
    border: 1px solid #999999;
    .nbottom li {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      justify-content: space-between;
      .over {
        width: 70%;
      }
    }
  }
</style>
