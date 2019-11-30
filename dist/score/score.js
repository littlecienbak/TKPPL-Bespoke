var scoreA = 0;
var scoreB = 0;
var harga1 = 12900;
var harga2 = 50000;


var slider_mewah1 = document.getElementById("slider_mewah_A");
var number1 = document.getElementById("slider_mewah_value_A");

slider_mewah1.oninput = function(){
  number1.innerHTML = slider_mewah1.value;
}

var slider_mewah = document.getElementById("slider_mewah_B");
var number = document.getElementById("slider_mewah_value_B");

slider_mewah.oninput = function(){
    number.innerHTML = slider_mewah.value;
}



var minumA = document.getElementById("minumA");
var nilaiMinumA = document.getElementById("nilaiMinumA");

minumA.oninput = function(){
    nilaiMinumA.innerHTML = minumA.value;
}

var minumB = document.getElementById("minumB");
var nilaiMinumB = document.getElementById("nilaiMinumB");

minumB.oninput = function(){
    nilaiMinumB.innerHTML = minumB.value;
}


function submit(i, harga, input1, input2,j) {
  if (i === 1) {
    var inputA = parseInt(document.getElementById(input1).value);
    var inputB = parseInt(document.getElementById(input2).value);
    var selisihA = Math.abs(inputA - harga);
    var selisihB = Math.abs(inputB - harga);

    if (selisihA < selisihB) {
      scoreA += 1;
    } else if (selisihA > selisihB) {
      scoreB += 1;
    }
    
/*    var persenA = parseFloat(inputA / (inputA + inputB)) * 100;
    var persenB = parseFloat(inputB / (inputA + inputB)) * 100;

    document.getElementById("scoreA").innerHTML = scoreA;
    document.getElementById("scoreB").innerHTML = scoreB;
    document.getElementById("progress1A").innerHTML = persenA.toFixed(2);
    document.getElementById("progress1B").innerHTML = persenB.toFixed(2);

    document.getElementById("progress1A").style.width =
      persenA.toString() + "%";
    document.getElementById("progress1B").style.width =
      persenB.toString() + "%";
    document.getElementById("progress1A").style.visibility = "visible";
    document.getElementById("progress1B").style.visibility = "visible";
*/
    if(j===1)
    {
    document.getElementById("price1").innerHTML = "Real Price : " + harga;
    document.getElementById("price1").style.visibility = "visible";
    document.getElementById("button1").style.visibility = "hidden";
    }
    else if(j===2)
    {
        document.getElementById("price2").innerHTML = "Real Price : " + harga;
        document.getElementById("price2").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "hidden";
    }
    else if(j===3)
    {
        document.getElementById("price3").innerHTML = "Real Price : " + harga;
        document.getElementById("price3").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "hidden";
    }
  }
}