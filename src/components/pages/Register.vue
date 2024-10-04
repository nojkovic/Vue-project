<template>
    <section class="py-5">
        <div class="container px-5">
            <!-- Contact form-->
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h1 class="fw-bolder">Register</h1>
                    <p class="lead fw-normal text-muted mb-0">If you want to be part of our community, register</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                    
                        <form id="regForm" data-sb-form-api-token="API_TOKEN">
                            
                            <!-- Email address input-->
                            <TextField tip="text" placeholder1="Enter your name" id="name1" v-model="ime" :greska="errorIme" idGreska="greskaName1" label="Name:"/>
                            <!-- Password input-->
                            <TextField tip="email" placeholder1="Enter your email" id="email1" v-model="mail" :greska="errorMail" idGreska="greskaEmail1" label="Email:"/>
                            <TextField tip="password" placeholder1="Enter your password" id="pass" v-model="lozinka" :greska="errorLoz" idGreska="greskaPass1" label="Password:"/>
                            <TextField tip="password" placeholder1="Enter password confirmation" id="passConf" v-model="potvrdaLoz" :greska="errorPotLoz" idGreska="greskaPassConf" label="Password confirmation:"/>
                            <p>Select gender</p>
                            <Radio :radios="radios" :label="Object.keys(radios[0])[1]" :greska="errorPol" idGreska="greskaPol" :valueProperty="Object.keys(radios[0])[0]" v-model="pol" /> 
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <div class="d-grid"><button @click="register" class="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                    
                </div>
                <div class="col-6 mx-auto" v-if="successfully">
                    <br>
                        <div class="alert alert-success">
                            {{ successfully }}
                    </div>
                    </div>
                    <div class="col-6 mx-auto" v-if="errorUser">
                    <br>
                        <div class="alert alert-danger">
                            {{ errorUser }}
                    </div>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
import TextField from '../TextField.vue'
import Radio from '../Radio.vue'
import { mapGetters } from 'vuex'
export default ({
    name:"RegComponent",
    components:{
        TextField,
        Radio
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
            ime:"",
            mail:"",
            lozinka:"",
            pol:"",
            potvrdaLoz:"",
            errorIme : "",
            errorMail : "",
            errorLoz : "",
            errorPotLoz : "",
            errorPol : "",
            errorUser:"",
            successfully:"",
   

        }
    },
    computed:{
        ...mapGetters(['users'])
    },
    methods: {
        register() {
            
                this.errorIme = ""
                this.errorMail = ""
                this.errorLoz= ""
                this.errorPotLoz= ""
                this.errorPol= ""
                this.errorUser=""


                if(!this.ime) {
                    this.errorIme = "Name is required.";
                    return ;
                }
                if(this.ime.length<2 || this.ime.length > 20){
                    this.errorIme = "Name must have minimal 2 and maximum 20 character.";
                    return ;
                }
                

                if(!this.mail) {
                    this.errorMail = "Mail is required.";
                    return;
                }
                let regMail=/^[a-z]{3,30}[0-9]*@gmail.com$/;
                if(!regMail.test(this.mail)) {
                    this.errorMail = "Mail is not in good format.";
                    return;
                }
                if(!this.lozinka) {
                    this.errorLoz = "Password is required.";
                    return;
                }
                let regLoz=/[a-z]*[0-9]*[A-Z]*/;
                if(!regLoz.test(this.lozinka)) {
                    this.errorLoz = "Password is not in good format.";
                    return;
                }
                if(this.potvrdaLoz!=this.lozinka){
                    this.errorPotLoz="Passwords do not match"
                    return
                }

                if(!this.pol){
                    this.errorPol="Gender is required"
                    return
                }
                let user = this.users.find(x => x.mail == this.mail &&
                                           x.password == this.lozinka);

                
                
                if(user) {
                    this.errorUser = "User already exists."
                    return
                }

               let newUser={
                mail:this.mail,
                password:this.lozinka,
                role:"user"
               }

               this.$store.commit('addUser',newUser);

               let forma1=document.getElementById("regForm");
               forma1.reset()
               this.successfully="You have successfully registered"
            }
        }
})
</script>