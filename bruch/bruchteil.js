










//bruchbild(1,3,  $("#BruchBild"));
function bruchbild(zähler,nenner, dort){
  var radius  = 50;

  var u = 150;
  var bruch1= 150/nenner;
  var restEnde= 0;
  var restAnfang= 0;

  for(i=0;i<nenner;i++){
    restAnfang = i*bruch1;
    restEnde=150-bruch1-restAnfang;

    var a="0," + restAnfang + " , " + bruch1 + " ,0";

    dort.find(".teil").eq(i).css("stroke-dasharray",a);

    if(i%2==0){
      dort.find(".teil").eq(i).css("stroke","steelblue");
    }else{
      dort.find(".teil").eq(i).css("stroke"," #3366ff");
    }
  }
  for(f=0;f<zähler;f++){
    if(f%2==0){
      dort.find(".teil").eq(f).css("stroke","#b30000");
    }else{
      dort.find(".teil").eq(f).css("stroke","#cc0000");
    }
  }
}
