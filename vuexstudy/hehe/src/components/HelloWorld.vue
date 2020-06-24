<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        {{count}}
      </li>
      <li>{{name}}</li>
      <li><button @click="add">点击</button></li>
    </ul>
  </div>
</template>

<script>
import types from '../store/types.js'
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
     ...mapGetters('test1',['count','name']),
  },
  methods:{
     ...mapActions('test1',['getName']),
    add:function(){
      // this.$store.commit(types.CHENXUAN,10000)

       // this.$store.commit('test1/CHENXUAN',10000);
       // this.$store.dispatch('test1/getCount',10000)
       this.getName();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
