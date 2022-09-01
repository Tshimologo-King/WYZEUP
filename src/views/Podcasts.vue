<template>
  <h1>Listen In and Engage with the Pro's</h1>
  <div v-if="podcasts" id="podcasts">
    <div class="pod-Box">
      <div v-for="podcast in podcasts" :key="podcast.idPodcasts">
        <div class="card">
          <div class="content">
            <div class="front">
              <h4>{{ podcast.podcastTitle }}</h4>
              <p>{{ podcast.podcastLink }}</p>
            </div>
            <div class="back">
              <div class="infobox">
                <h4>{{ podcast.podTranscript }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading Podcasts...💯🕕</div>
</template>

<script>
import podcast from "@/components/podcast.vue";
export default {
  name: "podcasts",
  components: {
    podcast,
  },
  mounted() {
    this.$store.dispatch("getPodcasts");
  },
  computed: {
    podcasts() {
      return this.$store.state.podcasts;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>