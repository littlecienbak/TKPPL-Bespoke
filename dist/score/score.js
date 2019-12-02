var scoreA = 0;
var scoreB = 0;
var tebakA = 0;
var tebakB = 0;
//var harga1 = 12900;
//var harga2 = 50000;

//Untuk menampilkan nilai yang dipilih oleh slider masing-masing slide
var slider_snack_A = document.getElementById("snack_slider_A");
var nilai_slider_snack_A = document.getElementById("nilai_sliderSnack_A");

slider_snack_A.oninput = function () {
  nilai_slider_snack_A.innerHTML = slider_snack_A.value;
}

var slider_snack_B = document.getElementById("snack_slider_B");
var nilai_slider_snack_B = document.getElementById("nilai_sliderSnack_B");

slider_snack_B.oninput = function () {
  nilai_slider_snack_B.innerHTML = slider_snack_B.value;
}

var slider_mewah_A = document.getElementById("mewah_slider_A");
var nilai_slider_mewah_A = document.getElementById("nilai_sliderMewah_A");

slider_mewah_A.oninput = function () {
  nilai_slider_mewah_A.innerHTML = slider_mewah_A.value;
}

var slider_mewah_B = document.getElementById("mewah_slider_B");
var nilai_slider_mewah_B = document.getElementById("nilai_sliderMewah_B");

slider_mewah_B.oninput = function () {
  nilai_slider_mewah_B.innerHTML = slider_mewah_B.value;
}

var slider_minuman_A = document.getElementById("minuman_slider_A");
var nilai_slider_minuman_A = document.getElementById("nilai_sliderMinuman_A");

slider_minuman_A.oninput = function () {
  nilai_slider_minuman_A.innerHTML = slider_minuman_A.value;
}

var slider_minuman_B = document.getElementById("minuman_slider_B");
var nilai_slider_minuman_B = document.getElementById("nilai_sliderMinuman_B");

slider_minuman_B.oninput = function () {
  nilai_slider_minuman_B.innerHTML = slider_minuman_B.value;
}

//fungsi-fungsi perhitungan
function submitSlider(harga_item, tebakan_A, tebakan_B, nama_button, nama_text_harga) {
  var tebakanA = parseInt(document.getElementById(tebakan_A).value);
  var tebakanB = parseInt(document.getElementById(tebakan_B).value);
  var selisihA = Math.abs(tebakanA - harga_item);
  var selisihB = Math.abs(tebakanB - harga_item);

  scoreA += selisihA
  scoreB += selisihB
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

function submitTebak(harga, perkiraan) {
  if (tebakA == 0 && perkiraan < harga) {
    scoreA += 1
  }
  else if (tebakA == 1 && perkiraan > harga) {
    scoreA += 1
  }
  if (tebakB == 0 && perkiraan < harga) {
    scoreB += 1
  }
  else if (tebakB == 1 && perkiraan > harga) {
    scoreB += 1
  }
  console.log(scoreA);
  console.log(scoreB);
}

function tebak(team, coba,_this,buttonsebelah) {
  if (team == "A") {
    if (coba == "rendah") {
      _this.style.backgroundColor ="Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakA = 0
    }
    else {
      _this.style.backgroundColor ="Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakA = 1
    }
  }
  else {
    if (coba == "rendah") {
      _this.style.backgroundColor ="Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakB = 0
    }
    else {
      _this.style.backgroundColor ="Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakB = 1
    }
  }
}

function submitTebakBesarKecil(harga_real, harga_perkiraan, pilihanA, pilihanB) {
  var pilihan_playerA = getRadioButtonValue(pilihanA)
  var pilihan_playerB = getRadioButtonValue(pilihanB)

  if( (harga_real>harga_perkiraan && pilihanA=="rendah") || (harga_real<harga_perkiraan && pilihanA=="tinggi") ){
    //tebakan salah
    scoreA+= Math.abs(harga_real-harga_perkiraan)
  }

  if( (harga_real>harga_perkiraan && pilihanB=="rendah") || (harga_real<harga_perkiraan && pilihanB=="tinggi") ){
    //tebakan salah
    scoreB+= Math.abs(harga_real-harga_perkiraan)
  }    
}

function getRadioButtonValue(rdButton) {
  for (var i = 0, length = rdButton.length; i < length; i++) {
  if (radios[i].checked) {
      return radios[i].value;
    }
    break;
  }
}
