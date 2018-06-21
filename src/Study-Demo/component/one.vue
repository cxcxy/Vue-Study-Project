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
    <input type="text" v-model="name">
    <CompoentTwo :testName="name"></CompoentTwo>
    <!-- 
      当子组件需要向父组件传递数据时， 就要用到自定义事件
      v-on除了监听DOM事件外， 还可以用于组件之间的自定义事件。
      在子组件改变 数据时， 通过 $emit() 再把它传递给父组件，
      父组件用 v-on:increase 和 v-on:reduce语法来接收所传递的参数
     -->
    <p> {{ total }} </p>
    <!-- <ComponentObject 
      @increase="handleGetTotal"
      @reduce="handleGetTotal"
    ></ComponentObject> -->
    
    <component-object
      v-model="total"
    >
    </component-object>
   
  </div>
</template>

<script>

import CompoentTwo from './CompoentTwo.vue'
import ComponentObject from './ComponentObject.vue'

  export default {
      components: {
        CompoentTwo,
        ComponentObject
      },
      data () {
        return {
          name: 'hahasse1',
          total: 0
        }
      },
      methods: {
        handleGetTotal: function(total) {
          this.total = total
        }
      }
      // props
    }
</script>