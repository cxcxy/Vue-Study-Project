<template>
  <div>
    <ul>
      <!-- 
        循环 拿出 book 对象
       -->
      <li v-for="book in books">{{ book.name }}</li>
      <br>
      <br>
      <li v-for="(book, index) in books"> {{ index }} - {{ book.name }} </li>
    </ul>
  <br>
  <br>
  <!-- 
    与 v-if 一样，
    v-for也可以使用在内置标签<template>上，
    将多个元素进行渲染
   -->
 
  <template v-for="book in filterName">
    <li>书名： {{ book.name }} </li>
    <li>作者： {{ book.author }} </li>
  </template>
  <!-- 
     除了数组外
     对象的属性也是可以遍历的
    -->
  <span v-for="value in user"> {{ value }} </span>
  <!-- 
     除了数组外
     对象的属性也是可以遍历的
    -->
  <ul>
    <li v-for="(value,key,index) in user"> 
    {{ index }} - {{ key }} - {{ value }}  
    </li>
  </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        books: [
          {name: 1,author: 'a'},
          {name: 2,author: 'b'},
          {name: 3,author: 'c'},
          {name: 4,author: 'd'},
        ],
        user: {
          name: 'haha',
          sex: '男',
          age: 26
        }
      }
    },
    computed: {
      filterName: function () {
        // return this.books.filter(function (book) {
        //     book.name = book.name + "ha3ha"
        //     return book.name
        // })
        /* 
        进行排序， 计算属性 filtername 依赖books， 但不会修改books，
        */
        return this.books.sort(function (a,b) {
          return a.name < b.name
        })
      }
    }
  }
</script>