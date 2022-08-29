<template>
  <div v-if="career in careers" id="careers">
    <career v-for="career in careers" :key="career.id" :career="career" />
  </div>
  <div v-else>Loading Careers... 😊</div>
</template>

<script>
import store from "@/store";
import Career from "@/components/Career.vue";
export default {
  name: "Careers",
  components: {
    Career,
  },
  mounted() {
    this.$store.dispatch("getCareers");
  },
  computed: {
    careers() {
      return store.state.careers
    },
  },
};
</script>