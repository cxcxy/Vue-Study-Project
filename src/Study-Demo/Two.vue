<template>
  <div>
    <!-- 过滤器添加一个管道符 “|” 对数据进行过滤，
    经常用于格式化文本，比如字母全部大写， 
    货币千位使用逗号分隔等。 
    -->
 
    {{ date | formatDate}}
  </div>
</template>
<script>
// 当小小于 10 时， 前面自动加 0 
var padDate = function (value) {
  return value < 10 ? '0' + value : value
}
export default {
  name: "appTwo",
  data () {
    return {
      book: "aaaqqrrr",
      date: new Date(),
      sex: "1"
    };
  },
  /*
    过滤的规则是自定义的，
    通过给Vue实例添加选项filters来设置 
  */
  filters: { //
    formatDate: function (value) {
      var date   = new Date(value)
      var year  = date.getFullYear()
      var month  = padDate(date.getMonth() + 1)
      var day    = padDate(date.getDate())
      var hours  = padDate(date.getHours())
      var minutes = padDate(date.getMinutes())
      var seconds = padDate(date.getSeconds())
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + seconds
    }
  },
  mounted: function () {
    var _this = this; //声明一个变量指向 Vue 实例 this，保证作用域一致 
    this.timer = setInterval(function () {
      _this.date = new Date(); //修改数据 date 
      console.log("111")
    }, 1000);
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(
        this.timer
      )
    }
  }
}
</script>
