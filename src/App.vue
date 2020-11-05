<template>


<div id="app">

<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3f3f3d;">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="/demo1">Demo1_intro <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/demo2">Demo2_EventMethod</a>
            </li>
             <li class="nav-item">
                <a class="nav-link" href="/demo3">Demo3_Data</a>
            </li>
             <li class="nav-item">
                <a class="nav-link" href="/demo4">Demo4_Computed</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
<div id="carouselId" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
        <li data-target="#carouselId" data-slide-to="1"></li>
        <li data-target="#carouselId" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
            <img src="https://i0.wp.com/www.creativeclick.co/wp-content/uploads/cc-cover-background-61950x500.png?fit=1950%2C500&ssl=1" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://i2.wp.com/www.creativeclick.co/wp-content/uploads/cc-cover-background-51950x500.png?fit=1950%2C500&ssl=1" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://i1.wp.com/www.creativeclick.co/wp-content/uploads/cc-cover-background-41950x500.png?fit=1950%2C500&ssl=1" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
                <h3>Title</h3>
                <p>Description</p>
            </div>
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



     <router-view></router-view>
</div>
</template>

<script>
export default {
  name:"app",
};
</script>
  
<style scoped>
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