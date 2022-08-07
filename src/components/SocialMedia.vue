<template>
  <div>
    <span
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
    >
      <v-btn
        text
        class="ma-2"
        color="#D8EBF1"
        @click="openLink(item.link)"
        :small="!large"
        >{{ item.name }}
        <v-icon class="mx-2 mb-2" v-text="item.icon" />
      </v-btn>
    </span>
    <v-btn
      :small="!large"
      text
      class="ma-2 hidden-sm-and-down"
      color="#D8EBF1"
      @click="showNumber = true"
    >
      Phone
      <v-icon class="mx-2 mb-2">mdi-phone</v-icon>
    </v-btn>
    <v-dialog style="z-index: 2348" v-model="showNumber" width="500">
      <v-card outlined height="200">
        <div class="d-flex justify-center">
          <v-icon size="60px" class="mt-2"> mdi-phone </v-icon>
        </div>
        <div class="text-center mt-4 display-1 font-weight-thin">
          +49 174 8931 116
        </div>
        <div class="d-flex justify-center mt-4">
          <v-btn
            outlined
            tile
            class="justify-center text-none"
            @click="showNumber = false"
            >Close</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        name: "Stackoverflow",
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.com/users/11259040/ckuessner",
      },
      {
        name: "LinkedIn",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/constantin-k%C3%BCssner/",
      },
    ],
    showNumber: false,
  }),
  methods: {
    openLink(link) {
      window.open(link);
    },
  },
};
</script>
