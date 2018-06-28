<template>
  <div class="callUs">
    <h4>会员注册</h4>
    <div class="adress">
      <p><label>账号:</label>
        <el-input v-model="isNumber" placeholder="请输入内容" size="small"></el-input>
        <span style="font-size: 14px;color: red;line-height: 14px">(请输入6-16位由字母数字组成的账号)</span>
      </p>
      <p><label>密码:</label>
        <el-input v-model="isPassword" placeholder="请输入内容" size="small" type="password"></el-input>
      </p>
      <p><label>姓名:</label>
        <el-input v-model="isName" placeholder="请输入内容" size="small"></el-input>
      </p>
      <p><label>身份证:</label>
        <el-input v-model="isShen" placeholder="请输入内容" size="small"></el-input>
      </p>
      <p><label>联系方式:</label>
        <el-input v-model="isPhone" placeholder="请输入内容" size="small" :maxlength="11"></el-input>
      </p>
      <p><label>家庭住址:</label>
        <el-input v-model="isAdress" placeholder="请输入内容" size="small"></el-input>
      </p>
      <p><label>申请职务:</label>
        <el-select v-model="isObj" placeholder="请选择" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span style="font-size: 14px;color: red;display: block;line-height: 14px">(会员500/5年，理事2000/5年，常务理事5000/5年，理事单位20000/5年，副会长10000/5年)</span>
      </p>
      <p><label>单位名称:</label>
        <el-input v-model="isAdd" placeholder="请输入内容" size="small"></el-input>
      </p>
      <div class="imgPay">
        <img :src="imgUrl" alt="">
        <span style="font-size: 18px;color: red;display: block;line-height: 14px">转账请备注手机号码!</span>
      </div>
      <p>
        <el-button type="success" size="small" @click="saveUp()" :disabled="startTime>0">提交申请
          <i v-if="startTime>0">({{startTime}})</i>
        </el-button>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import {Base64} from 'js-base64';

  export default {
    name: 'jionUs',
    data() {
      return {
        isNumber: '',
        isPassword: '',
        isName: '',
        isShen: '',
        isPhone: '',
        isAdress: '',
        isObj: '',
        isAdd: '',
        upOrNo: false,
        upOrNo2: false,
        isTimer: '',
        startTime: 0,
        imgUrl: 'static/giveMoney.jpg',
        options: [{
          value: '会员',
          label: '会员'
        }, {
          value: '理事',
          label: '理事'
        }, {
          value: '常务理事',
          label: '常务理事'
        }, {
          value: '理事单位',
          label: '理事单位'
        }, {
          value: '副会长',
          label: '副会长'
        }],
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {},
    methods: {
      ...mapActions([
        'joinusAction'
      ]),
      saveUp() {
        let reg = /[A-Za-z0-9]{6,16}/
        let _self = this
        this.setTimer()
        if (reg.test(this.isNumber) && this.isNumber.length <= 16) {
          this.$http.get('http://116.62.79.0/picture_server/api/checkLoginName', {
            params: {loginName: _self.isNumber}
          }).then(res => {
            if (res.data.code == 0) {
              this.upload()
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })

        } else {
          this.$message({
            message: '账号格式错误',
            type: 'error'
          })
        }
      },
      setTimer() {
        this.startTime = 5
        let _self = this
        this.timer = setInterval(function () {
          _self.startTime--
          if (_self.startTime === 0) {
            clearInterval(_self.timer)
          }
        }, 1000)
      },
      upload() {
        if (Base64.extendString) {
          Base64.extendString();
          let data = {
            name: Base64.encode(this.isName),
            //name:this.isName.toBase64(),
            cardNo: Base64.encode(this.isShen),
            //cardNo:this.isShen.toBase64(),
            company: Base64.encode(this.isAdd),
            // company:this.isAdd.toBase64(),
            mobile: Base64.encode(this.isPhone),
            //mobile:this.isPhone.toBase64(),
            address: Base64.encode(this.isAdress),
            //  address:this.isAdress.toBase64(),
            job: Base64.encode(this.isObj),
            //  job:this.isObj.toBase64(),
            passwork: Base64.encode(this.isPassword),
            loginName: Base64.encode(this.isNumber)

          }
          if (!data.name || !data.cardNo || !data.company || !data.mobile || !data.address || !data.job || !data.passwork) {
            this.$message({
              message: '请把信息填写完整',
              type: "error"
            })
          } else {
            if (this.isShen.length === 15 || this.isShen.length === 18) {
              this.upOrNo = true
            } else {
              this.upOrNo = false
            }
            if (this.isPhone.length === 11) {
              this.upOrNo2 = true
            } else {
              this.upOrNo2 = false
            }
            if (this.upOrNo && this.upOrNo2) {
              this.joinusAction(data)
            } else {
              this.$message({
                message: '身份证或手机号格式错误',
                type: 'error'
              })
            }
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .callUs {
    text-align: left;
    padding-top: 20px;
    font-size: 16px;
    line-height: 36px;
    position: relative;
    h4 {
      font-size: 18px;
      text-align: left;
      border-bottom: 1px solid #999999;
      line-height: 42px;
    }
    .adress {
      padding: 15px 20px;
      font-size: 16px;
      line-height: 36px;
      label {
        display: inline-block;
        width: 100px;
        text-align: right;
      }
      p {
        margin-bottom: 20px;
        padding-left: 50px;
      }
      .el-input, .el-select {
        width: 200px;
        margin-left: 20px;
      }
      div.el-select {
        margin-left: 15px;
      }
      .el-button {
        width: 100px;
        margin-top: 40px;
        margin-left: 150px;
      }
    }
    .imgPay {
      /*display: -webkit-box;*/
      /*display: -moz-box;*/
      /*display: -ms-flexbox;*/
      /*display: -webkit-flex;*/
      /*display: flex;*/
      position: absolute;
      right: 350px;
      top: 70px;
      width: 300px;
      height: 450px;
      img {
        display: block;
        width: 100%;
      }
      span {
        position: absolute;
        top: 77%;
        left: 20%;
      }
    }
  }

</style>
