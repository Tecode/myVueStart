<template>
    <div class="first">
        <button v-on:click="handelerClick">{{name}}</button>
        <h2>
        <p>23</p>
        <p>6999</p>
        </h2>
        <v-component :propsName="name" :age="age"></v-component>
    </div>
</template>
<script>
import VComponent from './Component.vue';
export default {
  name: 'first',
  data () {
    return {
      name: 'LOOHOOC',
      age: 20
    };
  },
  methods: {
    handelerClick: function () {
      alert(this.name);
    },
  },
  components: {
    VComponent,
  }
};
</script>
<style lang="less" scoped>
    h2{
        transform:rotate(30deg);
        p{
            color: #ff004d;
            transition: all 0.3s linear;
        }
        &:hover{
            font-size: 30px;
        }
    }
</style>
