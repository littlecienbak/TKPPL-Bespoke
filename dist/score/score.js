var scoreA = 0;
var scoreB = 0;
var tebakA= 0;
var tebakB =0;
//var harga1 = 12900;
//var harga2 = 50000;

//Slide 7 Makanan mewah slider
var slider_mewah_A = document.getElementById("mewah_slider_A");
var nilai_slider_mewah_A = document.getElementById("nilai_sliderMewah_A");

slider_mewah_A.oninput = function(){
    nilai_slider_mewah_A.innerHTML = slider_mewah_A.value;
}

var slider_mewah_B = document.getElementById("mewah_slider_B");
var nilai_slider_mewah_B = document.getElementById("nilai_sliderMewah_B");

slider_mewah_B.oninput = function(){
    nilai_slider_mewah_B.innerHTML = slider_mewah_B.value;
}
//-----


var slider_minuman_A = document.getElementById("minuman_slider_A");
var nilai_slider_minuman_A = document.getElementById("nilai_sliderMinuman_A");

slider_minuman_A.oninput = function(){
    nilai_slider_minuman_A.innerHTML = slider_minuman_A.value;
}

var slider_minuman_B = document.getElementById("minuman_slider_B");
var nilai_slider_minuman_B = document.getElementById("nilai_sliderMinuman_B");

slider_minuman_B.oninput = function(){
    nilai_slider_minuman_B.innerHTML = slider_minuman_B.value;
}


function submit(kode_hitungan, harga_item, tebakan_A, tebakan_B, nama_button, nama_text_harga) {
  if (kode_hitungan === 1) {
    var tebakanA = parseInt(document.getElementById(tebakan_A).value);
    var tebakanB = parseInt(document.getElementById(tebakan_B).value);
    var selisihA = Math.abs(tebakanA - harga_item);
    var selisihB = Math.abs(tebakanB - harga_item);

    scoreA+=selisihA
    scoreB+=selisihB
    document.getElementById(nama_text_harga).innerHTML = "Real Price : " + harga_item;
    document.getElementById(nama_text_harga).style.visibility = "visible";
    document.getElementById(nama_button).style.visibility = "hidden";
/*
    if (selisihA < selisihB) {
      scoreA += 1;
    } else if (selisihA > selisihB) {
      scoreB += 1;
    }
    
    var persenA = parseFloat(inputA / (inputA + inputB)) * 100;
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
  }
}
function submit(harga,perkiraan){
  if(tebakA==0 && perkiraan<harga){
    scoreA+=1
  }
  else if(tebakA==0 && perkiraan>harga){
    scoreA+=1
  }
  if(tebakB==0 && perkiraan<harga){
    scoreB+=1
  }
  else if(tebakB==0 && perkiraan>harga){
    scoreB+=1
  }
  console.log(scoreA);
  console.log(scoreB);
}




function tebak(team,coba) {
  if(team=="A")
  {
    if(coba == "rendah"){
      tebakA=0
    }
    else{
      tebakA=1
    }
  }
  else
  {
    if(coba == "rendah"){
      tebakB=0
    }
    else{
      tebakB=1
    }
  }
}