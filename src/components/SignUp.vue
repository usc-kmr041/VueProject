<template>
<img class="image1" src="../assets/image1.png" />
<h1>Sign Up</h1>
<div class="register">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Register</button>
    <p>
        already have an account? proceed here:
    <router-link to ="/login-page">Login Page</router-link>
    </p>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data()
    {
        return{
            email:'',
            username:'',
            password:'',
        }
    },
    methods:{
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
            email:this.email,
            username:this.username,
            password:this.password
            });

            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("userinfo",JSON.stringify(result.data))
                this.$router.push({name:"HomePage"})
            }
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

<style>
.image1{
    width:400px
}
.register input, .loginpage input{
    margin-right: auto;
    margin-left: auto;
    height: 50px;
    padding-left: 50px;
    display: block;
    margin-bottom: 50px;
    width: 300px;
    border: 3px solid mediumslateblue;

}

.register button, .loginpage button{
    width: 200px;
    padding: 15px;
    background: mediumslateblue;
    border: mediumslateblue;
    color: white;
    cursor: pointer;
}
</style>