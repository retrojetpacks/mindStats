// Roll Dice
function roll2d6(){
  var randDieA = Math.floor(Math.random()*6 + 1);
  var randDieB = Math.floor(Math.random()*6 + 1);
  return [randDieA, randDieB, randDieA + randDieB];
}

// Discover active stat
function findStat(){
  const rads = document.querySelectorAll('input[name="stat-rad"]');
  const statVals = document.querySelectorAll('input[name="stat-val"]');

  var activeStat;
  var statVal;

  for (var i = 0; i<rads.length; i++ ){
    if (rads[i].checked){
      activeStat = rads[i].value;
      statVal = statVals[i].value;
    }
  }
  // alert(activeStat+statVal);
  return statVal;
}

//Draw correct dice and rotate/translate them
function drawDice(da, db){
  var randX1 = Math.random() * 50 + 20;
  var randY1 = Math.random() * 100 + 10;
  var randDeg1 = Math.random()*360;

  var randX2 = Math.random() * 80 + 120;
  var randY2 = Math.random() * 100 + 30;
  var randDeg2 = Math.random()*360;

  if (randX2 < randX1 + 300){
    if (Math.abs(randY1-randY2) < 300){
      randX2 += 100;
    }
  }


  var dieA = document.getElementById('die-A').src='images/d-'+da+'.png';
  var dieA = document.getElementById('die-A').style.left=randX1+'px';
  var dieA = document.getElementById('die-A').style.top=randY1+'px';
  var dieA = document.getElementById('die-A').style.transform='rotate('+randDeg1+'deg)';

  var dieB = document.getElementById('die-B').src='images/d-'+db+'.png';
  var dieB = document.getElementById('die-B').style.left=randX2+'px';
  var dieB = document.getElementById('die-B').style.top=randY2+'px';
  var dieB = document.getElementById('die-B').style.transform='rotate('+randDeg2+'deg)';

}



function rollDice(){
  var values = roll2d6();
  const da = values[0];
  const db = values[1];
  const diceSum = values[2];

  // Display dice
  drawDice(da, db);

  const statVal = findStat();

  if (diceSum >= statVal){
    document.querySelector('.check-result').innerHTML = 'Check passed!'

  } else {
    document.querySelector('.check-result').innerHTML = 'Check failed!'
  }
}

rollDice();
