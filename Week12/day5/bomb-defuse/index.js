const globals = {
  time: 0,
  interval: null,
  intervalUntilBlow: 10000,
  timeout: null,
  ms: 10,
};

function updateTimer() {
  globals.time += globals.ms;
  let h1 = document.getElementById("timer");
  h1.textContent = globals.time;
  let h2 = document.getElementById('untilblow');
  h2.textContent = globals.intervalUntilBlow -+ globals.time;
  if (globals.time == 10000) {
    clearInterval(globals.interval);
    let h1 = document.getElementById("timer");
    h1.textContent = "A Bomba felrobbant";
  }
}

document.getElementById("startTimer").addEventListener("click", () => {
  globals.time = 0;
  globals.interval = setInterval(updateTimer, globals.ms);
  
});

document.getElementById("endTimer").addEventListener("click", () => {
  clearInterval(globals.interval);
  globals.interval = null;
  let h1 = document.getElementById("timer");
  h1.textContent = "HATÁSTALANÍTVA";
});