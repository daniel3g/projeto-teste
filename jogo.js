function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min) + min);
  }

randomNaumber = getRandomInt();

var acertos = [];
var number = String(randomNaumber).split("").map((randomNaumber)=>{
    return Number(randomNaumber);
  });

number1 = number[0];
number2 = number[1];
number3 = number[2];
number4 = number[3];

const btn = document.querySelector("#button-send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    var input = document.querySelector("#input-palpite");
    var palpiteInput = input.value;

    var palpite = String(palpiteInput).split("").map((palpiteInput)=>{
        return Number(palpiteInput);
      });
    
    //console.log(palpite);
    console.log(number);

    palpite1 = palpite[0];
    palpite2 = palpite[1];
    palpite3 = palpite[2];
    palpite4 = palpite[3];

    if(number1 === palpite1){
        //acertos.push(1);
        //number.splice(0, 1);
        //palpite.splice(0, 1);
    }

    if(number2 === palpite2){
       // acertos.push(1);
        //number.splice(1, 1);
        //palpite.splice(1, 1);
    }

    if(number3 === palpite3){
        //acertos.push(1);
        //number.splice(2, 1);
        //palpite.splice(2, 1);
    }

    if(number4 === palpite4){
        //acertos.push(1);
        //number.pop();
        //palpite.pop();
    }

    for (var i=0; i < number.length; i++){
        for (var j=0; j < number.length; j++){
            if((number[i] === palpite[j]) && (i === j)){
                acertos.push(1);
            }else if((number[i] === palpite[j]) && (i != j)){
                acertos.push(0);
            }
        }
    }

    if (acertos[0] === 1 && acertos[1] === 1 && acertos[2] === 1 && acertos[3] === 1){
        console.log("Você acertou");
    }else{
        console.log(acertos);
        acertos = [];
    }

    
});









