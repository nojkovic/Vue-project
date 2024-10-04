<template>
    <div>
        <!-- About section one-->
        <section class="py-5 bg-light" id="scroll-target">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0 slika" :src="photos[9].largeImageURL" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Fragrant notes</h2>
                            <p class="lead fw-normal text-muted mb-0">Just as the sense of smell can bring back memories, so our photos remind you of beautiful moments.
                                <br/>
                                Try it!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About section two-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center ">
                        <div class="col-lg-6 order-first order-lg-last "><img class="img-fluid rounded mb-5 mb-lg-0 slika" :src="photos[11].largeImageURL" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Bird's eye view</h2>
                            <p class="lead fw-normal text-muted mb-0">Each picture is proof that things can be seen from multiple angles. Look at it from multiple angles so that your picture is complete</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Team members section-->
            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="fw-bolder">Our team</h2>
                        <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center ">
                                <img class="img-fluid rounded-circle mb-4 px-4 " :src="photos[0].userImageURL" alt="..." />
                                <h5 class="fw-bolder">{{photos[0].user}}</h5>
                                <div class="fst-italic text-muted">Photographer 50 years old</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" :src="photos[13].userImageURL" alt="..." />
                                <h5 class="fw-bolder">{{photos[13].user}}</h5>
                                <div class="fst-italic text-muted">Photographer 29 years old</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-sm-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" :src="photos[8].userImageURL" alt="..." />
                                <h5 class="fw-bolder">{{photos[8].user}}</h5>
                                <div class="fst-italic text-muted">Team worker's 35 years old</div>
                            </div>
                        </div>
                        <div class="col mb-5 ">
                            <div class="text-center ">
                                <img class="img-fluid rounded-circle mb-4 px-4" :src="photos[11].userImageURL" alt="..." />
                                <h5 class="fw-bolder">{{photos[11].user}}</h5>
                                <div class="fst-italic text-muted">Team worker's 20 years old</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>

import axios from "axios"
export default ({
    name:"AboutComponent",
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
                that.photos = response.data.hits
                console.log(that.photos)
                
            })

            
    }
})
</script>
<style scoped>
.slika{
    width:400px;
}
</style>