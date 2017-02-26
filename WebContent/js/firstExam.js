//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 
	
	// LEER XML de xml/questions.xml
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			gestionarXml(this);
		}
	};
	xhttp.open("GET", "xml/questions.xml", true);
	xhttp.send();
}


// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML.
function gestionarXml(dadesXml){
	 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
	 

	 //Enunciado preguntas input
	 var tituloInput1=xmlDoc.getElementsByTagName("title")[0].innerHTML;
	 ponerDatosInputHtml(tituloInput1, 1);
	 
	 
	 var tituloInput2=xmlDoc.getElementsByTagName("title")[1].innerHTML;
	 ponerDatosInputHtml(tituloInput2, 2);
	 

	 
 
 // Enunciado preguntas select
 var tituloSelect1=xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jaap009").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jaap009").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect1, 1, opcionesSelect);
 
 
 var tituloSelect2=xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jaap010").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jaap010").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect2, 2, opcionesSelect);
 
 

 // Enunciado preguntas checkbox
 var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("jaap005").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jaap005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosCheckboxHtml(tituloCheckbox1, 1, opcionesCheckbox);
 
 var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("jaap006").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jaap006").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox2 , 2, opcionesCheckbox);

}

// ****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t, pos){
 document.getElementById("input" + pos).innerHTML = t;
}

function ponerDatosSelectHtml(t, pos ,opt){
  document.getElementById("select" + pos).innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosCheckboxHtml(t, pos, opt){
 var checkboxContainer=document.getElementById('checkboxDiv' + pos);
 document.getElementById('checkbox' + pos).innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  

}