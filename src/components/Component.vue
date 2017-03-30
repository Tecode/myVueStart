<template>
    <section>
        <h1>我是模板组件{{name}}</h1>
        <button v-on:click='clickMe'>点我</button>
    </section>
</template>
<script>
    export default{
      data () {
        return {
          name: 'lal'
        };
      },
      methods: {
        clickMe: function () {
          alert(this.name = 522);
        }
      }
    };
</script>
