<template>
  <div class="Art">
    <div class="Atop">
      <h4>艺术文库</h4>
      <ul>
        <li v-for="(item,index) in navList" class="cu">
          {{item.title}}
        </li>
      </ul>
    </div>
     <ul class="Abuttom">
       <li v-for="(item,index) in artList" class="cu" @click="toDetial(item)">
         <img :src="item.lmgUrl" alt="">
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
        :page-sizes="[10, 20, 30, 40]"
        :page-size="rows"
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
    name: 'Art',
    data() {
      return {
        currentPage4: 1,
        rows: 10,
        navList: [
          {title: '全部', url: ''}, {title: '瓷器', url: ''}, {title: '玉器', url: ''},
          {title: '字画', url: ''}, {title: '金属器', url: ''}, {title: '杂项', url: ''},
        ],
        artList: [
          {
            title: '图一',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图二',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图三',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图四',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图五',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图六',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图七',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图八',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图九',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十一',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十二',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十三',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十四',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十五',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
          {
            title: '图十六',
            lmgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
          },
        ]
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toDetial(item){
        this.$router.push('/artDetial?id='+12)
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
    font-size: 16px;
    border-bottom: 1px solid #999999;
    h4 {
      margin-right: 50px;
      padding-left: 10px;
    }
    ul {
      display: flex;
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
