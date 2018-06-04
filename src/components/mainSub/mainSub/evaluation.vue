<template>
  <div class="evaluation">
    <h4>鉴定与评估</h4>
    <div class="zhuan" v-for="(item,index) in dataa">
      <h5>{{item.title}}</h5>
      <p>
        {{item.contents}}
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'evaluation',
    data() {
      return {
        dataa:[
          {
            title:'专家团',
            contents:'（此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。'
          },
          {
            title:'检测仪器',
            contents:'（此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。'
          },
          {
            title:'收费标准',
            contents:'（此处为文本）李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动。'
          },
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
  .evaluation {
    border: 1px solid #999999;
    padding: 0 0px 150px 0;
    h4 {
      font-size: 24px;
      font-weight: 600;
      line-height: 60px;
      border-bottom: 1px solid #999999;
    }
    .zhuan {
      padding: 0 40px 20px 40px;
      text-align: left;
      border-bottom: 1px solid #999999;
      h5 {
        font-size: 16px;
        font-weight: 600;
        line-height: 46px;
        text-align: left;
        padding-bottom: 10px;
      }
      p {
        padding:0 60px;
        text-indent: 2em;
        font-size: 16px;
        line-height: 36px;
      }
    }
  }
</style>
