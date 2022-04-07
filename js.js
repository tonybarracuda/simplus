function sum(){
  var s1 = document.getElementById("litersFilled").valueAsNumber;
  var s2 = document.getElementById("estLaps").valueAsNumber;
  var s3 = s1 / s2; //one lap consumption
  var raceDistance = parseInt(document.getElementById("raceDistanceMin").value);
  var raceMin = parseInt(document.getElementById("Min").value);
  var raceSec = parseInt(document.getElementById("Sec").value);
  var howManyLaps = (raceDistance * 60) / ((raceMin * 60) + raceSec);
  var howManyLapsRounded = howManyLaps.toFixed(1);
  var weNeed = howManyLaps * s3 + 1;
  var rez = document.getElementById("rez").innerText = 'За время гонки вы успеете сделать ' + howManyLapsRounded + ' боевых кругов';
  // console.log(`${s3} liters per one lap`);
  var rez2 = document.getElementById("rez2").innerText = 'Вам потребуется ' + weNeed.toFixed(1) + ' литров топлива с учетом запаса в 1л на всякий случай';
}
document.getElementById("goL").onclick = function() {
  sum();
}