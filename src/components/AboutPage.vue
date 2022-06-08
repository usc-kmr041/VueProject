<template>
<HeaderMenu />
<h1>Kevin Chester Rovillos</h1>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
export default {
    name:'AboutPage',
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
