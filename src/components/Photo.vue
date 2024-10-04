<template>
    <div class="row">
        <div class="col-lg-4 mb-5" v-for="p,index in photo" :key="index" >
            <div class="card h-100 shadow border-0">
                <img class="card-img-top slika" :src="p.largeImageURL" alt="p.largeImageURL" />
                <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">{{p.type}}</div>
                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">{{p.tags}}</div></a>
                    <p class="card-text mb-0"> 
                        Likes: {{ p.likes }}
                        <br/>
                        Comments: {{ p.comments }}
                        <br/>
                        Downloads: {{ p.downloads }}
                        <br/>
                        Image views: {{ p.views }}
                    </p>
                </div>
                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle me-3 user" :src="p.userImageURL" alt="..." />
                            <div class="small">
                                <div class="fw-bold">{{p.user}}</div>
                                <!-- <div class="text-muted">March 23, 2023 &middot; 4 min read</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default ({
    name:"PhotoComponent",
    data(){
        return{
            photos : [],
            token:""
        }
    },
    props:{
        photo:{
            type:Array,
            required:false
        }
    },
    mounted(){
    
        var that = this
        axios.get("https://pixabay.com/api/?key=37252745-d95d852fb1dab556fa8809d36")
             .then(function(response){
                that.photos = response.data.hits
                console.log(that.photos)
                
            })

            
    }
})
</script>

<style>
.slika{
    height: 350px;
}
.user{
    width: 60px;
}
</style>