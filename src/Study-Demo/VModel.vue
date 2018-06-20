<template>
  <div>
    <!-- <input type="text" v-model="message" placeholder="请输入...">
    <p>输入的内容是： {{ message }} </p> -->
    <input type="text" v-model="message" placeholder="输入....">
    <!-- <input type="text" @input="handleInput" placeholder="输入...."> -->
    <p>输入的内容是： {{ message }} </p>
    <br>
    <br>
    <input type="radio" :checked="picked">
    <label>单选按钮</label>
    <br>
    <br>
    <!-- 
        单选按钮在单独使用时，不需要v-model
        直接使用v-bind绑定一个布尔类型的值，
        为真时选中，为否时不选中
     -->
     <!-- 
       如果是组合使用来实现互斥选择的效果
       就需要v-model来配合value使用
      -->
    <input type="radio" v-model="picked" value="html">
    <label>HTML</label>
    <input type="radio" v-model="picked" value="js">
    <label>JS</label>
    <input type="radio" v-model="picked" value="css">
    <label>CSS</label>
    <select v-model="selected">
      <!-- <option value="ht">html</option>
      <option value="js">JavaScript</option>
      <option value="cs">css</option> -->
      <option v-for="value in options"
              :value="value.key"
      >
       {{ value.value }}   
      </option>
    </select>
    <p>选择的项是： {{ selected }} </p>
    <input  type="checkbox"
            v-model="toggle"
            :true-value = "value1"
            :false-value = "value2"
    >
    <label>复选框</label>
    <p> {{ toggle }} </p>
    <p> {{ value1 }} </p>
    <p> {{ value2 }} </p>
   

  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: '',
        picked: 'css',
        selected: ['ht','js'],
        toggle: true,
        value1: 'a',
        value2: 'b',
        options: [
          {
            key: 'ht',
            value: 'HTML'
          },
          {
            key: 'js',
            value: 'JavaScript'
          },
          {
            key: 'cs',
            value: 'CSS'
          }
        ]
      }
    },
    methods: {
      handleInput: function(e) {
        console.log(e.target.value)
        this.message = e.target.value
      }
    }
  }
</script>