// setInterval(() => {

// let hours = document.getElementById('clock-hours');
// let minutes = document.getElementById('clock-minutes');
// let seconds = document.getElementById('clock-seconds');
// let ampm = document.getElementById('clock-ampm');

// let hh = document.getElementById('hh');
// let mm = document.getElementById('mm');
// let ss = document.getElementById('ss');


// let hr_dot = document.querySelector('.hr_dot');
// let min_dot = document.querySelector('.min_dot');
// let sec_dot = document.querySelector('.sec_dot');


// let h = new Date().getHours();
// let m = new Date().getMinutes();
// let s = new Date().getSeconds();
// let am = h >= 12 ? "PM" : "AM";

// //Converting 24hrs to 12 hrs

// if(h > 12){
//     h = h - 12;

// }

// //add zero before single digit

// h = (h < 10) ? "0" + h : h;
// m = (m < 10) ? "0" + m : m;
// s = (s < 10) ? "0" + s : s;

// hours.innerHTML = h + "<br><span>Hrs</span>";
// minutes.innerHTML = m + "<br><span>Mins</span>";
// seconds.innerHTML = s + "<br><span>Secs</span>";
// ampm.innerHTML = am;


// hh.style.strokeDashoffset = 440 - (440 * h) / 12; //12hrs clock
// mm.style.strokeDashoffset = 440 - (440 * m) / 60; //60 min clock
// ss.style.strokeDashoffset = 440 - (440 * s) / 60; //60 sec clock



// hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360 /12 =30
// min_dot.style.transform = `rotate(${m * 6}deg)`; // 360 /12 =30
// sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360 /12 =30

// })

