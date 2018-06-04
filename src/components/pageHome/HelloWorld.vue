<template>
  <div class="hello">
    <div>
      <div height='auto'>
        <v-header></v-header>
      </div>
      <div>
        <div class="margin" >
          <router-view/>
        </div>
      </div>
      <el-footer style="height:auto">
        <v-footer></v-footer>
      </el-footer>
    </div>
    <transition name="slide-fade">
      <div class="alertshow" v-if="popoverAlive.openOrClose" v-drag>
        <v-popover></v-popover>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import vHeader from '../publicSub/headerSub.vue'
  import vFooter from '../publicSub/footerSub.vue'
  import vPopover from '../popover/popover.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters([
        'popoverAlive'
      ])
    },
    components: {
      vHeader, vFooter, vPopover
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    color: #101010;
    text-align: center;
    padding:0;
  }
.hello{

}
  .el-main {
    /*background-color: #ffffff;*/
    color: #101010;
    text-align: center;
    padding:0;
  }
  .alertshow{
    position: fixed;
    left:50%;
    top:50%;
    z-index:1000;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
