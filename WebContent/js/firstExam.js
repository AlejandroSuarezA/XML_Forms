//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 
	
	var formBlank = document.getElementById("formNumero1");
	
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
	
	var xmlDoc = dadesXml.responseXML; //Parsear XML to xmlDoc
	
	var questionBundle = xmlDoc.getElementsByTagName("questions");
	 
	 for(question in questionBundle){
		 
		 //var questionType = question.getElementByTagName("type");
		 
		 
		 function questionTextType(question){
			 var statement = document.createElement("h3");
			 statement.id = question.getAttribute("id");
			 statement.innerHTML = question.getElementsByTagName("title").innerHTML;
			 formBlank.appendChild(statement);
		 
	 }
	 
	 

		 
	 }
}

	 
