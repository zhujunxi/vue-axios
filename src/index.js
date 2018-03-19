import axios from 'axios'
import qs from 'qs'
import Fetch from './fetch'

const install = function (Vue, options) {
  Vue.prototype.$http = new Fetch(options)
}

export default {install}
