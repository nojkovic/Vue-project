<template>
    <div>
         <Header/>
        <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">What do we offer ???
                            This is only part of it...</h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                                    <h2 class="h5">Lens</h2>
                                    <p class="mb-0">Get to know the world through our lens.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                    <h2 class="h5">Building future</h2>
                                    <p class="mb-0">With our help, you can become a world-famous photographer.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Together</h2>
                                    <p class="mb-0">Ability to work in a team.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Special moments</h2>
                                    <p class="mb-0">We are here to record each of your special moments in the most beautiful light.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Testimonial section-->
            <div class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xl-7">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">"Change your life today, Don't bet on the future, act now, without delay."</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img class="rounded-circle me-3 slikaHome" :src="photos[1].previewURL" alt="slika1" />
                                    <div class="fw-bold">
                                        Simone de Beauvoir
                                        <span class="fw-bold text-primary mx-1">/</span>
                                        French philosopher
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Blog preview section-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">From our photos</h2>
                                <p class="lead fw-normal text-muted mb-5">These are some of the photos taken by our team, we hope you like them.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <Items :podaci="photos"/>
                        
                    </div>
                    <!-- Call to action-->
                    
                </div>
            </section>
    </div>
</template>

<script>
import axios from "axios"
import Header from '../Header.vue'
import Items from '../Items.vue'

export default ({
    name:"HomeComponents",
    components:{
        Header,
        Items
    },
    data(){
        return{
            photos : [],
            token:""
        }
    },
    mounted(){
    
        var that = this
        axios.get("https://pixabay.com/api/?key=37252745-d95d852fb1dab556fa8809d36")
             .then(function(response){
                console.log(response.data.hits)
                that.photos = response.data.hits.slice(0,3)
                console.log(that.photos)
                
            })

            
    }
})
</script>

<style>
.slikaHome {
    width: 70px;
}

</style>
