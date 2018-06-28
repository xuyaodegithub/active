<template>
  <div class="concatUs">
    <v-surper :leftData="superpersonsResult.list" :isShow="false"></v-surper>
    <div class="block">
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="5"
        :current-page="currentPage4"
        :page-sizes="[16, 30, 40, 50]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="superpersonsResult.pager ? superpersonsResult.pager.totalRows : 0">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vCard from '../../publicSub/cardSub.vue'
  import vSurper from '../../publicSub/superStar.vue'

  export default {
    name: 'concatUs',
    data() {
      return {
        currentPage4:1,
        rows:16,
      }
    },
    computed: {
      ...mapGetters([
        'superpersonsResult'
      ])
    },
    mounted(){
      this.getsupList()
    },
    components: {
      vCard,vSurper
    },
    methods:{
      ...mapActions([
        'superpersonsActions'
      ]),
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
        this.rows = val
        this.getsupList()
      },
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
        this.currentPage4 = val
        this.getsupList()
      },
      getsupList(){
        let data={
          page:this.currentPage4,
          limit:this.rows
        }
        this.superpersonsActions(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .concatUs {
    padding: 10px 0px;
  }
</style>
