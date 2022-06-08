<template>
<HeaderMenu />
<h1>Add Receipts</h1>
<form class = "addreceipt">
<input type="text" product = "product" placeholder ="Enter product" v-model = "receipt.product" />
<input type="text" product = "store" placeholder ="Enter Store" v-model = "receipt.store" />
<button type = "button" v-on:click="addPhoto">Upload Photo</button><br><br>
<button type = "button" v-on:click="addReceipt">Add New Receipt</button>
</form>
</template>
<script>
import HeaderMenu from './HeaderMenu.vue';
import axios from 'axios';
export default {
    name:'AddPage',
    components: {
        HeaderMenu
    },
    data(){
        return{ receipt :{
            product:'',
            store:''
        }
        }
    },
    methods:{

        addPhoto(){
            alert("photo upload")
        },

        async addReceipt()
        {
            console.warn(this.receipt)
            const result = await axios.post("http://localhost:3000/receipts",{
                product:this.receipt.product,
                store:this.receipt.store, 
            });
            if (result.status == 201){
                this.$router.push({name:"HomePage"})
            }
            console.warn("result",result)
        }
    },
        mounted(){
        let user = localStorage.getItem('userinfo');
        if(!user)
        {
            this.$router.push({name:"SignUp"})
        }
    }
}
</script>
