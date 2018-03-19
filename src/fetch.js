class Fetch{
    constructor(options) {
  
      this.$http = axios.create(Object.assign({
        timeout: 8 * 1000
      }, options))
  
      // 请求拦截器
  
      // 响应拦截器
  
    }
    base(_method, _url, _data = {}, _header = {}) {
      return new Promise((resolve, reject) => {
        this.$http({
          method: _method,
          url: _url,
          data: _method == 'POST' ? qs.stringify(_data) : _data,
          header: _header
        }).then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
      })
    }
    get(_url, _data = {}, _header = {}) {
      return this.base('GET', _url, _data = {}, _header = {})
    }
    post(_url, _data = {}, _header = {}) {
      return this.base('POST', _url, _data = {}, _header = {})
    }
  }

  export default Fetch