<template>
  <div>
    <p v-if="status === 1">当status为1时显示该行</p>
    <p v-else-if="status === 2">当status为2时 显示该行</p>
    <p v-else>否则显示该行</p>
    <template v-if="type === 'name'">
      <label>用户名</label>
      <input placeholder="输入用户名">
    </template>
    <template v-else-if="type ==='mail'">
      <label>邮箱</label>
      <input placeholder="输入邮箱">
      <input placeholder="输入邮箱" key="mail-input">
    </template>
    <button v-on:click="handleToggleClick">切换输入类型</button>
    
  </div>
</template>
/* 
  vue在渲染元素时，出于效率考虑， 会尽可能地复用已有的元素而非重新渲染， 
 */
 /* 
  如果你不希望被复用， 
  可以使用vue.js 提供的key属性，
  它可以让你自己决定是否要复用元素
  key的值必须是唯一的。
  */
  /* 
    v-if 和 v-show 的选择
    他们具有类似的功能，不过 v-if才是真正的条件渲染， 
    它会根据表达式适当的销毁或者
    重建元素及绑定的事件或者子组件，
    若表达式初始值为false，
    则一开始元素、组件并不会渲染，
    只有当条件第一次变为真时，才开始编译
   */
   /* 
    v-show 只是简单的css属性切换，无论条件真与否，
    都会被编译。相比之下，v-if更适合条件不经常改变的场景。
    因为它切换开销相对较大。而v-show适用于频繁切换条件。
    */
<script>
  export default {
    data () {
      return {
        status: 1,
        type: 'name'
      }
    },
    methods: {
      handleToggleClick: function () {
        this.type = this.type === 'name' ? 'mail' : 'name'
        console.log(this.type)
      }
    }
  }
</script>