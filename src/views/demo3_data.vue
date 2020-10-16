<template>
  <div>
      <h1>DATA</h1>
      <button @click="count++; isLogged=true;">count++</button>
      <span>{{count}}</span>
      <div>{{message}}</div>
      <div>{{isLogged}}</div>
      <input type="text" placeholder="Enter a Message" v-model="message">
      <h2 v-if="isLogged">Yahooooooo</h2>
      <div>{{account}} {{account.username}} {{account.password}}</div>
      <dic>{{courses[0]}}</dic>
      <ul>
          <li v-for="(item, index) in courses" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
   name:"demo3",
   mounted(){
        this.message="Welcome to CodeMobiles"
   },
   data(){
       return{
           count:0,
           message:"",
           isLogged: false,
           account:{
               username : "admin",
               password : "1234"
           },
           courses : [
               "anglar",
               "vue.js",
               "uxui"
           ]
       }
   },
}
</script>

<style scoped>
li{
    color: red;
}
</style>