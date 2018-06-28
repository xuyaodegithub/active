<template>
  <div class="demo incomingHistory">
    <div class="popover-head">
      <span class="title">视频详情</span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <video id="playVideo" :src="popoverAlive.SSSnum"  controls  @click="toplay()" ref="video" class="cu" width="700" height="400">
        <source :src="popoverAlive.SSSnum" type="video/mp4">
        <source :src="popoverAlive.SSSnum" type="video/ogg">
        <source :src="popoverAlive.SSSnum" type="video/webm">
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .demo{
    /*width: 800px;*/
    /*height: 420px;*/
    background: #F0FAFF;
    margin-left: -320px;
    margin-top: -280px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #C0C4CC;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
    text-align:left;
  }
  .popover-head i{
    float: right;
    color: #ffffff;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }
  .popover-head .title{
    margin-left: 15px;
    font-weight: bold;
  }
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    /*padding: 20px 12.5px;*/
    /*width: calc(100% - 25px);*/
    /*height:480px;*/
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .table-head{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #F1F4F7;
    border: 1px solid #E7ECF1;
  }
  .table-head .head-item{
    width: 100%;
    flex: 1;
  }
  .table-head .big{
    width: 100%;
    flex: 2;
  }
  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-box{
    width: 100%;
    height: 120px;
    overflow: auto;
    background: #ffffff;
    border-left: 1px solid #E7ECF1;
    border-right: 1px solid #E7ECF1;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list{
    width: 100%;
    display: flex;
    height: 28px;
    line-height: 28px;

    flex-direction: row;
    background: #ffffff;
    border-bottom: 1px solid #E7ECF1;
  }
  .table-list .head-item{
    width: 100%;
    flex: 1;
  }
  .table-list .head-item .blue{
    color: #1476CC;
    cursor: pointer;
  }
  .table-list .big{
    width: 100%;
    flex: 2;
  }
  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        balanceDetail:[
              1,2,3,4,5
        ],
        msg:false,
        imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
      };
    },
    computed:{
      ...mapGetters([
        'popoverAlive'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert'
      ]),
      toplay(){
        if(this.msg){
          this.$refs.video.pause()
          this.msg=false
        }else{
          this.$refs.video.play()
          this.msg=true
        }
       // this.$refs.video.oncanplay=alert("Can start playing video");
      }
    }
  };
</script>
