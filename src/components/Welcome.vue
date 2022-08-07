<template>
  <section>
    <div>
      <div class="container">
        <canvas class="canvas"></canvas>
      </div>
    </div>

    <div
      class="font-weight-thin"
      style="position: absolute; z-index: 2; top: 8%; margin-left: 37%"
    >
      <span
        class="white--text"
        style="
          font-size: 3vw;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        "
        >Constantin Küssner <br />
      </span>
      <span
        style="font-size: 2vw"
        class="white--text low-Text d-flex justify-center"
        >Software Engineer</span
      >

      <div
        style="position: relative; margin-left: 48%; margin-top: 70%"
        class="scroll-downs align-content-md-end"
      >
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </div>
    <div v-if="!$vuetify.theme.dark" class="whiteBox"></div>
  </section>
</template>
<script>
export default {
  name: "Welcome",
  mounted() {
    const canvas = document.querySelector(".canvas");
    const text = document.querySelector(".text");
    const context = canvas.getContext("2d");

    function init() {
      requestAnimationFrame(() => {
        const ratio = window.devicePixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        context.scale(ratio, ratio);
      });
    }

    document.addEventListener("mousemove", (e) => {
      branch(e.clientX, e.clientY, e.clientX, e.clientY, Math.random() * 4);
    });

    document.addEventListener("touchmove", (e) => {
      branch(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.touches[0].clientX,
        e.touches[0].clientY,
        Math.random() * 8
      );
    });

    function branch(fromX, fromY, toX, toY, lineWidth) {
      const color = randomColor(true);
      function makeItMove(fromX, fromY, toX, toY, lineWidth) {
        requestAnimationFrame(() => {
          drawStroke(fromX, fromY, toX, toY, lineWidth, color);
          const newStroke = {
            fromX: toX,
            fromY: toY,
            toX: toX + 1 * (Math.random() > 0.5 ? lineWidth : 0 - lineWidth),
            toY: toY + 1 * (Math.random() > 0.5 ? lineWidth : 0 - lineWidth),
            lineWidth,
          };

          makeItMove(
            newStroke.fromX,
            newStroke.fromY,
            newStroke.toX,
            newStroke.toY,
            newStroke.lineWidth
          );
        });
      }

      makeItMove(fromX, fromY, toX, toY, lineWidth);
    }

    function randomColor(alpha) {
      return `rgba(${Math.random() * 255}, 0, ${Math.random() * 255}, ${
        alpha ? Math.random() * 0.2 : 1
      })`;
    }

    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    init();

    window.addEventListener("resize", () => {
      clearCanvas();
      init();
    });

    function drawStroke(fromX, fromY, toX, toY, lineWidth, color) {
      context.beginPath();
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.lineCap = "round";
      context.stroke();
    }
  },
};
</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.container {
  position: relative;
  margin: 0;
}

.canvas {
  cursor: pointer;
}

body {
  background: #0b1d2a;
}

.whiteBox {
  opacity: 0.8;
  width: 35vw;
  height: 15vh;
  position: absolute;
  top: 8%;
  left: 32%;
  background: #000000;
  border: 1px solid #fff;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
}

.low-Text {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.5rem;
}

.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid darkgray;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: darkgray;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
