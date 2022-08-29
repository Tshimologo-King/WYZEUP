<template>
  <div v-if="career">
    <div class="card">
      <img :src="career.careerURLImage" :alt="image" />
      <strong>{{ career.careerTitle }}</strong>
      <strong>{{ career.careerIndustry }}</strong>
      <p>{{ career.careerDescription }}</p>
      <p>{{ career.careerDayInLife }}</p>
      <p>{{ career.institutions }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["id"],
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