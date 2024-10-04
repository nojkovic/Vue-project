<template>
    <div class=" mb-3">
        <label v-if='label' :for="id">{{label}}</label>
        <textarea class="col-12" v-if='rowCount' :id="id"  :rows="rowCount" v-model='localValue' col="5">
          
        </textarea>
        <input v-else-if="!disabled" class="form-control"  v-model='localValue' :id="id" :type="tip" :placeholder="placeholder1" data-sb-validations="required"  />
        <input v-else disabled class="form-control"  v-model='localValue' :id="id" :type="tip" :placeholder="placeholder1" data-sb-validations="required"  />
        <div v-if='greska' :id="idGreska" class="form-text" >{{greska}}</div>
    </div>

    
</template>

<script>

export default ({
  name:"TextField",
  props:{
        tip:{
            type:String,
            required:false
        },
        id:{
            type:String,
            required:true
        },
        idGreska:{
            type:String,
            required:false
        },
        greska:{
            type:String,
            required:false
        },
        value:{
            type:String
        },
        placeholder1:{
          type:String,
          required:false
        },
        rowCount:{
          type:String,
          required:false
        },
        label:{
          type:String,
          required:false
        },
        disabled:{
            type:Boolean,
            required:false,
            default:false
        }
    },
    data(){
        return{
            localValue:""
        }
    },
    mounted(){
        this.localValue=this.value
    },
    watch:{
        localValue:function(){
            this.$emit("input",this.localValue)
        },
        value:function(){
            this.localValue=this.value
        }
    }
})
</script>