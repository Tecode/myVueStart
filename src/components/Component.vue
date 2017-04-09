<template>
    <section>
        <h1>我是模板组件{{name}}{{age}}</h1>
        <button v-on:click='clickMe'>{{propsName}}</button>
    </section>
</template>
<script>
    export default{
      data () {
        return {
          name: 'lal'
        };
      },
      props: {
        propsName: String,
        age: Number
      },
      methods: {
        clickMe: function () {
          alert(this.age);
        }
      }
    };
</script>
