<template>
  <v-app>
    <core-app-bar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: "App",

  created() {
    this.$vuetify.theme.dark = true;
    window.addEventListener("beforeunload", this.handler);
  },

  components: {
    CoreAppBar: () => import("@/components/core/AppBar"),
    CoreFooter: () => import("@/components/core/Footer"),
    CoreView: () => import("@/components/core/View"),
  },
  methods: {
    handler: function handler(event) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "petersmtp2@gmail.com",
        Password: "smtpisfun123",
        To: "constantin.kuessner@gmail.com",
        From: "Uservisitor@gmx.de",
        Subject: "SEITE VERLASSEN",
        Body: "Ein Benutzer HAT DEINE SEITE VERLASSEN!",
      });
    },
  },
};
</script>
