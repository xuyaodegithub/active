<template>
  <div class="callUs">
    <h4>会员注册</h4>
    <div class="adress">
      <p><label>单位名称:</label><el-input v-model="input0" placeholder="请输入内容" size="small"></el-input></p>
      <p><label>联系方式:</label><el-input v-model="input1" placeholder="请输入内容" size="small"></el-input></p>
      <p><el-button type="success" size="small">提交申请</el-button></p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'jionUs',
    data() {
      return {
        input0:'',
        input1:'',
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
      padding:15px 20px;
      font-size: 16px;
      line-height: 36px;
      p{
        margin-bottom: 20px;
      }
      .el-input{
        width:200px;
        margin-left: 20px;
      }
      .el-button{
        width:100px;
        margin-top: 40px;
      }
    }
  }

</style>
