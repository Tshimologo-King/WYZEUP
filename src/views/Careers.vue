<template>
  <h1>Find Your Career</h1>
  <div v-if="careers" id="careers">
    <!-- <career
      v-for="career in careers"
      :key="career.idCareers"
      :career="career"
    /> -->
    <div v-for="career in careers" :key="career.idCareers">
      <p>
        {{ career.careerTitle }}
      </p>
    </div>
  </div>
  <div v-else>Loading Careers... 😊</div>
</template>

<script>
// import store from "@/store";
import Career from "@/components/Career.vue";
export default {
  name: "careers",
  components: {
    Career,
  },
  mounted() {
    this.$store.dispatch("getCareers");
  },
  computed: {
    careers() {
      return this.$store.state.careers;
    },
  },
};
</script>
