/* 
  one.vue 引入 CompoentTwo.vue 组件， 
  引入步骤：
  1.在  <script></script> 内引入 
  import xxx from 'path'
  然后， 可以再 CompoentTwo 里面， 使用props 属性，暴露出一个testName 的属性，
  此时就可以再one.vue 里面去声明这个属性了。
  
 */
<template>
  <div>
    哈哈
  <CompoentTwo :testName="name"></CompoentTwo>
  </div>
</template>

<script>

import CompoentTwo from './CompoentTwo.vue'
  export default {
      components: {
        CompoentTwo
      },
      data () {
        return {
          name: 'hahasse1'
        }
      }
      // props
    }
</script>