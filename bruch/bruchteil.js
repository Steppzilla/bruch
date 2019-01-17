
//bruchbild(1,3,  $("#BruchBild"));
function bruchbild(zähler,nenner, dort){
  var radius  = 50;
  var u = 150;
  var bruch1= 150/nenner;
  var restEnde= 0;
  var restAnfang= 0;
  var kommazahl = zähler/nenner;
  dort.empty();
  $("#BruchBild").clone().appendTo(dort);
  $(".bilderFeld").children().find("#BruchBild").removeAttr("id"); //wichtig! sonst kaputte Klone

//  dort.children().first().show(); //erstes Element muss drin bleiben
  dort.children().first().css("opacity","1");
  //var hier = dort.parent().chidren().eq(i);
  bruchteilebauen(nenner,dort);
  //behälter leeren, nur 1 kreis beibehalten



  for(i=0;i<nenner;i++){              //blau färben, vor-Einteilung /Stückelung
    restAnfang = i*bruch1;
    restEnde=150-bruch1-restAnfang;

    var a="0," + restAnfang + " , " + bruch1 + " ,0";

    dort.children().first().find(".teil").eq(i).css("stroke-dasharray",a);
  //  dort.css("background-color","green");

    if(i%2==0){
      dort.children().first().find(".teil").eq(i).css("stroke","steelblue");
    }else{
      dort.children().first().find(".teil").eq(i).css("stroke"," #3366ff");
    }
  }


  for(i=1;i<(kommazahl);i++){   // Vielfache klonen. automatisch schon richtige Einteilung

    dort.children().first().clone().appendTo(dort.children().first().parent()); //nur den Inhalt/Kreis kopieren in die box
  }


  for(f=0;f<zähler;f++){      //rot färben //muss unterschieden werden für größer 1
    if(f%2==0){
      dort.children().first().find(".teil").eq(f).css("stroke","#b30000");
      if(f>=nenner){
        dort.children().first().next().find(".teil").eq(f-nenner).css("stroke","#b30000");
      }
    }else{
      dort.children().first().find(".teil").eq(f).css("stroke","#cc0000");
      if(f>=nenner){

        dort.children().first().next().find(".teil").eq(f-nenner).css("stroke","#cc0000");
      }
    }
    //größere zähler:

  }
}
function bruchteilebauen(nenner,dort){
  //alert(nenner + "   " + dort);
  for(j=0;j<nenner;j++){
    var svgNS = "http://www.w3.org/2000/svg";

    var circle = document.createElementNS(svgNS,"circle");
    circle.setAttributeNS(null, "class","teil");
    circle.setAttributeNS(null, "cx","55");
    circle.setAttributeNS(null, "cy","55");
    circle.setAttributeNS(null, "r","24");
    circle.setAttributeNS(null, "stroke-width","48");
    circle.setAttributeNS(null, "stroke-dasharray","0,0,0,0");

    dort.children().first().append(circle);
  }

}
