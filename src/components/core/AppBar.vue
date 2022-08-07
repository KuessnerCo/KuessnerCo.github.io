<template>
  <v-app-bar
    width="100vw"
    v-scroll="onScroll"
    color="black"
    fixed
    style="opacity: 0.7"
    flat
  >
    <v-spacer></v-spacer>
    <social-media />

    <div class="mx-3 hidden-sm-and-down">
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="#D8EBF1" small @click="darkMode">
            Dark Mode<v-icon class="mx-2 mb-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" small color="#D8EBF1" @click="darkMode">
            Dark Mode<v-icon class="mx-2 mb-1" color="yellow"
              >mdi-white-balance-sunny</v-icon
            >
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "CoreAppBar",

  components: {
    SocialMedia: () => import("@/components/SocialMedia"),
  },

  data: () => ({
    showLogo: false,
    isScrolling: false,
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
