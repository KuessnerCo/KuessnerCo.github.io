<template>
  <section>
    <v-row>
      <v-col cols="12" md="2">
        <div class="card">
          <div class="card-image"></div>

          <div class="card-text" style="position: relative; bottom: 150px">
            <div>
              <v-avatar size="180"
                ><img
                  :src="require(`@/assets/constantin_pic.jpg`)"
                  alt="Constantin"
              /></v-avatar>
            </div>
            <div style="position: relative; top: 20px">
              <span class="date">4 days ago</span>
              <h2>Post One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
            </div>
          </div>
          <div class="card-stats">
            <v-icon color="#F48024" large class="mt-3"
              >mdi-stack-overflow</v-icon
            >

            <v-icon color="#0077B5" large class="mt-3">mdi-linkedin</v-icon>

            <v-icon color="black" large class="mt-3">mdi-phone</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>
<style scoped>
.card {
  display: grid;
  width: 400px;
  grid-template-columns: 400px;
  grid-template-rows: 300px 300px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto, serif;
  text-align: center;

  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;
}
.card-image {
  grid-area: image;
  background: url("https://images.assetsdelivery.com/compings_v2/mishoo/mishoo1305/mishoo130500005.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.card-text {
  grid-area: text;
  color: black;
  margin: 25px;
}
.card-text .date {
  color: rgb(255, 7, 110);
  font-size: 13px;
}
.card-text p {
  color: grey;
  font-size: 15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top: 0px;
  font-size: 28px;
}
.card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: lightgray;
}
.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
</style>
