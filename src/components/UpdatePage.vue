<template>
<HeaderMenu />
<h1>Update Receipt Details:</h1>
<form class = "addreceipt">
    <h3>Product:</h3>
<input type="text" product = "product" placeholder ="Enter product" v-model = "receipt.product" />
    <h3>Store:</h3>
<input type="text" product = "store" placeholder ="Enter Store" v-model = "receipt.store" />
<button type = "button" v-on:click="updateReceipt">Update Receipt</button>
</form>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import axios from 'axios'
export default {
    name:'UpdatePage',
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
       async updateReceipt()
        {
            console.warn(this.receipt)
            const result = await axios.put("http://localhost:3000/receipts/"+this.$route.params.id,{
                product:this.receipt.product,
                store:this.receipt.store, 
            });
            if (result.status == 200){
                this.$router.push({name:"HomePage"})
            }
        }
    },
        async mounted(){
        let user = localStorage.getItem('userinfo');
        if(!user)
        {
            this.$router.push({name:"SignUp"})
        }

        const result = await axios.get('http://localhost:3000/receipts/'+this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result.data)
        this.receipt = result.data
    }
}
</script>
