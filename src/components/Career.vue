<template>
  <h1>Careers page</h1>
  <router-link :to="{ name: 'career', params: { id: idCareers } }">
    <div class="card">
      <img :src="career.careerURLImage" :alt="image" />
      <h4>{{ career.careerTitle }}</h4>
      <h4>{{ career.careerIndustry }}</h4>
      <h4>{{ career.careerDescription }}</h4>
      <h4>{{ career.careerDayInLife }}</h4>
      <h4>{{ career.institutions }}</h4>
      <h4></h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Career",
  // props: {
  //   career
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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