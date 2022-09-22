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


//const btn = document.querySelector("#button-send");

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
  
        var btn = document.querySelector("#button-send");
      
      btn.click();

    e.preventDefault();

    var comparar = number;

    var input = document.querySelector("#input-palpite");
    var palpiteInput = input.value;

    var palpite = String(palpiteInput).split("").map((palpiteInput)=>{
        return Number(palpiteInput);
      });
    
    console.log(palpite);
    //console.log(number);
    //console.log(comparar);

    palpite1 = palpite[0];
    palpite2 = palpite[1];
    palpite3 = palpite[2];
    palpite4 = palpite[3];

    for (var i=0; i < number.length; i++){
        for (var j=0; j < number.length; j++){
            if((comparar[i] === palpite[j]) && (i === j)){
                acertos.push(1);
                
            }else if((comparar[i] === palpite[j]) && (i != j)){
                acertos.push(0);
                
            }
        }
    }

         

    if (acertos[0] === 1 && acertos[1] === 1 && acertos[2] === 1 && acertos[3] === 1){
        console.log("Você acertou");
    }else{
        acertos.sort((a, b) => b - a);
        let list = document.getElementById("list").innerHTML;
        list += "<li>" +palpite+ "|||" +acertos+ "</li>";
        document.getElementById("list").innerHTML = list;
        //var element = document.getElementById('element');
        //element.innerHTML = `${palpite}`;
        console.log(acertos);
        acertos = [];
    }
    }
    
});









