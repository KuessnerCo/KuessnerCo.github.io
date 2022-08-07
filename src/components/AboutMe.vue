<template>
  <section id="about" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/bulby.jpg')" height="100%" />
      </v-col>
      <v-col class="pa-5" cols="12" md="6">
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <span
          style="
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 200%;
          "
          class="d-flex justify-center"
        >
          Über mich
        </span>

        <span
          style="
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 120%;
          "
          class="d-flex justify-center mb-5"
        >
          Durch mein abgeschlossenes Software Engineering Studium, sowie meine
          bisherige<br />
          Zeit bei Bosch, konnte ich bereits wertvolle Erfahrungen und
          praktische<br />
          Kenntnisse in der Softwareentwicklung sammeln. Ich bin sehr
          interessiert an <br />
          Frontend und UX lastigen Themen. Weiterhin finde ich Bereiche
          spannend, <br />
          die durch künstliche Intelligenz verbessert oder automatisiert werden
          können. <br />
          Ich bin überzeugt davon, dass die Softwareentwicklung ein Umfeld ist,
          <br />
          welches ständigem Wandel unterliegt. Der Einsatz von neuen und
          zukunftsweisenden<br />
          Technologien ist hier also besonders wichtig.
        </span>
        <span
          style="
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 200%;
          "
          class="d-flex justify-center"
        >
          Skills
        </span>

        <span
          style="
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 120%;
          "
          class="d-flex justify-center mb-5"
        >
          Ich konnte bereits viel Erfahrung im Bereich User Experience und
          der<br />
          Programmierung von visuell ansprechenden Web-Pages sammeln. Während
          meiner <br />Zeit bei Bosch konnte ich mich außerdem intensiv in
          Frontend lastige<br />
          Themen, wie das Framework VueJS (mit dem auch diese Website erstellt
          wurde :-)), <br />einarbeiten. Doch auch meine Programmierkenntnisse
          in Java habe ich seit Beginn<br />
          meines PreMasters deutlich verbessert. Des Weiteren hatte ich die
          Möglichkeit neue<br />
          Technologien, wie Docker oder die Software Deployment Pipeline
          Concourse, <br />kennenzulernen und anzuwenden.
        </span>
        <v-row>
          <v-col class="d-flex justify-center" md="12">
            <v-alert width="70%" outlined color="info">
              <v-row
                v-for="(skill, i) in skills"
                :key="i"
                style="color: darkgray"
              >
                <v-col cols="1"
                  ><v-img
                    class="ml-1"
                    min-width="20px"
                    width="30px"
                    :src="skill.icon"
                /></v-col>
                <v-col
                  style="
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                  "
                  class="mt-1 text-uppercase"
                  cols="6"
                  v-text="skill.name"
                />

                <v-col class="text-right" cols="5" v-text="`${skill.value}%`" />

                <v-progress-linear
                  :value="skill.value"
                  color="cyan"
                  height="10"
                />
              </v-row>
            </v-alert>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  class="mx-5"
                  outlined
                  download="Gesamtbewerbung_Constantin_Küssner.pdf"
                  :href="pdfLink"
                  fab
                  ><v-icon size="30px">mdi-file-pdf-outline</v-icon>
                </v-btn>
              </template>
              <span>Gesamtbewerbung</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  class="mx-5"
                  outlined
                  download=""
                  :href="pdfLink2"
                  fab
                  ><v-icon size="30px">mdi-file-account-outline</v-icon>
                </v-btn>
              </template>
              <span>Lebenslauf</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  class="mx-5"
                  outlined
                  download="Anschreiben_Constantin_Küssner.pdf"
                  :href="pdfLink3"
                  fab
                  ><v-icon size="30px">mdi-text</v-icon>
                </v-btn>
              </template>
              <span>Anschreiben</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="pdfLink4"
                  download="Zeugnisse_Constantin_Küssner.pdf"
                  v-on="on"
                  class="mx-5"
                  outlined
                  fab
                >
                  <v-icon size="30px">mdi-certificate-outline</v-icon>
                </v-btn>
              </template>
              <span>Zeugnisse</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  components: {},
  created() {
    this.login();
  },
  mounted() {},
  data: () => ({
    pdfLink: "",
    pdfLink2: "",
    pdfLink3: "",
    pdfLink4: "",

    skills: [
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        name: "VueJS",
        value: 85,
      },
      {
        icon: "https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png",
        name: "JavaScript",
        value: 75,
      },
      {
        icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
        name: "CSS",
        value: 80,
      },
      {
        icon: "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
        name: "Docker",
        value: 75,
      },
      {
        icon: "https://ertan-toker.de/wp-content/uploads/2018/04/spring-boot-project-logo-1-thegem-blog-default.png",
        name: "Spring-Boot",
        value: 70,
      },
      {
        icon: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programmiersprache-symbol-by-vexels.png",
        name: "Java",
        value: 65,
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1000px-Adobe_Illustrator_CC_icon.svg.png",
        name: "Machine Learning",
        value: 65,
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
        name: "Git",
        value: 75,
      },
    ],
  }),
  methods: {
    login() {
      this.send();
    },
    send() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "petersmtp2@gmail.com",
        Password: "smtpisfun123",
        To: "constantin.kuessner@gmail.com",
        From: "Uservisitor@gmx.de",
        Subject: "Jemand hat deine Seite besucht",
        Body: "Ein Benutzer ist da!",
      });
    },
  },
};
</script>
<style scoped></style>
