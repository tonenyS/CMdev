<template>
  <div>
    <h1>What is your name ?</h1>
    <input v-model="message" type="text" placeholder="Key your name">
     <br>
     <br>
     <button @click="message=''">Reset</button>
     <br>
     <h1>Click Button</h1>
     <input v-model="message" type="text" placeholder="my name show"><br>
     <br>
     <input v-model="count" type="text">
     <br><br>
     <button @click="onClickAdd">click</button> 
     <button @click="count=0">Reset</button>

  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return{
      message:"",
      count:0
    }
  },
  methods:{
    onClickAdd(){
      this.count=this.count+1
    }
  }
};
</script>
  
<style>

</style>