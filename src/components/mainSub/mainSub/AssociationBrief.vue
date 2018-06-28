<template>
  <div class="Brief">
    <ul class="blift">
      <h4>协会简介</h4>
      <li v-for="(item,index) in bleft" class="cu" @click="changTitle(item,index)" :class="{active : key==index}">
        {{item.title}}
      </li>
    </ul>
    <div class="bcontent">
      <keep-alive>
        <component :is="title"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vzhang from '../sonSub/zhangcheng.vue'
  import vjie from '../sonSub/jieshao.vue'
  import vzuzhi from '../sonSub/zuzhi.vue'
  import vzhuanjia from '../sonSub/zhuanjia.vue'
  import vlishi from '../sonSub/lishihui.vue'
  export default {
    name: 'AssociationBrief',
    data() {
      return {
        title:'vjie',
        key:0,
        bleft: [
          {title: '协会简介', url: 'vjie'},
          {title: '协会章程', url: 'vzhang'},
          {title: '组织机构', url: 'vzuzhi'},
          {title: '专家顾问委员会', url: 'vzhuanjia'},
          {title: '理事会', url: 'vlishi'}
        ]
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {
      vzhang,vjie,vzuzhi,vzhuanjia,vlishi
    },
    methods:{
      changTitle(val,index){
        this.key=index
        this.title=val.url
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Brief {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding:0 20px;
    .blift {
      width: 160px;
      padding: 20px 8px;
      line-height: 36px;
      font-size: 14px;
      border: 1px solid #999999;
      margin-top: 15px;
      margin-right: 20px;
      height: 240px;
      .active{
        color: #bd2c00;
      }
      h4 {
        font-weight: 600;
        text-align: left;
        text-indent: 15px;
        font-size: 16px;
        margin-bottom: 8px;
      }
      li:hover {
        color: #bd2c00;
      }
    }
    .bcontent {
      flex: 1;
    }
  }
</style>
