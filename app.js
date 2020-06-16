const Result = document.getElementById('result');
const Result_Numbers = document.querySelectorAll('#result span');
const Bonus = document.querySelector('#luckyBonus');
const Numbers = document.querySelectorAll('.wrap span');
const sortBtn = document.getElementById("sort");

function handleSaveClick(){
  var randomNUM = Array(45).fill().map(function(e,index){
    return index + 1;
  });
  
  var suffle = [];
  while (randomNUM.length > 0){
    var suffleNum = randomNUM.splice(Math.floor(Math.random() * randomNUM.length),1)[0];
    suffle.push(suffleNum);
  }
  
  var bonusNum = suffle[suffle.length - 1 ];
  var luckyNums = suffle.slice(0,6).sort(function(p,c){return p - c;});
  
  
  
  for (var i = 0 ; i < luckyNums.length ; i += 1 ){
    Result_Numbers[i].innerText = luckyNums[i];
  }
    Bonus.innerText = bonusNum;
  
  for (var i = 0 ; i < Numbers.length ; i += 1 ){
    var j = Numbers[i].textContent
    if(j <= 10){
      Numbers[i].className = 'red';
    }else if(j <= 20){
      Numbers[i].className = 'orange';
    }else if(j <= 30){
      Numbers[i].className = 'yellow';
    }else if(j <= 40){
      Numbers[i].className = 'blue';
    }else{
      Numbers[i].className = 'green';
    }
  }
  console.log('당첨숫자들',luckyNums,'보너스' ,bonusNum);

}
if(sortBtn){
  sortBtn.addEventListener("click",handleSaveClick);
  
}

