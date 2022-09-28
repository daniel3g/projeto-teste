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

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
  
        var btn = document.querySelector("#button-send");
      
        btn.click();

    e.preventDefault();

    
    var comparar = [];
    comparar[0] = number[0];
    comparar[1] = number[1];
    comparar[2] = number[2];
    comparar[3] = number[3];

    var input = document.querySelector("#input-palpite");
    var palpiteInput = input.value;
    document.getElementById('input-palpite').value='';


    var palpite = String(palpiteInput).split("").map((palpiteInput)=>{
        return Number(palpiteInput);
    });

    palpiteExibir = [palpite[0], palpite[1], palpite[2], palpite[3]];
    
    console.log(palpite);
    console.log(number);
    console.log(comparar);

    for (var i=0; i < number.length; i++){
        
            if(palpite[i] === comparar[i]){
                acertos.push(1);
                comparar[i] = -3; 
                palpite[i] = -4;          
            }         
    }

    for (var i=0; i < number.length; i++){
        for (var j=0; j < number.length; j++){
            if(palpite[i] === comparar[j]){
                acertos.push(0);
                comparar[j] = -2;
                palpite[i] = -1;  
            }
        }
    }

    

    comparar[0] = number[0];
    comparar[1] = number[1];
    comparar[2] = number[2];
    comparar[3] = number[3];

        if(acertos.length === 0){
            acertos = "-";
        }



    let list = document.getElementById("palpite").innerHTML; 
    let list2 = document.getElementById("dica").innerHTML;    

    if (acertos[0] === 1 && acertos[1] === 1 && acertos[2] === 1 && acertos[3] === 1){
        list += "<li>" +"Parabéns! Você acertou o número era: "+randomNaumber+"</li>";
        document.getElementById("palpite").innerHTML = list;
    }else{
        if(acertos != "-"){
        acertos.sort((a, b) => b - a);
        }
        list += "<li>" + palpiteExibir + "</li>";
        list2 += "<li>" + acertos + "</li>";
        document.getElementById("palpite").innerHTML = list;
        document.getElementById("dica").innerHTML = list2;
        console.log(acertos);
        acertos = [];
    }
    }
    
});