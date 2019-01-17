
function additionsaufgabe(){
  var zählerA = rand(0,10);
  var nennerA = rand(1,10);
  var zählerB = rand(0,10);
  var nennerB = rand(1,10);

  var nennerLös = nennerA*nennerB;
  var zählerLös = zählerA*nennerB + zählerB*nennerA;

if(zählerA>nennerA){
  var speicher=zählerA;
  zählerA=nennerA;
  nennerA=speicher;
}

if(zählerB>nennerB){
  var speicher=zählerB;
  zählerB=nennerB;
  nennerB=speicher;
}
  //var aufgabenstring={
  //  zählerA: zählerA,
  //  nennerA: nennerA,
  //  zählerB: zählerB,
//    nennerB: nennerB,
//    zählerLös: zählerLös,
//    nennerLös: nennerLös,
//  }
  var aufgabenstring = [zählerA, nennerA, zählerB, nennerB, zählerLös, nennerLös];
  return aufgabenstring;
}

function aufgaben(){



}



function addieren(bruch1, bruch2){


}



function bruchvonAnzahl(bruch1, anzahl){

}

function erweitern(bruch, erweiterungszahl){

}


function bruch(a, b){
  var bruch = {
    zähler: a,
    nenner: b
  };
  return bruch;
}


var bay= bruch(5,99);

var icon1 ='<img class="images" src="https://img.icons8.com/wired/64/000000/plus-math.png">';
var icon2 = '<img class="images" src="https://img.icons8.com/wired/64/000000/minus-math.png">';
var icon3 = '<img class="images" src="https://img.icons8.com/wired/64/000000/multiply.png">';
var icon4 ='<img class="images" src="https://img.icons8.com/wired/64/000000/divide.png">';
var icon5 = '<img class="images" src="https://img.icons8.com/wired/64/000000/zoom-to-extents.png">';
var icon6 ='<img class="images" src="https://img.icons8.com/wired/64/000000/variation.png">';



var iconString = [icon1,icon2,icon3,icon4,icon5,icon6];



function rand (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
