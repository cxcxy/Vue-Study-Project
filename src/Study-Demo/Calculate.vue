/* 计算属性  vue 实例内 computed */
<template>
  <div>
    {{ reversedText }}
    总价：{{ prices }}
    
  </div>
  <!-- <p> {{ testName }} </p> -->
</template>
<script>
  export default {
    // props: [
    //   'testName'
    // ],
    data () {
      return {
        title: '222',
        text: '123,456',
        package1: [
          {
            name: 'iPhone 7',
            price: 5000,
            count: 1
          },
          {
            name: 'iPhone 8',
            price: 6000,
            count: 1
          }
        ],
        package2: [
          {
            name: 'iPhone8 Plus',
            price: 2000,
            count: 1
          },
          {
            name: 'iPhoneX',
            price: 1000,
            count: 1
          }  
        ]
      }
    },
    /* 
       所有的计算属性都以函数的形式写在computed选项内，
       并且把最终的结果return出去 
    */
    computed: {
      reversedText: function () {
        // console.log(111)
        return this.text.split(',').reverse().join(',')
      },
      prices: function () {
        var prices = 0;
        for (var i = 0; i < this.package1.length; i++) {
          prices += this.package1[i].price * this.package1[i].count
        }
        for (var i = 0; i < this.package2.length; i++) {
          prices += this.package2[i].price * this.package2[i].count
        }
        return prices
      }
    }
  }
</script>