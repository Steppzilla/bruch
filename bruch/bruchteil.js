
//bruchbild(1,3,  $("#BruchBild"));
function bruchbild(zähler,nenner, dort){
  for(z=1;z<100;z++){
    dort.parent().children().eq(z).hide();
  }

  var radius  = 50;

  var u = 150;
  var bruch1= 150/nenner;
  var restEnde= 0;
  var restAnfang= 0;


    var kommazahl = zähler/nenner;

  //  dort.parent().children().hide();
    dort.show(); //erstes Element muss drin bleiben

    //var hier = dort.parent().chidren().eq(i);
    bruchteilebauen(nenner,dort);
  //behälter leeren, nur 1 kreis beibehalten



  for(i=0;i<nenner;i++){              //blau färben, vor-Einteilung /Stückelung
    restAnfang = i*bruch1;
    restEnde=150-bruch1-restAnfang;

    var a="0," + restAnfang + " , " + bruch1 + " ,0";

    dort.find(".teil").eq(i).css("stroke-dasharray",a);
  //  dort.css("background-color","green");

    if(i%2==0){
      dort.find(".teil").eq(i).css("stroke","steelblue");
    }else{
      dort.find(".teil").eq(i).css("stroke"," #3366ff");
    }
  }


  for(i=0;i<(kommazahl-1);i++){   // Vielfache klonen. automatisch schon richtige Einteilung

    dort.clone().appendTo(dort.parent()); //nur den Inhalt/Kreis kopieren in die box
  }


  for(f=0;f<zähler;f++){      //rot färben //muss unterschieden werden für größer 1
    if(f%2==0){
      dort.find(".teil").eq(f).css("stroke","#b30000");
      if(f>=nenner){
        dort.next().find(".teil").eq(f-nenner).css("stroke","#b30000");
      }
    }else{
      dort.find(".teil").eq(f).css("stroke","#cc0000");
      if(f>=nenner){

        dort.next().find(".teil").eq(f-nenner).css("stroke","#cc0000");
      }
    }
    //größere zähler:

  }
}
function bruchteilebauen(nenner,dort){
//  var circle = '<circle class="teil" cx="55"  cy="55"  r="24" stroke-width="48" stroke-dasharray="0,0,0,0" />';
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

    dort.append(circle);
  }

}
