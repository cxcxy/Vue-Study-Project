<template>
  <div>
    <button @click="handleIncrease">+1</button>
    <button @click="handleReduce">-1</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
  export default {
    /* 
      当props 是一个对象的时候，推荐使用数据验证
      比如某个数据必须是数字类型，
      如果传入字符串，就会在控制台弹出警告
     */
    props: {
      propA: Number,
      propB: [String,Number]
    },
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      handleIncrease: function () {
          this.counter ++
          /* 
            $emit 第一个参数是自定义事件的名称， 
            跟在名称后面的参数都是要传递的数据， 可以不填或者填写多个
           */
          this.$emit('increase',this.counter)
          /* 
            当父组件用v-model指令接收参数时，此时自定义事件名称
            为特殊的’input‘，而在父组件中，也没有使用 @input=”handle“
            而是直接使用v-model绑定的一个数据total。
            这是一个语法糖
           */
          // this.$emit('input',this.counter)
      },
      handleReduce: function () {
          this.counter --
          this.$emit('reduce',this.counter)
          // this.$emit('input',this.counter)
      }
    }
  }
</script>