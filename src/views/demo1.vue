<template>
<div>
  <div id="carouselId" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
               <li data-target="#carouselId" data-slide-to="0" class="active"></li>
               <li data-target="#carouselId" data-slide-to="1"></li>
               <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
               <div class="carousel-item active">
                    <img src="../assets/1.png" alt="First slide">
               </div>
               <div class="carousel-item">
                    <img src="../assets/2.jpg" alt="Second slide">
               </div>
               <div class="carousel-item">
                    <img src="../assets/3.jpg" alt="Third slide">
               </div>
          </div>
          <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
          </a>
     </div>
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
 ul{
   margin:0 ;
   padding:0;
 }
 li{
   display:inline;
   margin-right: 4px;
 }
 button{
   margin-right: 10px;
 }
</style>