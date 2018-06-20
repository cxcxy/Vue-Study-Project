<template>
  <div id="app">
<!--     <ul>
     <li v-for="book in books">{{ book.name }}</li>
    </ul> -->
    <input type="text" v-model="name" placeholder="你的名字">
    <input type="text" v-model="sex" placeholder="你的名字">
    
  </div>
</template>

<script>

export default {
  name: "app",
  data () {
    return {
      // msg: 'Welcome to Your Vue.js Apaeeaeeffp'
      // books:[
      // {name: 'varrrra'},
      // {name: 'ccc'}
      // ],
      name: "aaaqqrrr",
      sex: "1"
    };
  }
};

</script>


