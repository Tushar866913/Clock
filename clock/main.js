
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let digital = document.getElementById("digital");

function clock() {
  let date = new Date();
  console.log(date);
  let hr = date.getHours();

  let mm = date.getMinutes();

  let ss = date.getSeconds();
  let hrdeg = hr * 30 + mm * 0.5;
  let mmdeg = mm * 6 + ss * 0.083;
  let secdeg = ss * 6;
  console.log(hr, mm, ss);
  hour.style.transform = `rotate(${hrdeg}deg)`;
  minute.style.transform = `rotate(${mmdeg}deg)`;
  second.style.transform = `rotate(${secdeg}deg)`;
  digital.innerHTML = `${hr % 12 > 9 ? hr % 12 : "0" + (hr % 12)}:${
    mm > 9 ? mm : "0" + mm
  } ${hr > 12 ? "PM" : "AM"}`;
}
clock();
setInterval(clock, 1000);
