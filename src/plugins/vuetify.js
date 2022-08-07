import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0f1110",
        secondary: "#BFADA5",
        accent: "#D8EBF1",
        toolbarColorText: "#D8EBF1",
        info: "#5B5C79",
        appBar: "#FFFFFF",
      },
      dark: {
        primary: "#0f1110",
        secondary: "#3A3232",
        accent: "#545d5c",
        info: "#545d5c",
        appBar: "#AFAFAF",
      },
    },
  },
});
