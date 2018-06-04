<template>
  <div class="concatUs">
    <v-card :leftData="leftData"></v-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vCard from '../../publicSub/cardSub.vue'

  export default {
    name: 'concatUs',
    data() {
      return {
        leftData: {
          title: '名家风采', type: true, block: true, item: [
            {
              title: '瓷器', imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '玉器',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '字画',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '金属器',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '杂项',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '杂项',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '杂项',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '杂项',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
            },
            {
              title: '杂项',
              imgName: '',
              imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg'
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .concatUs {
    padding: 10px 0px;
  }
</style>
