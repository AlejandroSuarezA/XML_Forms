window.onload = function() {

	
	// Leer el XML con las preguntas del primer examen
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			gestionarXml(this);
		}
	};
	xhttp.open("GET", "../official_docs/questions.xml", true);
	xhttp.send();
	
		 
		 
}
// Obtener las preguntas del XML
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	
	var tituloInput = xmlDoc.getElementsByTagName("title")[0].innerHTML;
	ponerDatosInputHtml(tituloInput);
}




function ponerDatosInputHtml(t){
	document.getElementById("input1").innerHTML = t;
}
