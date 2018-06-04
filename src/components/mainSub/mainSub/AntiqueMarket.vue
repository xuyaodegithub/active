<template>
  <div class="AntiqueMarket">
    <h4>古玩市场</h4>
    <div>
      <h4>市场概况</h4>
      <p>
        （此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。
      </p>
    </div>
    <div>
      <h4>招商政策</h4>
      <p>
        （此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。
      </p>
    </div>
    <div>
      <h4>主题活动</h4>
      <p>
        （此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'AntiqueMarket',
    data() {
      return {}
    },
    computed: {
      ...mapGetters([])
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .AntiqueMarket {
    padding: 15px 20px;
    border: 1px solid #999999;
    margin-top: 15px;
    padding-bottom:100px;
   & > h4 {
      font-size: 24px;
      line-height: 60px;
      font-weight: 600;
      border-bottom: 1px solid #999999;
    }
    div{
      text-align: left;
      padding:10px 0;
      h4{
        text-indent: 1em;
        font-size: 18px;
        line-height: 36px;
      }
      p{
        padding:10px 40px;
        font-size: 16px;
        line-height: 36px;
        text-indent: 2em;
        border-bottom: 1px solid #999999;
      }
    }
  }
</style>
