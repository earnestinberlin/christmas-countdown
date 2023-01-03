particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const days = document.getElementById("days"),
  minutes = document.getElementById("minutes"),
  hours = document.getElementById("hours"),
  seconds = document.getElementById("seconds");
let xYear = 2023;
setInterval(() => {
  findDate();
}, 1000);

function findDate() {
  let currentTime = new Date(),
    christmasYear = currentTime.getFullYear();

  // getMonth() method returns the month (from 0 to 11)
  if (currentTime.getMonth() == 11 && currentTime.getDate() > 25) {
    christmasYear += 1;
  }

  let christmasTime = new Date(christmasYear, 11, 25);
  let dateDiff = Math.floor(christmasTime - currentTime);

  let DAYS = 0,
    HOURS = 0,
    MINUTES = 0,
    SECONDS = 0;

  if (
    currentTime.getMonth() != 11 ||
    (currentTime.getMonth() == 11 && currentTime.getDate() != 25)
  ) {
    DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    HOURS = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    SECONDS = Math.floor((dateDiff % (1000 * 60)) / 1000);
  }
  displayDate(
    setZero(DAYS),
    setZero(HOURS),
    setZero(MINUTES),
    setZero(SECONDS)
  );
}

function displayDate(d, h, m, s) {
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

function setZero(timeValue) {
  if (timeValue < 10) {
    timeValue = "0" + timeValue;
  }
  return timeValue;
}
