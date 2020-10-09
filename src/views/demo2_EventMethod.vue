<template>

  <div app="demo2">
      
       <h1>Event and Method</h1>
       <button v-on:click="clickme">ClickMe1</button>
       <button v-on:click="clickme2('welcome to vuejs')">ClickMe2</button>
       <button @click="clickme3('welcome to CMcode')">ClickMe3</button>

       <h3>{{gettimetamp()}}</h3>
  </div>
</template>

<script>
export default {
    name:"demo2",
    mounted(){
     this.initial()
    },
    methods:{
        initial(){
          console.log("Initialization")
        },
        clickme(){
            alert("hi")
        },
    clickme2(massage){
        alert(massage)
    },
    clickme3(massage){
        alert(massage)
    },
    gettimetamp(){
        return Date()
    }
  },
}
</script>

<style>

</style>