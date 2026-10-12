// Event starts 28 Oct 2026, 15:00 in Denmark (CET, UTC+1)
(function () {
  var target = new Date("2026-10-28T15:00:00+01:00").getTime();
  var box = document.getElementById("count");
  var ids = {
    d: document.getElementById("d"),
    h: document.getElementById("h"),
    m: document.getElementById("m"),
    s: document.getElementById("s"),
  };
  function pad(n) {
    return String(n).padStart(2, "0");
  }
  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    var s = Math.floor(diff / 1000);
    ids.d.textContent = pad(Math.floor(s / 86400));
    ids.h.textContent = pad(Math.floor((s % 86400) / 3600));
    ids.m.textContent = pad(Math.floor((s % 3600) / 60));
    ids.s.textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);
})();

// Ambient flying themed icons
(function () {
  var layer = document.querySelector(".flyers");
  if (!layer) return;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  var ICONS = [
    "🎃",
    "👻",
    "🦇",
    "🕷️",
    "💀",
    "🍬",
    "🕸️",
    "🌙",
    "🦴",
    "🧡",
  ];
  var COUNT = 7;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  var vw = window.innerWidth;
  var vh = window.innerHeight;

  for (var i = 0; i < COUNT; i++) {
    var el = document.createElement("span");
    el.className = "flyer";
    el.setAttribute("aria-hidden", "true");
    el.textContent = ICONS[i % ICONS.length];

    var fromLeft = Math.random() < 0.5;
    var x0 = fromLeft ? -80 : vw + 80;
    var x1 = fromLeft ? vw + 80 : -80;
    var y0 = rand(0.05, 0.95) * vh;
    var y1 = rand(0.05, 0.95) * vh;

    el.style.setProperty("--x0", x0.toFixed(0) + "px");
    el.style.setProperty("--y0", y0.toFixed(0) + "px");
    el.style.setProperty("--x1", x1.toFixed(0) + "px");
    el.style.setProperty("--y1", y1.toFixed(0) + "px");
    el.style.setProperty("--r0", rand(-18, 18).toFixed(0) + "deg");
    el.style.setProperty("--r1", rand(-18, 18).toFixed(0) + "deg");
    el.style.setProperty("--size", rand(14, 28).toFixed(0) + "px");
    el.style.setProperty("--dur", rand(30, 55).toFixed(1) + "s");
    // Negative delay so the icons are already mid-flight on load.
    el.style.setProperty("--delay", (-rand(0, 55)).toFixed(1) + "s");
    el.style.setProperty("--o", rand(0.12, 0.3).toFixed(2));

    layer.appendChild(el);
  }
})();

