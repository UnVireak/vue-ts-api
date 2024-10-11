<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from "../stores/storeData.ts";
export default defineComponent({
name: "Form",
  data(){
    return{
      getData:'',
      name: '',
      email: '',
      password: '',
      HTMLText:'<p>ReanAI PLC</p><br><p>Hi</p>',
      submitted: false,
    }
  },
  mounted() {
    const admin = useStore();
    this.getData = admin.data
  },
  methods:{
    submitForm() {
      this.submitted = true;
    },


    // clickMe(){
    //   if(this.getData == 'Hello'){
    //     this.getData = 'Hi'
    //   }else{
    //     this.getData = 'Hello'
    //   }
    // }
  }
})
</script>

<template>
  <div class="container">
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="exampleInputUsername">Username</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model="name" placeholder="Enter username">
<!--      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" @click="submitForm" class="btn btn-primary">Submit</button>
  </form> <br>

    <div v-if="submitted">
      <h3>Results:</h3> <br>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
<!--      <p>Password: {{ password }}</p>-->
    </div>

  </div>
</template>

<style scoped>
.container{
  margin-top: 10%;
  width: 50%;
}


</style>