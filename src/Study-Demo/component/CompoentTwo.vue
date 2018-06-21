<template>
  <!-- <p> {{testName_New}} </p> -->
  
  <div>
    <p> {{ testName }} </p>
    <p> {{ count }} </p>
    {{ testName_New }}
  </div>
  
  <!-- <div :style="testName_New">组件内容</div> -->
</template>

<script>
  export default {
    props: ['testName'],
    data () {
      return {
        /* 组件中声明了数据count，它在组件初始化时会获取来自父组件的testName
            之后就与之无关了， 只用维护count，这样就可以避免直接操作testName。
            同时，也可以配合计算属性来使用
         */
        count: this.testName
      }
    },
    computed: {
        testName_New: function () {
          return  this.testName + 'vvvvv'
        }
    }
  }
</script>