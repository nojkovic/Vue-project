<template>
    <section class="py-5">
        <div class="container px-5">
            <!-- Contact form-->
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h1 class="fw-bolder">Contact us</h1>
                    <p class="lead fw-normal text-muted mb-0">We'd love to hear your opinion or question</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <!-- Name input-->
                            <TextField tip="text" placeholder1="Enter a name" id="name" v-model="ime" :greska="errorIme" idGreska="greskaIme" label="Name:"/>
                            <!-- Email address input-->
                            <TextField tip="email" placeholder1="Enter your mail" id="mail" v-model="mail" :greska="errorMail" idGreska="greskaMail" label="Email:"/>
                            <!-- Phone number input-->
                            <TextField tip="tel" placeholder1="Enter your telephone" id="tel" v-model="tel" :greska="errorTel" idGreska="greskaTel" label="Telephone:"/>
                            <!-- Message input-->
                            <TextField  placeholder1="Enter your message" id="tel" v-model="poruka" :greska="errorPoruka" idGreska="greskaPoruka" label="Message:" rowCount="4"/>
                            <!-- Submit success message-->
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
                            <div class="d-grid"><button @click="contact" class="btn btn-primary btn-lg">Submit</button></div>
                        </form>
                    </div>
                    
                </div>
                <div class="col-6 mx-auto" v-if="successfully">
                    <br>
                        <div class="alert alert-success">
                            {{ successfully }}
                    </div>
                    </div>
            </div>
            <!-- Contact cards-->
            <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                <div class="col">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-dots"></i></div>
                    <div class="h5 mb-2">Chat with us</div>
                    <p class="text-muted mb-0">Chat live with one of our support specialists.</p>
                </div>
                <div class="col">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
                    <div class="h5">Ask the community</div>
                    <p class="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                </div>
                <div class="col">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-circle"></i></div>
                    <div class="h5">Support center</div>
                    <p class="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                </div>
                <div class="col">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone"></i></div>
                    <div class="h5">Call us</div>
                    <p class="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                </div>
                 
            </div>
        </div>
    </section>
</template>

<script>
import TextField from '../TextField.vue'
export default ({
  name:"ContactComponent",
  components:{
    TextField,
  },
  data(){
    return {
        ime:"",
        mail:"",
        tel:"",
        poruka:"",
        errorIme : "",
        errorMail : "",
        errorTel : "",
        errorPoruka : "",
        successfully:""
    }
  },
  methods: {
    contact() {
                this.errorIme = ""
                this.errorMail = ""
                this.errorTel= ""
                this.errorPoruka= ""


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

                if(!this.tel) {
                    this.errorTel = "Telephone is required.";
                    return;
                }
                if(this.tel.length<8 || this.tel.length > 13){
                    this.errorIme = "Telephone must have minimal 8 and maximum 13 character.";
                    return ;
                }

                if(!this.poruka) {
                    this.errorPoruka = "Message is required.";
                    return;
                }

               let forma=document.getElementById("contactForm");
               forma.reset()
               this.successfully="You have successfully sent your message"
            }
        }
})
</script>


