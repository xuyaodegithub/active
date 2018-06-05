<template>
  <div>
    <div class="auction">
      <div class="aucflex">
        <h4>拍品预告</h4>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
        <el-button type="primary" plain size="mini">搜索</el-button>
        <div class="span cu">更多</div>
      </div>
      <ul>
        <li v-for="(item,index) in dataList.item" @click="toDetial(item)" class="cu">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <vCard :leftData="shareNow" style="margin-bottom: 15px"></vCard>
    <vCard :leftData="oldList"></vCard>
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
        shareNow: {
          title: '拍品展示', type: true, block: false, item: [
            {
              title: '小猪佩奇',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '小猪佩奇',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '野猪乔治',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '野猪乔治',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '野猪乔治',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '紫砂砚台',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '紫砂砚台',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '海南佛像',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '绿松手链',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '绿松手链',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '小叶紫檀',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '小叶紫檀',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
          ]
        },
        dataList: {
          title: '当前拍品', type: true, item: [
            {
              title: '小猪佩奇',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '野猪乔治',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '紫砂砚台',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '海南佛像',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '绿松手链',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '小叶紫檀',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
          ]
        },
        oldList: {
          title: '往期拍卖', type: true, item: [
            {
              title: '小猪佩奇',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/f18ff861b73f4ef0a88599c3558415ef81b67400'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '野猪乔治',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/82c05593afd738a21181c523c3d20577cd9c06d5'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '紫砂砚台',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/8292f6edc854830297bb732bb893e6ff44f11be5'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '海南佛像',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/4e3ccc00ba36ddcdd822e63cd76291f66c9522d1'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '绿松手链',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/bccb1743ddc0281c8dff3e420384173e4d8f06e8'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '小叶紫檀',
              imgName: '',
              imgUrl:'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/bccb1743ddc0281c8dff3e420384173e4d8f06e8'
//              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
          ]
        },
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {
      vCard
    },
    methods: {
      toDetial(item) {
        this.$router.push('/artDetial?id=' + 12)
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
      flex: 1;
    }
    .el-button--mini, .el-button--mini.is-round {
      padding: 0px 10px;
      /*height:28px;*/
      /*display: inline-block;*/
      /*vertical-align: middle;*/
    }
  }
</style>
