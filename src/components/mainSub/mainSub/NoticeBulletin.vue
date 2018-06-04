<template>
  <div class="NoticeBulletin">
      <div class="ntop">
        <h4>通知公告</h4>
        <span class="cu">更多</span>
      </div>
      <ul class="nbottom">
        <li v-for="val in newsList" class="cu" @click="toDetial(val)">
          <p class="over">{{val.title}}</p>
          <p>{{val.timer}}</p>
        </li>
      </ul>
      <div class="block">
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
        currentPage5:1,
        Newsrows:10,
        newsList: [
          {
            title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',
            url: '',
            timer: '2018-05-27'
          }, {
            title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',
            url: '',
            timer: '2018-05-27'
          }, {title: '考古发掘品移交管考古发掘品移交管考古发掘考古发掘品移交管品移交管', url: '', timer: '2018-05-27'},
          {
            title: '考古发掘品移交管考古考古发掘品移交管发掘品移交管考古发掘品移交管',
            url: '',
            timer: '2018-05-27'
          }, {title: '考古发掘考古发掘品移交管品移交管考古发掘品移交管考古发掘品移交管', url: '', timer: '2018-05-27'}
        ]
      }
    },
    computed: {
      ...mapGetters([

      ])
    },
    components: {

    },
    methods:{
      handleSizeChangeNews(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChangeNews(val) {
        console.log(`当前页: ${val}`);
      },
      toDetial(item){
        this.$router.push('/newsDetial')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .NoticeBulletin{
    padding:15px 60px;
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
