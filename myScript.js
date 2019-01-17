
var menü = $("div").children().eq(0);
var aufgabenwahl ;



linkeSeiteschreiben();
$(".menu").find(".druck").hide();

for(i=2;i<10; i++){
	var x= $("#Aufträge").children().eq(i-1);
	x.hide();
}








//Aufgaben schreiben wenn bild angeklickt wird: und lösungs-ILndex speichern ('aufgabenwahl');


$("#Aufgabenübersicht").find("p").click(function(){



	$("#Aufgabenübersicht").children().removeClass("yellow");
	$(this).addClass("yellow");
	var zahl=	$(this).index();
	window.aufgabenwahl=zahl;
		$("#Aufgabentext").children().eq(0).children().eq(0).html("Aufgabe");//überschrift

		var div1= "<div class='bruchBox'></div>";
		var div2= "<div class='operatorBox'> <p class='operator'> +</p> </div>";
		var div3= "<div class='bruchBox'></div>";

		var div4= "<div class='gleichBox'><p class='operator'> =</p> </div>";

		var div5= "<div class='bruchBox'></div>";
		var div6= "<div class='operatorBox'> <p class='operator'> +</p> </div>";
		var div7= "<div class='bruchBox'></div>";

		var div8= "<div class='gleichBox'><p class='operator'> =</p> </div>";
		var div9= "<div class='bruchBox'></div>";



	$("#aufgabenFeld").children().eq(0).html("");
	$("#aufgabenFeld").children().eq(0).append(div1);//
	$("#aufgabenFeld").children().eq(0).append(div2);//
	$("#aufgabenFeld").children().eq(0).append(div3);//
	$("#aufgabenFeld").children().eq(0).append(div4);//
	$("#aufgabenFeld").children().eq(0).append(div5);//
	$("#aufgabenFeld").children().eq(0).append(div6);//
	$("#aufgabenFeld").children().eq(0).append(div7);//
		$("#aufgabenFeld").children().eq(0).append(div8);//
			$("#aufgabenFeld").children().eq(0).append(div9);//

	var zählerdiv = "<p class='zählerböxchen' ></p>";
	var bruchstrichdiv = "<hr>";
	var nennerdiv = "<p class='nennerböxchen' ></p>";

	$(".bruchBox").append(zählerdiv);
		$(".bruchBox").append(bruchstrichdiv);
			$(".bruchBox").append(nennerdiv);

	var aufgabe = additionsaufgabe();
	//alert(aufgabe);
//	for(i=0;i<aufgabe.length;i++){

$(".zählerböxchen").eq(0).text(aufgabe[0]);
$(".zählerböxchen").eq(1).text(aufgabe[2]);
$(".nennerböxchen").eq(0).text(aufgabe[1]);
$(".nennerböxchen").eq(1).text(aufgabe[3]);


$(".bilderFeld").empty();
$("#BruchBild").clone().appendTo(".bilderFeld");  // Bild vom ersten Bruch erschaffen
$("#BruchBild").clone().appendTo(".bilderFeld");
$(".bilderFeld").children().removeAttr("id");
//sichtbar machen:
$(".bilderFeld").children().eq(0).css("opacity","100");
$(".bilderFeld").children().eq(1).css("opacity","100");
//Bild 1 erstellen:
var ort1 = $(".bilderFeld").children().eq(0);
var ort2 = $(".bilderFeld").children().eq(1);

bruchbild(aufgabe[0],aufgabe[1], ort1);
bruchbild(aufgabe[2],aufgabe[3], ort2);

$(".bruchBox").find("p").click(function(){
	$(this).css("background-color","black");
	inputMachen();
});



}); //ende click links (bisher nur addition)




function linkeSeiteschreiben(){
	for(i=0;i<iconString.length;i++){
		if(iconString[i]!=undefined){
			var überschrift="<p class='menüicon pic'>" + iconString[i] + "</p>"; //frowning face
		}else{
			var überschrift = "<p class='menüicon pic'>" + '<img class=images src="https://img.icons8.com/wired/64/000000/question-mark.png">' + "</p>";
		}
		$("#Aufgabenübersicht").append(überschrift);
	}
}


//VierfelderTafel Input:
function inputMachen(textFeldNummer){
				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();
				// Wähle die geklickte Box der Grid-Tabelle aus:
				var boxWähler = $("#vierfelderBox").children().eq(textFeldNummer) ;
				// Box leeren:
				var inhaltsspeicher = boxWähler.children();
				//boxWähler.empty();
				//leeres Eingabefeld erzeugen und einfügen:
				var text1	= "<input type='text' class='input' size='4' id='inputFeld'>" ;
				boxWähler.append(text1);
				boxWähler.children().eq(0).focus();
				//wenn Enter nicht gedrückt wird und stattdessen wieder geklickt wird: dennoch das Eingabefenster löschen!
				//bei Enter: text ins feld schreiben und Textfeld ausblenden/löschen
				$("#inputFeld").keypress(
					function(e) {
						if (e.keyCode == 13){
							var textUser =boxWähler.children().eq(0).val();    // Der Value, also der eingegebene Text wird ausgelesen aus der Zelle und in textUser gespeichert.
							boxWähler.empty();
							var newUserElement = "<p>".concat(textUser, "</p>");

							if(textUser==""){
									 boxWähler.append(inhaltsspeicher);
							}else{
								boxWähler.append(newUserElement);

								vierfelderTafelPrüfen();//allles was falsch ist wird dort markiert!
								//Feedback:
								if(boxWähler.attr("class").indexOf("black")==-1){
									feedback(true);			//positives Feedback
								}else{
										feedback(false);			//positives Feedback
								}
							}
						} //enter
					}
				);
}





var letter ="ö";
function buchstaben(i,text){
			switch(i){
			case 1:				letter = "a";				break;
			case 2:				letter = "b";				break;
			case 3:				letter = "c";				break;
			case 4:				letter = "d";				break;
			case 5:				letter = "e";				break;
			case 6:				letter = "f";				break;
			case 7:				letter = "g";				break;
			case 8:				letter = "h";				break;
			case 9:				letter = "i";				break;
			case 10:			letter = "j";				break;
			case 11:			letter = "k";				break;
			case 12:			letter = "l";				break;
			case 13:			letter = "m";				break;
			case 14:			letter = "n";				break;
			case 15:			letter = "o";				break;
			case 16:			letter = "p";				break;
			default:			letter = "hier sollte ein Buchstabe stehn!";
		}
		var chapter = letter.concat(")");

		if(text=="chap"){				return chapter;
		}else{									return letter;
		}
	}



function printcontainer(){
	$(".lösungsplace").removeAttr('Id');
	$(".innerpage1").clone().appendTo(	$(".printArea")	);
	$(".printArea").find(".auftrag0").remove();
	$(".printArea").find(".main").children().eq(1).css("text-align","left");

	$(".printArea").children().removeClass("innerpage1");
	//$(".printArea").children().removeClass("main");

		$("#printArea").children().find(".main").css("width", "100%");
	$(".printArea").append("<div class='lösungsplace' id='felderBox'></div>");

	printVierfelder();
	printBaumdiagramm();
}

function printVierfelder(){ //+Aufgabe in Container
	var string= lösungenVierfelder[window.aufgabenwahl];
	for(i=0;i<16;i++){																//in die originale Vierfeldertafel Lösungen hinzufügen
		var gerundet= string[0][0][i];
		if(!isNaN(gerundet)){
			gerundet=gerundet*1000;
			gerundet=Math.round(gerundet);
			gerundet=gerundet/1000;
		}
		$("#vierfelderBox").children().eq(i).html(gerundet);
	}
	$("#taBelle").show();
	$("#taBelle").clone().appendTo($("#felderBox")); //funzt nur bei show
//	$(".printArea").find(".tabelle").removeClass("tabelle");
	$(".printArea").find(".tabelle").removeAttr("Id");//Id entfernen
	$("#taBelle").hide(); //die originale Tabelle oben wird versteckt
	//tab-höhe ändern im resize programm
	//$("#gridContainer").clone().appendTo(	$("#felderBox")	);
		$(".printArea").find(".tabelle").css("top","0pt");
		$(".printArea").find(".tabelle").css("left","0pt");


	for(i=0;i<16;i++){
		var feldinhalt=$("#gridContainer").children().eq(1).children().eq(i).text();
		$("#felderBox").find(".tab").eq(i).text(feldinhalt); //hier funktioniert wohl was nicht...
	}
//	$(".printArea").find("#gridContainer").removeAttr(	'Id'	);

	$(".printArea").find('p').css("font-size","12pt");
	$(".printArea").find('div').css("font-size","12pt");
	$("#felderBox").children().css("color","black");
	$(".printArea").children().css("color","black");
}

function printBaumdiagramm(){
	$("#mySVG").find("foreignObject").hide();  //foreign
	var string= lösungenVierfelder[window.aufgabenwahl];
//Nennerposition korrigieren
	for(l=0;l<10;l++){
		var k=6+l*3;  //zählerelemente, die zur Eingabe benötigt ewerden

		var zähler = string[1][0][k];
		var nenner = string[1][0][k+2];
		var gerundet=zähler/nenner;
		gerundet=gerundet*1000;
		gerundet=Math.round(gerundet);
		gerundet=gerundet/1000;
		$("#mySVG").children().eq(k).text(gerundet);
	}
	for(i=0;i<6;i++){
		$("#mySVG").children().eq(i).text(string[1][0][i]);
		feldAnpassen(i);
	}
	baumDiagrammPrüfen(); //passt Rechteckfarbe an Rcihtigkeit des inhalts an
	//alert(string[1][0]);
	$("#svgDiv").clone().appendTo(	$("#felderBox")	);
//	$("#felderBox").find(".svg").children().eq(0).remove();
	$("#felderBox").children().removeAttr("Id");  // sonst dupliziert sich alles.
	$("#felderBox").find("path").css("stroke","black");
	$("#felderBox").find("text").css("fill","black");
}

function druckansicht(){
	$(".aufgabenübersicht").hide();
	$(".innerpage1").hide();
	$(".gridContainer").hide();
	$(".svg").hide(); //sonst bleibt überschrift sichtbar
	$(".lösungen").hide();

	$(".menu").find(".home").hide();
	$(".menu").find(".druck").show();
	$(".printArea").addClass("grid");
	$(".printArea").css("grid-template-columns","100%");

}

function vierf(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
//	$(".printArea").filter("div").hide();
	$(".lösungsplace").find(".tabelle").show();
$(".lösungsplace").find(".tabelle").next().hide(); //svg div ausblenden (hiter vierf)
	$(".printArea").css("grid-template-columns","80% 20%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumd(){
//	var svghöhe =  $(".printArea").find("#mySVG").height();
	$(".lösungsplace").css("width", "100%");
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").hide();
	$(".lösungsplace").find(".tabelle").next().show(); //baum
	//$(".lösungsplace").find("#svgDiv").css("height","180pt");

	$(".printArea").css("grid-template-columns","75% 25%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumVier(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").show();
		$(".lösungsplace").find(".tabelle").next().show(); //baum

 	$(".printArea").css("grid-template-columns","100%");
 	$(".lösungsplace").css("grid-template-columns","60% 40%");
 	$(".lösungsplace").css("width","100%");
}

function nurAufgabe(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
	$(".lösungsplace").find(".tabelle").hide();
		$(".lösungsplace").find(".tabelle").next().hide(); //baum
	$(".printArea").css("grid-template-columns","100%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").hide();
}

function nurLös(){
		$(".printArea").children().hide();
		$(".lösungsplace").find(".üschrift").remove();
		var üschrift = 0;
	 	for(i=0;i<20;i++){
		  üschrift = $(".printArea").find(".Nüberschrift").eq(i).text();
			$(".lösungsplace").eq(i).prepend("<p class='üschrift'>" + üschrift + "</p>");
 		}
		$(".lösungsplace").show();
		$(".lösungsplace").find(".tabelle").show();
			$(".lösungsplace").find(".tabelle").next().show(); //baum
		$(".printArea").css("grid-template-columns","50% 50%");
		$(".lösungsplace").css("grid-template-columns","40% 60%");
		$(".lösungsplace").css("width","100%");
	//	$(".lösungsplace").css("grid-template-rows","10% 90%");
}

	function printer(){
		$(".menu").hide();
		window.print();

		$(".menu").show();

	}


function home(){
	$(".menu").find(".home").show();
	$(".menu").find(".druck").hide();


	$(".menu").show();
	$(".aufgabenübersicht").show();
	$(".innerpage1").show();

	$(".gridContainer").show();
	$(".svg").show();
		$(".lösungen").show();
}
