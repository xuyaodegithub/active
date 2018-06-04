<template>
  <div class="News">
    <div class="Nleft">
      <div class="nleft">
        <div class="ntop">
          <h4>政策法规</h4>
          <span class="cu">更多</span>
        </div>
        <ul class="nbottom">
          <li v-for="(item,index) in news" :key="index" class="over cu"  @click="toDetial(item)">
            {{item.title}}
          </li>
        </ul>
        <div class="block">
          <el-pagination
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :pager-count="5"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="rows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="Nright">
      <div class="ntop">
        <h4>新闻动态</h4>
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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'NewsInformation',
    data() {
      return {
        msg: 'gogogo',
        currentPage4:1,
        currentPage5:1,
        Newsrows:10,
        rows:10,
        news: [
          {title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管', url: ''}, {
            title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管',
            url: ''
          }, {title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管', url: ''},
          {title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管', url: ''}, {title: '考古发掘品移交管考古发掘品移交管考古发掘品移交管', url: ''}
        ],
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
    beforeRouteLeave(to, from, next) {//路由组件守卫钩子函数
//      this.$confirm('确定要删除该产品么？, 是否继续?', '提示', {
//        confirmButtonText: '确定',
//        cancelButtonText: '取消',
//        type: 'warning'
//      }).then(() => {
//
//      }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消删除'
//        })
//      })
      if (this.msg === 'gogogo') {
        next()
      } else {
        next(false)
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {},
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
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
<style lang="scss">
  .News {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    text-align: left;
    margin-top: 20px;
    padding:20px 0;
    .el-pagination .el-select .el-input{
      width:80px;margin-top: -10px;
    }
    .el-pagination__jump{
      margin-left: 0;
    }
    .el-pagination__total{
      margin-left: 0;
    }
    .el-pagination__sizes{
      margin: 0;
    }
    .block{
      margin: 10px 0 30px 0;
      text-align: right;
    }
    .nbottom {
      // padding:0 15px;
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
    .Nleft {
      width: 500px;
      // padding:2px 10px 2px 0;
      border: 1px solid #999999;
      padding: 8px 10px;
      margin-right: 25px;
    }
    .Nright {
      width:740px;
      border: 1px solid #999999;
      padding: 8px 10px;
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
  }
</style>
