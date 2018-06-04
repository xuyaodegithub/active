<template>
  <div>
    <div class="header">
      <div class="top margin">
        <div class="logo Mright" style="margin: 34px 15px 0 10px;">
          <img src="static/ball.png" alt="" style="width: 80px;height: 80px;">
        </div>
        <div class="title Mright" style="margin: 39px 29px 0 0;">
          <h4><img src="static/logo.png" alt="" style="margin-left: -30px;"></h4>
          <p><img src="static/logob.png" alt="" style="margin-left: -10px"></p>
        </div>
        <div class="seach Mright" style="margin: 70px 29px 0 0;">
          <el-input v-model="isInput" placeholder="请输入感兴趣的内容" prefix-icon="el-icon-search" size="small"></el-input>
          <el-button type="danger" size="small" style="display: inline-block;">搜索</el-button>
        </div>
        <div class="date">
          <p>{{isTime}}</p>
          <p>{{iscTime}}</p>
          <div class="imgSS" style="display: inline-block;">
            <i class="icon iconfont icon-erweima"></i>
            扫一扫
            <img src="http://www.hnscjxh.cn/Them/ewm.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="navList">
      <div class="margin">
        <ul>
          <li v-for="(item,index) in navList" :key="index" class="cu" @click="changeRoute(item)">
            {{item.title}}
          </li>
          <li class="hoverT">
            <!-- 了解我们
             <div style="display: none;position: absolute;">
               <p>加入我们</p>
               <p>联系我们</p>
             </div>-->
            <el-dropdown @command="handleCommand" :show-timeout="100">
  <span class="el-dropdown-link">
    了解我们<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">加入我们</el-dropdown-item>
                <el-dropdown-item command="b">联系方式</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </li>
        </ul>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
           <el-tab-pane label="首页" name="first">首页</el-tab-pane>
           <el-tab-pane label="协会简介" name="second">协会简介</el-tab-pane>
           <el-tab-pane label="新闻动态" name="third">新闻动态</el-tab-pane>
           <el-tab-pane label="艺术文库" name="fourth">艺术文库</el-tab-pane>
           <el-tab-pane label="鉴定与评估" name="fivece">鉴定与评估</el-tab-pane>
           <el-tab-pane label="拍卖" name="sixce">拍卖</el-tab-pane>
           <el-tab-pane label="古玩市场" name="sevence">古玩市场</el-tab-pane>
           <el-tab-pane label="通知公告" name="eightce">通知公告</el-tab-pane>
           <el-tab-pane label="视频" name="nince">视频</el-tab-pane>
           <el-tab-pane label="联系我们" name="tence">联系我们</el-tab-pane>
         </el-tabs>-->
      </div>
    </div>
    <v-swiper></v-swiper>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vSwiper from './lunBo.vue'

  export default {
    name: 'header1',
    data() {
      return {
        isTime: '',
        msg: '',
        activeName: 'first',
        iscTime: '',
        isInput: '',
        navList: [
          {title: '首页', routeUrl: '/'}, {title: '协会简介', routeUrl: '/AssociationBrief'}, {
            title: '新闻动态',
            routeUrl: '/NewsInformation'
          },
          {title: '艺术文库', routeUrl: '/ArtLibrary'}, {title: '名家风采', routeUrl: '/concatUs'}, {
            title: '鉴定与评估',
            routeUrl: '/evaluation'
          }, {title: '拍卖', routeUrl: '/auction'},
          {title: '古玩市场', routeUrl: '/AntiqueMarket'}, {title: '通知公告', routeUrl: '/NoticeBulletin'}, {
            title: '视频',
            routeUrl: '/videoList'
          },
        ]
      }
    },
    computed: {
      ...mapGetters([
        'result'
      ])
    },
    components: {
      vSwiper
    },
    mounted() {
      this.isTime = this.myclock()
      this.getCdate()
    },
    methods: {
      myclock() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        let day = now.getDate();
        if (day < 10) {
          day = "0" + day;
        }
        let week = now.getDay();
        switch (week) {
          case 1:
            week = "一";
            break;
          case 2:
            week = "二";
            break;
          case 3:
            week = "三";
            break;
          case 4:
            week = "四";
            break;
          case 5:
            week = "五";
            break;
          case 6:
            week = "六";
            break;
          default:
            week = "日";
            break;
        }
        return year + "年" + month + "月" + day + "日 　" + "星期" + week
      },
      getCdate() {
        var CalendarData = new Array(100);
        var madd = new Array(12);
        var numString = "一二三四五六七八九十";
        var monString = "正二三四五六七八九十冬腊";
        var cYear, cMonth, cDay, TheDate;
        CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
        madd[0] = 0;
        madd[1] = 31;
        madd[2] = 59;
        madd[3] = 90;
        madd[4] = 120;
        madd[5] = 151;
        madd[6] = 181;
        madd[7] = 212;
        madd[8] = 243;
        madd[9] = 273;
        madd[10] = 304;
        madd[11] = 334;

        function GetBit(m, n) {
          return (m >> n) & 1;
        }

        function e2c() {
          TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
          var total, m, n, k;
          var isEnd = false;
          var tmp = TheDate.getYear();
          if (tmp < 1900) {
            tmp += 1900;
          }
          total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

          if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
            total++;
          }
          for (m = 0; ; m++) {
            k = (CalendarData[m] < 0xfff) ? 11 : 12;
            for (n = k; n >= 0; n--) {
              if (total <= 29 + GetBit(CalendarData[m], n)) {
                isEnd = true;
                break;
              }
              total = total - 29 - GetBit(CalendarData[m], n);
            }
            if (isEnd) break;
          }
          cYear = 1921 + m;
          cMonth = k - n + 1;
          cDay = total;
          if (k == 12) {
            if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
              cMonth = 1 - cMonth;
            }
            if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
              cMonth--;
            }
          }
        }

        function GetcDateString() {
          var tmp = "农历";
          if (cMonth < 1) {
            tmp += "(闰)";
            tmp += monString.charAt(-cMonth - 1);
          } else {
            tmp += monString.charAt(cMonth - 1);
          }
          tmp += "月";
          tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
          if (cDay % 10 != 0 || cDay == 10) {
            tmp += numString.charAt((cDay - 1) % 10);
          }
          return tmp;
        }

        function GetLunarDay(solarYear, solarMonth, solarDay) {
          if (solarYear < 1921 || solarYear > 2020) {
            return "";
          } else {
            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
            e2c(solarYear, solarMonth, solarDay);
            return GetcDateString();
          }
        }

        var D = new Date();
        var yy = D.getFullYear();
        var mm = D.getMonth() + 1;
        var dd = D.getDate();
        var ww = D.getDay();
        var ss = parseInt(D.getTime() / 1000);
        if (yy < 100) yy = "19" + yy;
//        function showCal(){
//         return GetLunarDay(yy,mm,dd)
//        }
        this.iscTime = GetLunarDay(yy, mm, dd)
      },
      changeRoute(item) {
        this.$router.push(item.routeUrl)
      },
      handleCommand(item) {
        if(item=='a'){
          this.$router.push('/joinUs')
        }else{
          this.$router.push('/callUs')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    min-width: 1300px;
    /*background: url("../../../static/logoBack.jpg") repeat center;*/
    .seach {
      .el-input {
        width: 220px;
      }
      .el-button {
        width: 80px;
      }
    }
    .top {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      .title {
        h4 {
          font-size: 36px;
          font-weight: 600;
          text-align: left;
          text-indent: 15px;
          line-height: 52px;
        }
        p {
          font-size: 24px;
          line-height: 40px;
        }
      }
      .date {
        position: relative;
        p:first-child {
          margin-top: 15px;
          line-height: 26px;
          font-size: 18px;
        }
        p:nth-child(2) {
          margin: 10px 0;
          line-height: 26px;
          font-size: 18px;
        }
        img {
          position: absolute;
          bottom: -140px;
          display: none;
          z-index: 111;
        }
        i {
          font-size: 28px;
        }
        .imgSS:hover img {
          display: block;
        }
      }
    }
  }

  .navList {
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
    background-color: #bd2c00;
    color: #ffffff;
    ul {
      background-color: #bd2c00;
      .el-dropdown {
        color: #ffffff;
      }
      .el-dropdown:hover {
        color: #000000;
      }
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      padding: 5px 0;
      /* .hoverT:hover div{
         display: block;
       }*/
      li {
        transition: all 0.2s linear;
        font-size: 16px;
        line-height: 36px;
        padding: 0 15px;
        margin-right: 30px;
        &:last-child {
          margin: 0;
        }
        &:hover {
          background: #ffffff;
          color: #000000;
        }
      }
    }
  }
</style>
