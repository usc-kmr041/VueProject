<template>
<HeaderMenu />
<h1>Greetings {{username}}, enjoy your stay!</h1>
<table border="1">
<tr>
<td>No.</td>
<td>Product</td>
<td>Store</td>
<td></td>
</tr>
<tr v-for="item in receipt" :key = "item.id">
<td>{{item.id}}</td>
<td>{{item.product}}</td>
<td>{{item.store}}</td>
<td><router-link :to="'/update-page/'+item.id">Update</router-link><br>
<button v-on:click="deleteReceipt(item.id)">Delete</button>
</td>
</tr>
</table>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import axios from 'axios';
export default {
    name:'HomePage',
    data(){
        return {
            username:'',
            receipt:[],
        }
    },
    components: {
        HeaderMenu
    },

    methods: {
        async deleteReceipt(id){
        let result = await axios.delete("http://localhost:3000/receipts/"+id);
        console.warn(result)
        if (result.status == 200)
        {
        this.loadData()
        }
        },
        async loadData(){
        let user = localStorage.getItem('userinfo');
        this.username=JSON.parse(user).username;
        if(!user)
        {
            this.$router.push({name:"SignUp"})
        }
        let result = await axios.get("http://localhost:3000/receipts");
//        console.warn(result)
        this.receipt=result.data;
        }
    },
    async mounted()
    {
        this.loadData();
    },
    
}
</script>

<style>
td{
    width:150px;
    height:50px;
}

</style>