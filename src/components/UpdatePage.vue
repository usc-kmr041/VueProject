<template>
<HeaderMenu />
<h1>update page!</h1>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
export default {
    name:'UpdatePage',
    components: {
        HeaderMenu
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
