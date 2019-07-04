<template>
  <div>
    <h1>{{books.name}}</h1>
    <h3>{{books.price}}</h3>
    <button v-on:click="sfn">click</button>
    <button @click="$emit('pfn2')">2click</button>
    <code>
        第一种写法：
      1、在父组件中定义方法 pfn
      2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名="父组件中的方法" ==> @pfn="parentFn"
      3、子组件中通过$emit()触发自定义事件事件 this.$emit(pfn,参数列表。。。)
      <br/>>第二种写法：
      在子组件中，v-on:事件名="$emit('父组件名')"
    </code>
  </div>
</template>
<script>
export default {
  props: ["books"],
  methods:{
      sfn(){
          this.$emit('pfn','我是子组件的传值')
      }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 写上scoped属性，则css只对当前组件有效 -->
<style scoped>
h1 {
  color: chocolate;
}
</style>




