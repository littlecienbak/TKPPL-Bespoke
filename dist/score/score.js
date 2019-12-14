var listMakanan = ["Tango", "Indomie", "Aqua Galon", "Yakult", "Burrata E Datterini", "Tiramisu"]
var scoreA = [];
var scoreB = [];
var totalA = 0;
var totalB = 0;
var tebakA = 0;
var tebakB = 0;

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

  scoreA.push(selisihA)
  scoreB.push(selisihB)
  totalA += selisihA
  totalB += selisihB
  document.getElementById(nama_text_harga).innerHTML = "Real Price : " + harga_item;
  document.getElementById(nama_text_harga).style.visibility = "visible";
  document.getElementById(nama_button).style.visibility = "hidden";

}

function submitTebak(harga, perkiraan, lastpage,nama_text_harga,nama_button) {
  document.getElementById(nama_text_harga).innerHTML = "Real Price : " + harga;
  document.getElementById(nama_text_harga).style.visibility = "visible";
  nama_button.style.visibility = "hidden";
  var selisih = harga - perkiraan
  if (tebakA == 0 && perkiraan < harga) {
    scoreA.push(selisih)
    scoreB.push(0)
    totalA += Math.abs(selisih)
    console.log(totalA)
    console.log(totalB)
  }
  else if (tebakA == 1 && perkiraan > harga) {
    scoreA.push(selisih)
    scoreB.push(0)
    totalA += Math.abs(selisih)
    console.log(totalA)
    console.log(totalB)
  }
  if (tebakB == 0 && perkiraan < harga) {
    scoreB.push(selisih)
    scoreA.push(0)
    totalB += Math.abs(selisih)
    console.log(totalA)
    console.log(totalB)
  }
  else if (tebakB == 1 && perkiraan > harga) {
    scoreB.push(selisih)
    scoreA.push(0)
    totalB += Math.abs(selisih)
    console.log(totalA)
    console.log(totalB)
  }
  if (lastpage === true) {
    for (var i = 0; i < listMakanan.length; i++) {
      var tr1 = document.createElement("tr");
      tr1.innerHTML = "<td colspan=\"2\">" + listMakanan[i] + "</td>";
      document.getElementById("scoreboard").appendChild(tr1);
      var tr2 = document.createElement("tr");
      tr2.innerHTML = "<td>" + scoreA[i] + "</td>" + "<td>" + scoreB[i] + "</td>";
      document.getElementById("scoreboard").appendChild(tr2);
    }
    var tr3 = document.createElement("tr");
    tr3.innerHTML = "<td colspan=\"2\">" + "Total Meleset" + "</td>";
    document.getElementById("scoreboard").appendChild(tr3);
    var tr4 = document.createElement("tr");
    if(totalA > totalB)
    {
      tr4.innerHTML = "<td style='background-color: red;'>" + totalA + "</td>" + "<td  style='background-color: Green;'>" + totalB + "</td>";
    }
    else if(totalA<totalB)
    {
      tr4.innerHTML = "<td style='background-color: green;'>" + totalA + "</td>" + "<td  style='background-color: red;'>" + totalB + "</td>";
    }
    else
      tr4.innerHTML = "<td>" + totalA + "</td>" + "<td>" + totalB + "</td>";
    document.getElementById("scoreboard").appendChild(tr4);
  }
}

function tebak(team, coba, _this, buttonsebelah) {
  if (team == "A") {
    if (coba == "rendah") {
      _this.style.backgroundColor = "Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakA = 0
    }
    else {
      _this.style.backgroundColor = "Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakA = 1
    }
  } else {
    if (coba == "rendah") {
      _this.style.backgroundColor = "Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakB = 0
    }
    else {
      _this.style.backgroundColor = "Green";
      document.getElementById(buttonsebelah).style.backgroundColor = "white";
      tebakB = 1
    }
  }
}

// function submitTebakBesarKecil(harga_real, harga_perkiraan, pilihanA, pilihanB) {
//   var pilihan_playerA = getRadioButtonValue(pilihanA)
//   var pilihan_playerB = getRadioButtonValue(pilihanB)

//   if( (harga_real>harga_perkiraan && pilihanA=="rendah") || (harga_real<harga_perkiraan && pilihanA=="tinggi") ){
//     //tebakan salah
//     scoreA+= Math.abs(harga_real-harga_perkiraan)
//   }

//   if( (harga_real>harga_perkiraan && pilihanB=="rendah") || (harga_real<harga_perkiraan && pilihanB=="tinggi") ){
//     //tebakan salah
//     scoreB+= Math.abs(harga_real-harga_perkiraan)
//   }    
// }

// function getRadioButtonValue(rdButton) {
//   for (var i = 0, length = rdButton.length; i < length; i++) {
//   if (radios[i].checked) {
//       return radios[i].value;
//     }
//     break;
//   }
// }
