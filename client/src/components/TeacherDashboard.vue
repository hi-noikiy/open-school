<template>
  <div class="home">
    <h2>🌞 Good morning, {{ name }}.</h2>
    <div class="classes">
      <p><b>You are currently teaching the following classes:</b></p>
      <p><a href="#">Period 2 Literature</a></p>
      <p><a href="#">Period 5 Literature</a></p>
      <p><a href="#">Period 7 Literature</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherDashboard',
  data() {
    return {
      name: 'Felina',
    };
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
