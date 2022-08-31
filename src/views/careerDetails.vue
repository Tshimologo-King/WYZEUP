<template>
  <div v-if="career">
    <div class="card">
      <img :src="career.careerURLImage" :alt="image" />
      <strong>Career Title: {{ career.careerTitle }}</strong>
      <strong>Career Industry: {{ career.careerIndustry }}</strong>
      <p>Career Description: {{ career.careerDescription }}</p>
      <p>Career Role & Responsibilities: {{ career.careerDayInLife }}</p>
      <p>Institutions offering courses: {{ career.institutions }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["idCareers"],
  computed: {
    career() {
      return store.state.career;
    },
  },
  mounted() {
    fetch("https://wyze-up.herokuapp.com/Careers/" + this.id)
    .then((res) => res.json())
    .then((data) => (this.career = data))
    .catch((err) => console.log(err.message));
  },
};
</script>