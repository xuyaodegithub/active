import axios from 'axios'
axios.defaults.baseURL ='http://test-admin.olquan.cn'
import qs from 'qs';
//import * as types from './type';
import { Message } from 'element-ui';
//import { Loading } from 'element-ui';
import api from './api'


const actions={
//弹框修改属性
  popoverAlert(context,where,event){
    context.commit('changeAlert',where)
  },
}

export default actions
