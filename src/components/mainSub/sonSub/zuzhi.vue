<template>
  <div class="zhang">
    <h4>组织机构</h4>
    <div class="btext">
      <p>
        <i>中华圆明新园收藏家协会</i>
        <i>东阳横店收藏家协会</i>
      </p>
      <br>
      <p>
        协会会员代表大会
      </p>
      <br>
      <p>
        理事会
      </p>
      <br>
      <p>
        <i>顾问委员会</i> <i>常务理事会</i>
      </p>
      <br>
      <p>
        会长
      </p>
      <br>
      <p>
        <i>名誉会长</i>
        <i>常务副会长</i>
        <i>执行副会长</i>
        <i>秘书长、副秘书长</i>
      </p>
      <br>
      <p>
        <i>财务部</i>
        <i>办公室</i>
        <i>事业发展部</i>
        <i>业务拓展部</i>
      </p>
      <br>
      <p>
        <i>理事单位</i>
        <i>副会长</i>
      </p>
      <br>
      <p>
        常务理事
      </p>
      <br>
      <p>
        理事
      </p>
      <br>
      <p>
        会员
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'AssociationBrief',
    data() {
      return {
        bleft: [
          {title: '协会简介', url: ''},
          {title: '协会章程', url: ''},
          {title: '组织机构', url: ''},
          {title: '专家顾问委员会', url: ''},
          {title: '理事会', url: ''}
        ]
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .zhang {
    padding: 20px 0;
    h4 {
      padding-left: 10px;
      line-height: 40px;
      font-size: 16px;
      border-bottom: 1px solid #999999;
      margin-bottom: 20px;
    }
    .btext {
      font-size: 14px;
      line-height: 28px;
      padding: 0 40px;
      font-weight: 600;
      p{
        margin-left: -100px;
      }
      p i{
        margin:0 50px;
        font-weight: 600;
      }
    }
  }
</style>
