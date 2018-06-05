<template>
  <div class="callUs">
    <h4>联系我们</h4>
    <div class="adress">
      <div class="lft">
        <p>浙江省东阳市横店镇231号</p>
        <p>tel：0579-86642183</p>
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
