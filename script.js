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
