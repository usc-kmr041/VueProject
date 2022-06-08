<template>
<img class="image1" src="../assets/image1.png" />
<h1>Log In</h1>
<div class="loginpage">
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Log In</button>
    <p>
    <router-link to ="/sign-up">Register</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LoginPage',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?username=${this.username}&password=${this.password}`
            )

            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("userinfo",JSON.stringify(result.data[0]))
                this.$router.push({name:"HomePage"})
            }
            console.warn(result)
        }
    },
    mounted(){
        let user = localStorage.getItem('userinfo');
        if(user)
        {
            this.$router.push({name:"HomePage"})
        }
    }
}
</script>