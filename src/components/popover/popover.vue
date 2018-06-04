<template>
    <div class="popover">
        <component :is="popoverAlive.title"></component>
    </div>
</template>

<style scoped>
  .popover{
      z-index: 1000;
      position: relative;
      width:auto;
      height: auto;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import vBalance from './balance.vue'
  import vVideo from './videoDetail.vue'
  export default {
    data() {
      return {
          changeAlert: 'vDemo'
      };
    },
    components:{
      vVideo

    },
    methods: {
    },
    computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
