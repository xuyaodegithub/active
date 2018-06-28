<template>
  <div class="isSwiper">
    <div class="margin">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="(item,index) in indexDataResult.obj.bigPictureList" :key="index">
          <img :src="item.titleImg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'lunBo',
    data() {
      return {
        imgdata: [
          'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/be0ddcdf2857c24303764dda630eb513c82060e5',
          'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/244f433621701916c56536b0c3821e8a78265897',
          'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/519cb1eb25f895b7d3fd1f412c82a3cf02936b63',
          'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/05c45352be23c68695155e2f58568de44bd2fcc8',
        ]
      }
    },
    computed: {
      ...mapGetters([
        'indexDataResult'
      ])
    },
    mounted() {

    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
