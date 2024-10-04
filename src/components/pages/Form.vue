<template>
    <section class="py-5">
        <div class="container px-5">
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                   
                    <h1 v-if='this.$route.params.id>0' class="fw-bolder">Update users</h1>
                    <h1 v-else class="fw-bolder">Add users</h1>
                    
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                    
                        <form  id="UForm" >
                            
                            <TextField tip="email" placeholder1="Enter your email" id="email1" v-model="mail1" :greska="errorMail" idGreska="greskaEmail1" label="Email:"/>
                            <TextField tip="password" placeholder1="Enter your password" id="pass" v-model="lozinka1" :greska="errorLoz" idGreska="greskaPass1" label="Password:"/>
                            <TextField tip="password" placeholder1="Enter password confirmation" id="passConf" v-model="potvrdaLoz1" :greska="errorPotLoz" idGreska="greskaPassConf" label="Password confirmation:"/>
                            
                            <div  v-if='this.$route.params.id>0' class="d-grid"><button @click="editUser" class="btn btn-primary btn-lg">Save</button></div>
                            <div v-else class="d-grid"><button @click="addUser1" class="btn btn-primary btn-lg">Add</button></div>
                        </form>             
                    </div>
                </div>
            </div>          
        </div>
    </section>
</template>

<script>
import TextField from '../TextField.vue'
import { mapGetters } from "vuex"

export default {
    name:"FormComponent",
    components:{
    TextField,

    },
    data(){
        return{
            radios:[
                {
                    id:"0",
                    tekst:"Male",
                   
                },
                {
                    id:"1",
                    tekst:"Female",
                    
                }
            ],
            mail1:"",
            lozinka1:"",
            potvrdaLoz1:"",
            errorMail:"",
            errorLoz:"",
            errorPotLoz:""
            
           
        }
    },
    computed : {
            ...mapGetters(['users', 'role'])
    },
    mounted(){
        
        if(this.$route.params.id>0){
            let user=this.users.find(x=>x.id==this.$route.params.id)
            this.mail1=user.mail
            this.lozinka1=user.password
            this.potvrdaLoz1=user.password
            console.log(user)
            console.log(this.mail1)
        }

        if(this.role != 'admin'){
            this.$router.push('/login')
        }
    },
    methods:{
        addUser1(){
                this.errorMail = ""
                this.errorLoz= ""
                this.errorPotLoz= ""

                if(!this.mail1) {
                    this.errorMail = "Mail is required.";
                    return;
                }
                let regMail=/^[a-z]{3,30}[0-9]*@gmail.com$/;
                if(!regMail.test(this.mail1)) {
                    this.errorMail = "Mail is not in good format.";
                    return;
                }
                if(!this.lozinka1) {
                    this.errorLoz = "Password is required.";
                    return;
                }
                let regLoz=/[a-z]{7,25}[0-9]*[A-Z]*/;
                if(!regLoz.test(this.lozinka1)) {
                    this.errorLoz = "Password is not in good format.It must contain at least 7 letters";
                    return;
                }
                if(this.potvrdaLoz1!=this.lozinka1){
                    this.errorPotLoz="Passwords do not match"
                    return
                }
                
                let idNew=Math.max(...this.users.map(user=>parseInt(user.id)+1));
                let userNew={
                    id:idNew,
                    mail:this.mail1,
                    password:this.lozinka1,
                    role:'user'
                }

                this.$store.commit('addUser',userNew);
                this.$router.push("/admin");
                return
        },
        editUser(){
                this.errorMail = ""
                this.errorLoz= ""
                this.errorPotLoz= ""

                if(!this.mail1) {
                    this.errorMail = "Mail is required.";
                    return;
                }
                let regMail=/^[a-z]{3,30}[0-9]*@gmail.com$/;
                if(!regMail.test(this.mail1)) {
                    this.errorMail = "Mail is not in good format.";
                    return;
                }
                if(!this.lozinka1) {
                    this.errorLoz = "Password is required.";
                    return;
                }
                let regLoz=/[a-z]{7,25}[0-9]*[A-Z]*/;
                if(!regLoz.test(this.lozinka1)) {
                    this.errorLoz = "Password is not in good format.It must contain at least 7 letters";
                    return;
                }
                if(this.potvrdaLoz1!=this.lozinka1){
                    this.errorPotLoz="Passwords do not match"
                    return
                }
            let userNew={
                id:this.$route.params.id,
                mail:this.mail1,
                password:this.lozinka1,
               
            }
            this.$store.commit('updateUser',userNew);
            this.$router.push("/admin");
            return
        }
    }
   
}
</script>