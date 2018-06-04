<template>
  <div class="videoList">
    <vTcard :leftData="video"></vTcard>
    <vTcard :leftData="video1"></vTcard>
    <vTcard :leftData="video2"></vTcard>
    <vTcard :leftData="video3"></vTcard>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vTcard from '../../publicSub/twocardSub.vue'

  export default {
    name: 'videoList',
    data() {
      return {
        video: {
          title: '横店风采', type: true, item: [
            {
              title: '瓷器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '玉器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '字画',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '金属器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
          ]
        },
        video1: {
          title: '横店影视城', type: true, item: [
            {
              title: '瓷器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '玉器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '字画',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '金属器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
          ]
        },
        video2: {
          title: '横店圆明园', type: true, item: [
            {
              title: '瓷器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '玉器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '字画',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '金属器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
          ]
        },
        video3: {
          title: '协会主题活动', type: true, item: [
            {
              title: '瓷器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '玉器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '字画',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '金属器',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
            {
              title: '杂项',
              imgName:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
              imgUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315'
            },
          ]
        },
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {
      vTcard
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videoList{
  padding-top:15px;
}

</style>
