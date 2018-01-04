<template>
  <div class="home">
    <h2>🌞 Good morning, {{ name }}.</h2>
    <div class="classes">
      <p><b>You are currently teaching the following classes:</b></p>
      <p v-for="oneClass in classes">{{ oneClass }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TeacherDashboard',
  data() {
    return {
      name: 'Felina',
      classes: [],
    };
  },
  created() {
    axios.get('api/teachers')
    .then((res) => {
      console.log(res.data);
      this.classes = res.data[0].classes;
    })
    .catch((e) => {
      console.error(e);
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
