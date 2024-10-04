<template>
    <section class="py-5">
        <div class="container px-5">
            <!-- Contact form-->
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h1 class="fw-bolder">Log in</h1>
                    <p class="lead fw-normal text-muted mb-0">To see more information you must log in</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <!-- Email address input-->
                            <TextField tip="email" placeholder1="Enter your mail" id="mail" v-model="mail" :greska="errorMail" idGreska="greskaMail" label="Email:"/>
                           
                            <!-- Password input-->
                            <TextField tip="password" placeholder1="Enter your password" id="pass" v-model="password" :greska="errorPass" idGreska="greskaPass" label="Password:"/>
                            
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
                            <div class="d-grid"><button @click="performLogin" class="btn btn-primary btn-lg">Login</button></div>
                        </form>
                    </div>
                    
                </div>
                    <div class="col-6 mx-auto" v-if="error">
                    <br>
                        <div class="alert alert-danger">
                            {{ error }}
                    </div>
                    </div>
            </div>
            
       <br>
            </div>
          
    </section>
</template>

<script>
import TextField from '../TextField.vue'
import { mapGetters } from "vuex"
    export default {
        name: "LogComponent",
        components:{
            TextField
        },
        data() {
            return {
                errorMail: "",
                errorPass: "",
                mail: "sara@gmail.com",
                password: "saraN123",
                error:""
            }
        },
        computed : {
            ...mapGetters(['users', 'role'])
        },
        mounted() {
            if(this.role != 'unauthorized') {
                this.$router.push("/login")
            }
        },
        methods: {
            performLogin() {
                this.errorMail = ""
                this.errorPass = ""
                this.error=""

                if(!this.mail) {
                    this.errorMail = "Email is required.";
                    return;
                }
                

                if(!this.password) {
                    this.errorPass = "Password is required.";
                    return;
                }
                
                let user = this.users.find(x => x.mail == this.mail &&
                                           x.password == this.password);

                
                
                if(!user) {
                    this.error = "Wrong credentials."
                    return
                }

                let localStorageItem = {
                    mail : user.mail,
                    role : user.role
                }
                localStorage.setItem("user", JSON.stringify(localStorageItem));
                
                this.$store.commit("changeUser", localStorageItem)
                
                this.$router.push("/photos")
                location.reload()
            }
        }
    }
</script>