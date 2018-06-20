<template>
  <div>
    <div :class="{ 'active' : isActive }"></div>
    <p>hahah</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          isActive: false
      }
    }
  }
</script>
/* 

  v-once  也是一个不需要表达式的指令，作用是定义它的元素或组件只渲染一次， 
  包括元素或，组件的所有子节点，首次渲染后，不再随数据的变化重新渲染，
  将被视为静态内容
 */