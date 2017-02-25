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
	
	// Obtener las preguntas del XML
	function gestionarXml(dadesXml){
		 var xmlDoc = dadesXml.responseXML;
		 
		 var questionInput1 = xmlDoc.getElementsByTagName("title")[0].innerHTML;
		 ponerDatosInputHtml(questionInput1 , 1);
	}
		 
		 
		 
		 
		 
		 
		 
		 
		 function ponerDatosInputHtml(title , number){
			 document.getElementById("input" + number).innerHTML = t;
			}
		
}

