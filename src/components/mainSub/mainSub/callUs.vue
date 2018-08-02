<template>
  <div class="callUs">
    <h4>联系我们</h4>
    <div class="adress">
      <div class="lft">
        <h5 style="font-size: 36px;">东阳横店收藏家协会</h5>
        <p>邮编：322118</p>
        <p>联系电话：0579-86776930 0579-86566338</p>
        <p>联系地址：浙江省东阳市横店镇古民居小南门</p>
        <p>网址：www.hdscjxh.com</p>
      </div>
      <div>
        <img :src="imgimg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'callUs',
    data() {
      return {
        imgimg:'static/qqqq.jpg'
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .callUs {
    padding-top: 20px;
    font-size: 16px;
    line-height: 36px;
    h4 {
      font-size: 18px;
      text-align: left;
      border-bottom: 1px solid #999999;
      line-height: 42px;
    }
    .adress{
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      padding-top: 15px;
      text-indent: 2em;
      .lft{
        margin-right: 60px;
      }
    }
  }

</style>
