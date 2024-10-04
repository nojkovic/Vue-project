<template>
 
<html lang="en">
   <Head/>
    <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <Navigation  :nav="podaci" />
           <router-view> </router-view>
            <!-- Features section-->
            
        </main>
        <!-- Footer-->
        <Footer :nav="podaci"/>
        
    </body>
</html>

</template>

<script>

import Head from "./components/Head.vue"
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Head,
    Navigation,
    Footer,
  },
  data(){
    return {
      podaci:[
        {
          href:"/",
          text:"Home",
          role: ["unauthorized","admin","user"]
        },
        {
          href:"/contact",
          text:"Contact",
          role: ["unauthorized","admin","user"]
        },
        {
          href:"/photos",
          text:"Photos",
          role: ["admin","user"]
        },
        {
          href:"/about",
          text:"About",
          role: ["admin","user"]
        },
        {
          href:"/admin",
          text:"Admin",
          role: ["admin"]
        },
        
        {
          href:"/login",
          text:"Log in",
          role: ["unauthorized"]
        },
        {
          href:"/register",
          text:"Register",
          role: ["unauthorized"],
        }
        
      ]
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
