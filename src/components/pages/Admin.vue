<template>
   <div>
        <table class="table mt-4 " v-if="this.users.length">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Mail</th>
                <th scope="col">Password</th>
                <th scope="col">Role</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='u,index in users' :key="index">

                <th scope="row">{{ index+1 }}</th>
                <td>{{u.id}}</td>
                <td>{{u.mail}}</td>
                <td><TextFiled tip='password' :disabled=true v-model="u.password" id="loz"/></td>
                <td>{{u.role}}</td>
                <td><button @click=" update(u.id)" class="btn btn-outline-warning">Update</button></td>
                <td><button @click=" onDeleteUser(u.id)" class="btn btn-outline-danger">Delete</button></td>
                </tr>
              
                
            </tbody>
        </table>
        <p v-else class="alert alert-danger col-11 mx-5 mt-4">There are no users to delete or modify.</p>
        <button @click=" update(-1)" class="mx-5 btn btn-outline-primary">New user</button>
        
</div>

</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from 'vuex';
import TextFiled from '../TextField.vue';
export default ({
    name:"AdminComponent",
    components:{
      TextFiled
    },
    computed : {
            ...mapGetters(['users', 'role'])
    },
    mounted(){
      if(this.role != 'admin'){
        this.$router.push('/login')
      }
    },
    methods:{
        ...mapActions(['delete_User']),
        onDeleteUser(userId) {
          this.delete_User(userId)
            .then(() => {
              console.log('Korisnik je uspješno izbrisan.');
             
            })
            .catch(error => {
              console.error('Greska prilikom brisanja korisnika:', error);
             
            });
        },
        update(id){
          this.$router.push({name:'form' , params:{id:id}})
        }
    }

})
</script>