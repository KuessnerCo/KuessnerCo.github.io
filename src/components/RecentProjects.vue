<template>
  <div class="hidden-sm-and-down cursoerino">
    <div style="height: 200px">
      <span
        style="
          font-size: 300%;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        "
        class="text-big d-flex justify-center"
      >
        Recent Project
      </span>

      <span
        style="
          font-size: 200%;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        "
        class="mb-5 d-flex justify-center texte"
      >
        Bachelor-Thesis
      </span>

      <hr class="solid mx-auto" />
    </div>
    <section id="timeline">
      <div class="tl-item">
        <div
          class="tl-bg"
          style="
            width: 200%;
            background-image: url(https://audimediacenter-a.akamaihd.net/system/production/media/74946/images/ccd9645bde72d154ffe50f2673805209d04e44bb/A192887_full.jpg?1582501434);
          "
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Analyse</p>
        </div>

        <div class="tl-content">
          <h1>Bestimmung der Rahmenbedingungen</h1>
          <p class="text" style="font-size: 1vw">
            Zuerst mussten alle Fahrzeuge eines bestimmten Fahrzeugtyps mit
            festgelegten Fehlersymptomen untersucht werden. Die Frage hier war,
            in welchem Zeitraum und für welche Fehlersymptome die Fahrzeuge
            betrachtet werden sollen, um möglichst viele Daten für ein Machine
            Learning Modell zu erhalten.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style="
            width: 180%;
            background-image: url(https://www.business-angels.de/wp-content/uploads/2019/06/Fotolia_272071777_Subscription_Monthly_M.jpg);
          "
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Datensammlung</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Extrahieren der Daten</h1>
          <p style="font-size: 1vw">
            Da die Vermutung bestand, dass bestimmte Ausstattungskonfigurationen
            oder Kombinationen aus Austattungskonfigurationen eines Fahrzeuges
            für bestimmte Fehler verantwortlich waren, mussten nun zu möglichst
            vielen Fahrzeugen mit dem gleichen Symptom alle Konfigurationen
            gesammelt werden. So konnte später ermittelt werden, welche Teile
            der Konfiguration besonders häufig bei einzelnen Fehlern auftreten.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style="
            background-image: url(https://www.europeaninterest.eu/wp-content/uploads/2019/11/42271822770_09cee734c0_k.jpg);
          "
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Machine Learning</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Trainieren der Algorithmen</h1>
          <p style="font-size: 1vw">
            Nachdem verschiedene Algorithmen für ein Machine Learning Modell
            evaluiert wurden, konnten diese mit den Daten der Fehlersymptome und
            der Ausstattungskonfiguration eines Fahrzeuges gefüttert werden.
            Hierbei konnte eine Korrelation zwischen Fehlersymptomen und den im
            Auto verbauten Bauteilen nachgewiesen werden.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div
          class="tl-bg"
          style="
            background-image: url(https://media.itpro.co.uk/image/upload/v1570817625/itpro/2019/09/structured_data_shutterstock_652084264.jpg);
            transform: rotate(180deg);
          "
        ></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Prädiktion</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Fehlervorrausbestimmung</h1>
          <p style="font-size: 1vw">
            Mit diesen Ergebnissen konnten nun Fahrzeuge, welche sich noch nicht
            in Produktion befanden, bei denen allerdings schon die Austattung
            feststand, auf mögliche Fehler geprüft werden. So kann nun mit einer
            bestimmten Wahrscheinlichkeit bestimmt werden, welches Fahrzeug
            welchen Fehler haben wird und was dementsprechend bei der Produktion
            dieses Fahrzeuges zu beachten ist, damit dieser im Idealfall gar
            nicht erst Auftritt. Falls der Fehler dennoch auftreten sollte, so
            ist Dank der vorherigen Analyse bereits die Ursache und somit auch
            die Lösung des Problems bekannt und kann deutlich schneller behoben
            werden als zuvor.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "RecentProjects",
};
</script>
<style>
hr.solid {
  border-top: 2px solid cyan;
  width: 100px;
}
.texte {
  font-size: 1.5rem;
}

.text-big {
  font-size: 3rem;
}
body {
  font-family: "Source Sans Pro", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
}
#timeline {
  display: flex;
  background-color: #031625;
}
#timeline:hover .tl-item {
  width: 23.3333%;
}
.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 100vh;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
}
.tl-item:before,
.tl-item:after {
  transform: translate3d(0, 0, 0);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.tl-item:after {
  background: rgba(3, 22, 37, 0.85);
  opacity: 1;
  transition: opacity 0.5s ease;
}
.tl-item:before {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 75%
  );
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 0, 0) translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.tl-item:hover {
  width: 30% !important;
}
.tl-item:hover:after {
  opacity: 0;
}
.tl-item:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}
.tl-item:hover .tl-content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}
.tl-item:hover .tl-bg {
  filter: grayscale(0);
}
.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
}
.tl-content h1 {
  font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
  color: #1779cf;
  font-size: 1.44rem;
  font-weight: normal;
}
.tl-year {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;

  border-bottom: 1px solid #fff;
}
.tl-year p {
  font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 1.728vh;
  line-height: 0;
}
.tl-bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}

.cursoerino {
  cursor: pointer;
}
</style>
