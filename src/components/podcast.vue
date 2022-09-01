<template>
  <router-link :to="{ name: 'podcast', params: { id: this.podcasts.idPodcasts } }">
    <div id="pod-Cards">
      <div class="card">
        <div class="content">
          <div class="front">
            <h4>{{ podcast.podcastTitle }}</h4>
            <p>{{podcast.podcastLink}}</p>
          </div>
          <div class="back">
            <div class="infobox">
                <h4>{{podcast.podTranscript}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "Podcast",
        props: ["podcast"],
    };
</script>