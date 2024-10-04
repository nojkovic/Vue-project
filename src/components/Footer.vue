<template>
    <footer class="bg-dark py-4 mt-auto">
        <div class="container px-5">
            <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Nojkovic Sara 2023</div></div>
                <div class="col-auto d-flex ">
                    <router-link v-for='i,index in nav' v-role="i.role" :key='index' :to="i.href" class="nav-item link"><a class="nav-link mx-3" :href="i.href">{{ i.text }}</a></router-link>
                    <li v-role="['admin', 'user']" @click="logout" class="nav-item link">Logout</li>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>


export default ({
    name:"FooterComponent",
    props:{
        nav:{
            type:Array,
            required:true
        }
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
    color:white;
    list-style: none;
}

</style>