/* 指令 */
<template>
  <div>
    <p v-if="show">显示这段文字</p>
    
    <!--  Vue.js 提供了语法糖， 
    也可以说是缩写， 
    比如 v-bind , 
    可以省略 v-bind
    直接写一个冒号 “:”
    -->
    <!-- <a v-bind:href="url">连接</a> -->
    <a :href="url">连接</a>
    <!--  v-on 用来绑定事件监听器  -->
    <!--  Vue.js 提供了语法糖， 
    也可以说是缩写， 
    比如 v-on , 
    可以省略 v-on
    直接写一个“@”
    -->
     <!-- <button v-on:click="handleClose">点击隐藏</button> -->
  <button @click="handleClose">点击隐藏</button>
  </div>

</template>
<script>
  export default {
    name: "app-directives",
    data () {
      return {
        show: true,
        url: 'www.baidu.com'
      }
    },
    methods: {
      handleClose: function () {
        this.show = !this.show;  
      }
    }

  }
</script>