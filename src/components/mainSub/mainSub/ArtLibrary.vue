<template>
  <div class="Art">
    <div class="Atop">
      <h4>艺术文库</h4>
      <ul>
        <li v-for="(item,index) in navList" class="cu" :class="{activeLi : whichkey===index}"
            @click="changeType(item,index)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <ul class="Abuttom">
      <li v-for="(item,index) in artsBookResult.list" class="cu" @click="toDetial(item)">
        <img :src="item.titleImg" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
    <!--<v-card :msg=""></v-card>-->
    <div class="block">
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="5"
        :current-page="currentPage4"
        :page-sizes="[18, 30, 40, 50]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="artsBookResult.pager ? artsBookResult.pager.totalRows : 0">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'Art',
    data() {
      return {
        whichkey: 0,
        currentPage4: 1,
        rows: 18,
        type: '',
        navList: [
          {title: '全部', url: ''}, {title: '瓷器', url: ''}, {title: '玉器', url: ''},
          {title: '字画', url: ''}, {title: '金属器', url: ''}, {title: '杂项', url: ''},
        ],
      }
    },
    computed: {
      ...mapGetters([
        'artsBookResult'
      ])
    },
    components: {},
    mounted() {
      this.getsomeLsit()
    },
    methods: {
      ...mapActions([
        'artsBookActions'
      ]),
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
        this.rows = val
        this.getsomeLsit()
      },
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
        this.currentPage4 = val
        this.getsomeLsit()
      },
      toDetial(item) {
        this.$router.push('/artDetial?id=' + item.id)
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
      changeType(val, key) {
        this.whichkey = key
        this.currentPage4 = 1
        this.rows = 18
        if(key>0){
          this.type=key
        }else{
          this.type=''
        }
        this.getsomeLsit()
      },
      getsomeLsit() {
        let data = {
          "page": this.currentPage4,
          "limit": this.rows,
          "type": this.type
        }
        this.artsBookActions(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Art {
    padding: 5px 10px 50px 10px;
    border: 1px solid #999999;
    margin-top: 20px;
  }

  .Atop {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    line-height: 40px;
    font-size: 18px;
    border-bottom: 1px solid #999999;
    h4 {
      margin-right: 50px;
      padding-left: 10px;
    }
    ul {
      display: flex;
      .activeLi {
        color: #bd2c00;
        /*border-bottom: 1px solid #bd2c00;*/
      }
      li {
        margin-right: 30px;
      }
      li:hover {
        color: #bd2c00;
      }
    }
  }

  .Abuttom {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    li {
      width: 190px;
      padding: 5px;
      margin-right: 15px;
      &:nth-child(6n) {
        margin-right: 0;
      }
      li:hover {
        color: #bd2c00;
      }
      img {
        display: block;
        width: 100%;
        height: 190px;
      }
      p {
        font-size: 16px;
        line-height: 36px;
      }
    }
  }

  .block {
    margin: 50px;
    .el-select {
      margin-top: -10px;
    }
  }
</style>
