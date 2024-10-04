<template>
    <section class="py-5">
        <div class="container px-5">
            <div class="row gx-5">
                <nav class="navbar navbar-white bg-white">
                    <form  class="form-inline p-3">
                        <input  v-model='search' class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                       
                    </form>
                    <p v-if='!this.photo.length' class="alert alert-danger col-12 mx-auto">There are no images with that name.</p>
                   
                </nav>
                <Photo :photo="photo"/>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"
import Photo from '../Photo.vue'
export default ({
    name:"PhotosComponent",
    components:{
        Photo
    },
    data(){
        return{
            search:"",
            photo:[]
        }
        
    },
    mounted(){
    
    var that = this
    axios.get("https://pixabay.com/api/?key=37252745-d95d852fb1dab556fa8809d36")
         .then(function(response){
            that.photo = response.data.hits
            console.log(that.photo)
            
        })

        
    },
    watch:{
        search:function(){
            let that=this
            axios.get("https://pixabay.com/api/?key=37252745-d95d852fb1dab556fa8809d36&q="+this.search,{}).then(function(response){
                that.photo=response.data.hits
            })
        }
    }
    
    
})
</script>
