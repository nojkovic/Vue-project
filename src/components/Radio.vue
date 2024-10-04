<template>
    <div>
        <div class="form-check my-3" v-for="r,index in radios" :key="index">
            <input class="form-check-input" v-model="localnaPromenljiva" type="radio" :value="r[valueProperty]" :name="name" :id="r[valueProperty]">
            <label class="form-check-label" :for="r[valueProperty]">
                {{ r[label] }}
            </label>
           
        </div>
        <div v-if='greska' :id="idGreska" class="form-text" data-sb-feedback="name:required">{{greska}}</div>
    </div>
</template>

<script>
    export default{
        name:"RadioComponent",
        props:{
            radios:{
                type:Array,
                require:true
            },
            valueProperty:{
                type:String,
                require:true
            },
            name:{
                type:String,
                require:true
            },
            label:{
                type:String,
                require:true
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
            }
        },
        data(){
            return{
                localnaPromenljiva:0
            }
        },
        mounted(){
            this.localnaPromenljiva=this.value
        },
        watch:{
            localnaPromenljiva:function(){
                this.$emit("input",this.localnaPromenljiva)
            }
        }
    }
</script>