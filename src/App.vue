<template>
<router-view />
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
}
.image1{
    width:400px
}
.register input, .addreceipt input{
    margin-right: auto;
    margin-left: auto;
    height: 50px;
    padding-left: 50px;
    display: block;
    margin-bottom: 50px;
    width: 300px;
    border: 3px solid mediumslateblue;

}

.register button, .addreceipt button{
    width: 200px;
    padding: 15px;
    background: mediumslateblue;
    border: mediumslateblue;
    color: white;
    cursor: pointer;
}
</style>
