<template>
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2">Fotography studio</h1>
                        <p class="lead fw-normal text-white-50 mb-4">If you want to know the magic of creating photos or to participate, LOG IN</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <router-link v-if='isLogin' to="/login" ><a class="btn btn-outline-light btn-lg px-4 me-sm-3" >Log in</a></router-link>
                            <router-link  to="/register" ><a class="btn btn-outline-light btn-lg px-4">Register</a></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5 slika" :src="item[5].largeImageURL" alt="..." /></div>
            </div>
        </div>
    </header>
</template>

<script>

import axios from "axios"


export default ({
    name:"HeaderComponent",
    components:{
       
    },
    data(){
        return{
            item : [],
            token:""
        }
    },
    mounted(){
    
        var that = this
        axios.get("https://pixabay.com/api/?key=37252745-d95d852fb1dab556fa8809d36")
             .then(function(response){
                that.item = response.data.hits.slice(0,6)
               
                
            })

            
    },
    computed:{
        isLogin(){
            let user=localStorage.getItem("user")
            return user==null
        }
    }
})
</script>
<style scoped>
.slika{
    height: 400px;
}

</style>