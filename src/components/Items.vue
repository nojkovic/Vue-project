<template>
    <div class="row">
        <div  v-for='p,index in podaci' :key="index" class="col-lg-4 mb-5">
        <div class="card h-100 shadow border-0">
            <img class="card-img-top slika" :src="p.largeImageURL" :alt="p.largeImageUR" />
            <div class="card-body p-4">
                <div  class="badge bg-primary bg-gradient rounded-pill mb-2">Likes:{{p.likes}}</div>
                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3"></h5></a>
                <p class="card-text mb-0">
                    Collections: {{p.collections}}
                <br/>
                    Comments: {{p.comments}}
                
                
                </p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div class="d-flex align-items-end justify-content-between">
                    <div class="d-flex align-items-center">
                       <h6 class="text-muted mt-1">Users: </h6>
                        <div class="small">
                            <div class="font-weight-light mx-2">{{p.user}}</div>
                            <div class="text-muted"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>



export default ({
    name:"ItemsComponent",
    props:{
      podaci:{
        type:Array,
        required:true
      }
    },
})
</script>
<style scoped>
.slika{
    width: 400px;
}

</style>