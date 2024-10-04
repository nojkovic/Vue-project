<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <a class="navbar-brand" href="index.html">Fotography studio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <router-link v-for='i,index in nav' v-role="i.role" :key='index' :to="i.href" class="nav-item link"><a class="nav-link" :href="i.href">{{ i.text }}</a></router-link>
                    <li v-role="['admin', 'user']" @click="logout" class="nav-item link nav-link">Logout</li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>


export default ({
    name:"NavComponent",
    props:{
        nav:{
            type:Array,
            required:true
        }
    },
    mounted() {
      
       
    },
    methods: {
      logout() {
        this.$store.commit("changeUser", undefined)
        this.$forceUpdate()
        this.$router.push("/login")
        location.reload()
      }
    }
})
</script>

<style>
.link{
    text-decoration: none;
}
</style>
