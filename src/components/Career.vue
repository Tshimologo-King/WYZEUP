<template>
  <router-link :to="{ name: 'career', params: { id: this.careers.idCareers } }">
    <div id="careerCards">
      <div class="card">
        <div class="content">
          <div class="front">
            <h4>{{ career.careerTitle }}</h4>
          </div>
          <div class="back">
            <img
              :src="career.careerURLImage"
              :alt="image"
              style="height: 200px; width: 250px"
            />
            <div class="infobox">
              <p>Title: {{ career.careerTitle }}</p>
              <p>Career Industry: {{ career.careerIndustry }}</p>
              <p>Career Description: {{ career.careerDescription }}</p>
              <p>
                Career Role & Responsibilities: {{ career.careerDayInLife }}
              </p>
              <p>Institutions offering courses: {{ career.institutions }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Career",
  props: ["career"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

#careerCards {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background-color: lightblue;
  overflow: hidden;
}

.card {
  width: 500px;
  height: 500px;
  perspective: 500px;
  margin-inline: auto;
  margin: 10px;
  padding: 20px;
  margin-left: 2rem;
}

.content {
  max-width: 400px;
  height: 200px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: linear 1s;
  transform-style: preserve-3d;
}

.card:hover .content {
  transform: rotateY(180deg);
  transition: linear 1s;
  height: 500px;
}
.infobox {
  overflow-y: scroll;
  height: 270px;
  padding: 10px;
}
.front h4 {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 24px;
  color: yellow;
}
.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  line-height: 25px;
  text-align: left;
  font-size: 14px;
  border-radius: 5px;
  backface-visibility: hidden;
  font-family: "Roboto Condensed", sans-serif;
}

.back {
  background: #000000;
  color: white;
  transform: rotateY(180deg);
  padding: 20px;
}
.back p {
  display: flex;
  flex-wrap: wrap;
  color: #ddff00;
  font-size: 15px;
}

::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 255, 42);
  background: linear-gradient(
    100deg,
    rgba(0, 255, 42, 1) 25%,
    rgba(249, 0, 0, 1) 50%,
    rgba(225, 0, 255, 1) 75%,
    rgba(0, 46, 240, 1) 100%
  );
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 255, 42);
  background: linear-gradient(
    100deg,
    rgba(0, 255, 42, 1) 25%,
    rgba(249, 0, 0, 1) 50%,
    rgba(225, 0, 255, 1) 75%,
    rgba(0, 46, 240, 1) 100%
  );
}
</style>
