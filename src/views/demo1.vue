<template>
<div>
<div id="demo1">
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

    <ul>
      <li><router-link to="/">Home</router-link>  </li>
      <li><router-link to="/demo1">Demo1</router-link></li>
    </ul>
     
     
  
  </div>
</div>
  
  
</template>


<script>
export default {
    name:"demo1",
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
}
</script>

<style>

</style>