<template>
  <v-footer color="black" height="88" class="hidden-sm-and-down justify-center">
    <social-media class="hidden-sm-and-down" large />
  </v-footer>
</template>

<script>
export default {
  name: "CoreFooter",

  components: {
    SocialMedia: () => import("@/components/SocialMedia"),
  },
};
</script>
