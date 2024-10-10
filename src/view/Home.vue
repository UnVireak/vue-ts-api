
<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from "../stores/storeData";

export default defineComponent({
  name: "Dashboard",
  data(){
    return{
      data:[]
    }
  },
  async mounted() {
    const admin = useStore();
    await admin.getHistory();
    this.data = admin.listHistory;

    //ti2
    useStore().getHistory()
    this.data = useStore().listHistory
  },
})
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <Center style="margin: 20px 0px ">
    <h2>Display {{data.length}} rows</h2>
  </Center>
  
  <!-- <table id="customers">
    <tr>
      <th>ID</th>
      <th>Question</th>
      <th>Image</th>
    </tr>
    <tr v-for="item in data">
      <td>{{item.id}}</td>
      <td>{{item.question}}</td>
      <td>
        <img :src="item.image" alt="">
      </td>
    </tr>
  </table> -->
  <div class="table-container">
    <table class="table styled-table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Questions</th>
          <th scope="col">Images</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.question }}</td>
          <td> <img :src="item.image" alt="Image" style="width: 100px; height: auto;" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
img{
  width: 10%;
  height: 10%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #000000;}

#customers tr:hover {background-color: #020202;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
h2{
  

}
.table-container {
  display: flex;
  justify-content: center; /* Center the table container */
}

.styled-table {
  width: 60%; /* Set table width to 60% of the container */
  border-collapse: collapse;
  padding: 10px;
  border: 1px solid #ddd;
}

.styled-table th,
.styled-table td {
  padding: 15px;
  text-align: left;
}

.styled-table th {
  background-color: #343a40;
  color: #fff;
}

.styled-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.styled-table img {
  width: 100px;
  height: auto;
  border-radius: 5px;
}
</style>