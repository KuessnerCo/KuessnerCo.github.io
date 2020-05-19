<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
      />
    </v-slide-x-transition>

    <v-spacer/>
    <div class="mx-3">
      <v-btn
        v-if=" !this.$vuetify.theme.dark"
        small
        fab
        @click="darkMode"
      >
        <v-icon color="black">mdi-moon-waxing-crescent</v-icon>
      </v-btn>
      <v-btn
        v-else
        small
        fab
        @click="darkMode"
      >
        <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
      </v-btn>
    </div>

    <social-media/>

    <base-btn
      class="ml-3"
      large
      href="https://store.vuetifyjs.com/product/freelancer-theme-free?ref=freelancer"
    >
      Download for Free

      <v-icon
        right
        small
      >
        mdi-open-in-new
      </v-icon>
    </base-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
      darkMode () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
  }
</script>
