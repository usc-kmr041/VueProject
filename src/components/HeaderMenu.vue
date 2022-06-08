<template>
<div class = "navbar">
<router-link to="/">Home</router-link>
<router-link to="/add-page">Add Receipt</router-link>
<router-link to="/about-page">About</router-link>
<a v-on:click = "logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
    name:'HeaderMenu',
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>
<style>
.navbar{
    background-color: mediumslateblue;
    overflow:hidden
}
.navbar a{
    margin-right: 3px;
    font-size: 18px;
    text-align: center;
    padding: 15px;
    color: white;
    float: left;
    text-decoration: none;
}
.navbar a:hover{
    background-color: white;
    color:mediumslateblue;
}
</style>