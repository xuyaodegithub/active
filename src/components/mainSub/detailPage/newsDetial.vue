<template>
  <div class="newsD">
    <div class="back">
      <span class="cu icon iconfont icon-fanhui1" @click="back()">返回</span>
    </div>
    <div style="padding: 15px 140px;" v-html="newsDetialsResult">
     <!-- <div class="title">
        李克强会见中拉论坛首届部长级会议拉方代表团团长
      </div>
      <p class="time">发布时间:<i>2018-08-18</i>18:34</p>
      <div class="imgD">
        <img :src="item.url" alt="" v-for="(item,index) in imgData">
      </div>
      <div class="content">
        <p>
          李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动、平行推进。
          李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动、平行推进。
          李克强表示，中拉始终坚持相互尊重、平等相待、真诚合作、互利共赢，双方关系发展前景广阔。昨天，习近平主席在会议开幕式上就推进中拉整体合作提出四点重要意见。双方要以此次会议为契机，谋划好今后一个时期中拉关系与合作发展的新篇章，使中拉整体合作与中国同拉美和加勒比共同体成员国的双边合作相互带动、平行推进。
          　</p>
        <p>
          李克强指出，中拉同属发展中国家，发展目标相近，共同利益广泛。我们都主张世界格局多极化和国际关系民主化，都认为发展经济、改善民生需要和平稳定的地区和国际环境。中拉两大经济体加强交流合作，中拉人民之间加强联系沟通，不仅有利于双方福祉，而且有利于维护地区乃至世界的发展繁荣。
        </p>
        <p>
          李克强强调，双方要创新合作思路，推动贸易投资、金融等领域合作，把资源优势转化为产业优势，促进中拉务实合作转型升级，实现在更高水平上的共同发展和互利共赢。中方愿利用自身优势富余产能，同拉方开展基础设施建设等合作，希望拉方为中国装备等产品进入当地市场提供公平竞争环境和公正法律保障。
          李克强强调，双方要创新合作思路，推动贸易投资、金融等领域合作，把资源优势转化为产业优势，促进中拉务实合作转型升级，实现在更高水平上的共同发展和互利共赢。中方愿利用自身优势富余产能，同拉方开展基础设施建设等合作，希望拉方为中国装备等产品进入当地市场提供公平竞争环境和公正法律保障。
        </p>
        <p> 　李克强表示，当前世界经济复苏依然乏力。中国经济有能力保持中高速增长，并努力向中高端水平迈进，这将为包括拉美和加勒比在内的世界各国提供更多市场机遇、投资机遇和增长机遇。
        </p>
        <p>
          拉方代表团团长感谢李克强会见，高度赞赏中方成功主办中拉论坛首届部长级会议。拉共体“四架马车”—哥斯达黎加、厄瓜多尔、古巴益。本次会议为拉中在新时期建立全新伙伴关系奠定了基础。拉方愿同中方把握机遇，携手努力，推动拉中关系与合作取得新的发展，为地区和世界的和平稳定与发展繁荣作出更大贡献。</p>
      </div>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'newsD',
    data() {
      return {
        imgData: [
          {
            url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2118660840,630926291&fm=27&gp=0.jpg'
          },
          {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=471934028,1076887700&fm=27&gp=0.jpg'
          },
        ]
      }
    },
    computed: {
      ...mapGetters([
        'newsDetialsResult'
      ])
    },
    components: {},
    activated(){

    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .back {
    /*margin-top: 15px;*/
    font-size: 18px;
    color: #EE0707;
    line-height: 42px;
    text-align: left;
    padding-left: 15px;
    margin-top: 15px;
    border-bottom: 1px solid #999999;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    /*margin-bottom: 10px;*/
  }

  .time {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .imgD {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    padding: 10px 0 20px 0;
    img {
      /*display: block;*/
      width: 380px;
      height: 260px;
      margin-right: 40px;
      margin-left: 40px;
    }
  }
  .content {
    text-align: left;
    font-size: 14px;
    line-height: 36px;
    text-indent: 2em;
    color: #000000;
  }
</style>
