<template>

  <div>
    <button @click="count++"> +1 </button>
    <button @click="count--"> -1 </button>
    <!-- 
      @click 的表达式可以直接使用 JavaScript 语句，
      也可以是一个在vue实例中methods选项内的函数名，
      比如增加一个函数扩展，点击一次，计数器+10
     -->
    <button @click=" handleAdd() "> +10 </button>
    <h1> {{ count }} </h1>

    <a href="http://www.baidu.com" @click=" handleClick('禁止打开',$event) ">打开连接</a>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      handleAdd: function (count=10) {
        this.count += count
      },
      handleClick: function( message, event) {
        event.preventDefault();
        window.alert(message)
      }
    }
  }
</script>