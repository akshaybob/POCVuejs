<template>
<div>
<h1>User-list</h1>
<div>
<table border=4>
<tr>
<th>ID</th>
<th>Firstname</th>
<th>Lastname</th>
<th>EmailID</th>
</tr>
<tr v-for="emp in employees" v-bind:key="emp">
<td>{{emp.id}}</td>
<td>{{emp.firstName}}</td>
<td>{{emp.lastName}}</td>
<td>{{emp.EmailId}}</td>

</tr>
</table>
</div>
</div>
</template>


<script>
import axios from "axios";
export default {
    name : 'GetUser',
    data()
    {
        return {
            employees:[],

            FirstName : '',
            LastName : '',
        }
    },
    async mounted()
    {
        let result = await axios.get("http://localhost:3000/employees");
            console.log('result',result.data);
            this.employees=result.data;
            
    }
}

</script>
<style scoped>
h3{color: red;};



</style>