<template>
  <section id="get-in-touch" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="pa-5" cols="12" md="6">
        <base-bubble-1
          style="
            position: relative;
            left: 22%;
            transform: rotate(180deg) translateX(25%);
          "
        />
        <v-row>
          <span
            class="my-n4 d-flex justify-center mx-auto"
            style="
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              font-size: 3rem;
            "
          >
            Kontakt
          </span>
        </v-row>
        <v-row>
          <v-col>
            <div class="d-flex justify-center">
              <div class="card">
                <div class="card-image"></div>

                <div
                  class="card-text"
                  style="position: relative; bottom: 150px"
                >
                  <div class="d-flex justify-center">
                    <v-avatar size="180"
                      ><img
                        height="20"
                        :src="require(`@/assets/constantin_pic11.jpg`)"
                        alt="Constantin"
                    /></v-avatar>
                  </div>
                  <span
                    style="
                      color: black;
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                      font-size: 1.7rem;
                    "
                    class="mt-5 d-flex justify-center"
                    >Constantin Küssner</span
                  >
                  <hr class="mt-5" />
                  <div class="mt-12">
                    <div
                      style="
                        font-family: -apple-system, BlinkMacSystemFont,
                          sans-serif;
                        font-size: 1.4rem;
                        color: black;
                      "
                    >
                      <div class="my-2">
                        <v-icon color="cyan" class="mr-2 hidden-md-and-down"
                          >mdi-email-outline</v-icon
                        >
                        constantin.kuessner@gmx.de
                      </div>
                      <div class="my-2">
                        <v-icon color="cyan" class="mr-2"
                          >mdi-phone-outline</v-icon
                        >
                        +49 174 893 1116
                      </div>
                      <div class="my-2">
                        <v-icon color="cyan" class="mr-2"
                          >mdi-crosshairs-gps</v-icon
                        >
                        Epplestraße 19b, <br />
                        <span class="ml-10"> 70597 Degerloch</span>
                      </div>
                      <div style="position: absolute; top: 500px; left: 320px">
                        <v-img
                          @click="openGoogleMaps"
                          style="width: 20px; cursor: pointer"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png"
                        ></v-img>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-center card-stats"
                  style="align-items: center"
                >
                  <v-btn
                    style="
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                    "
                    color="cyan"
                    rounded
                    @click="openGetInTouch"
                    class="text-capitalize white--text"
                  >
                    Kontakt<v-icon right>mdi-email-send-outline</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          height="100%"
        />
      </v-col>
    </v-row>
    <v-dialog width="600px" v-model="googleMapsDialog">
      <v-toolbar dark
        ><div class="display-1 mx-auto">Google Maps</div>

        <v-icon @click="googleMapsDialog = false">mdi-close</v-icon></v-toolbar
      >
      <v-card tile width="600px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.810596893758!2d9.168403116262871!3d48.74731471647422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dcad64a6d8af%3A0xefbc0f012dfa4865!2sEpplestra%C3%9Fe%2019B%2C%2070597%20Stuttgart!5e0!3m2!1sde!2sde!4v1590866961679!5m2!1sde!2sde"
          width="600"
          height="545"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe></v-card
    ></v-dialog>
    <v-dialog width="550px" v-model="getInTouch">
      <v-toolbar tile dark>
        <div
          style="font-family: -apple-system, BlinkMacSystemFont, sans-serif"
          class="display-1 mx-auto"
        >
          Kontakt
        </div>
        <v-icon @click="getInTouch = false">mdi-close</v-icon>
      </v-toolbar>
      <v-card color="primary" outlined width="550px">
        <v-card-text class="mt-12">
          <div class="d-flex justify-center"></div>

          <v-sheet color="transparent" max-width="500">
            <v-form v-model="valid">
              <v-text-field
                outlined
                :rules="nameRule"
                required
                v-model="name"
                color="info"
                label="Name"
                solo
                flat
              />

              <v-text-field
                outlined
                :rules="emailRule"
                required
                v-model="email"
                color="info"
                label="E-Mail"
                solo
                flat
              />

              <v-text-field
                outlined
                v-model="subject"
                color="info"
                label="Betreff"
                solo
                flat
              />

              <v-textarea
                outlined
                :rules="nameRule"
                required
                v-model="message"
                label="Nachricht"
                solo
                flat
              />
              <v-card-actions class="d-flex justify-center">
                <v-btn v-if="!valid" color="white" outlined tile disabled
                  >Send<v-icon color="white" class="mb-1" right
                    >mdi-email-outline</v-icon
                  ></v-btn
                >
                <v-btn
                  v-else
                  color="white"
                  outlined
                  tile
                  @click="send(name, email, subject, message)"
                  >Send<v-icon color="white" class="mb-1" right
                    >mdi-email-outline</v-icon
                  >
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div>
      <v-slide-x-reverse-transition>
        <v-alert
          class="emailPosition"
          v-model="setAlert"
          dismissible
          color="cyan"
          pa
          border="left"
          elevation="2"
          colored-border
          icon="mdi-email-check-outline"
        >
          E-Mail was sent successfully!
        </v-alert>
      </v-slide-x-reverse-transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetInTouch",
  components: {},
  data() {
    return {
      getInTouch: false,
      setAlert: false,
      googleMapsDialog: false,
      loading: false,
      valid: false,
      name: "",
      subject: "",
      email: "",
      message: "",
      nameRule: [(v) => !!v || "Field can not be empty"],
      emailRule: [
        (v) => !!v || "Password can not be empty",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  methods: {
    send(name, email, subject, message) {
      this.loading = true;
      Email.send({
        Host: "smtp.gmail.com",
        Username: "petersmtp2@gmail.com",
        Password: "smtpisfun123",
        To: "constantin.kuessner@gmail.com",
        From: email,
        Subject: subject,
        Body: message,
      });
      this.getInTouch = false;
      setTimeout(this.showAlert, 800);
      this.loading = false;
    },
    openGetInTouch() {
      this.getInTouch = true;
    },
    showAlert() {
      this.setAlert = true;
      setTimeout(this.setAlertFalse, 3500);
    },
    setAlertFalse() {
      this.setAlert = false;
    },
    openGoogleMaps() {
      this.googleMapsDialog = true;
    },
  },
};
</script>

<style scoped>
.font-sizerino {
  font-size: 1.4rem;
}
.emailPosition {
  width: 450px;
  position: fixed;
  top: 10%;
  right: 1%;
}
.card {
  display: grid;
  width: 390px;
  grid-template-columns: 390px;
  grid-template-rows: 250px 350px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background-color: gainsboro;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto, serif;

  transition: 0.5s ease;
  margin: 100px;
}
.card-image {
  grid-area: image;
  background-image: url("../assets/colors.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.card-text {
  grid-area: text;
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
  background: silver;
}

.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
html,
body {
  height: 100%;
}
</style>
