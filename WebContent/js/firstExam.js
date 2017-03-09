var formElement=null;
var respuestaTexto1 = null;
var respuestaTexto2 = null;
var respuestaSelect1 = null;
var respuestaSelect2 = null;
var respuestaRadio1 = null;
var respuestaRadio2 = null;
var respuestaCheckbox1 = [];
var respuestaCheckbox2 = [];
var respuestaMultiple1 = [];
var respuestaMultiple2 = [];
var nota = 0;

//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function() {
    formElement = document.getElementById('formNumero1');
    formElement.onsubmit = function() {
        //inicializar();
        corregirTexto1();
        corregirTexto2();
        corregirSelect1();
        corregirSelect2();
        corregirCheckbox1();
        corregirCheckbox2();
        corregirRadio1();
        corregirRadio2();
        corregirMultiple1();
        corregirMultiple2();
        presentarNota();
        return false;
    }



    // LEER XML de xml/questions.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://cdn.rawgit.com/AlejandroSuarezA/XML_Forms/6515e461/WebContent/xml/questions.xml", true);
    xhttp.send();
}


// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML.
function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc


    //Preguntas input
    var tituloInput1 = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    ponerDatosInputHtml(tituloInput1, 1);
    respuestaTexto1 = xmlDoc.getElementsByTagName("answer")[0].innerHTML;


    var tituloInput2 = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    ponerDatosInputHtml(tituloInput2, 2);
    respuestaTexto2 = xmlDoc.getElementsByTagName("answer")[1].innerHTML;




    // Preguntas select
    var tituloSelect1 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    var opcionesSelect1 = [];
    var nopt = xmlDoc.getElementById("jaap009").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesSelect1[i] = xmlDoc.getElementById("jaap009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml(tituloSelect1, 1, opcionesSelect1);
    respuestaSelect1 = xmlDoc.getElementById("jaap009").getElementsByTagName("answer")[0].innerHTML;


    var tituloSelect2 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesSelect2 = [];
    var nopt2 = xmlDoc.getElementById("jaap010").getElementsByTagName('option').length;
    for (i = 0; i < nopt2; i++) {
        opcionesSelect2[i] = xmlDoc.getElementById("jaap010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml(tituloSelect2, 2, opcionesSelect2);
    respuestaSelect2 = xmlDoc.getElementById("jaap010").getElementsByTagName("answer")[0].innerHTML;


    // Preguntas checkbox
    var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesCheckbox1 = [];
    var nopt = xmlDoc.getElementById("jaap005").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesCheckbox1[i] = xmlDoc.getElementById("jaap005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml(tituloCheckbox1, 1, opcionesCheckbox1);
    var nres = xmlDoc.getElementById("jaap005").getElementsByTagName('answer').length;
    for (i = 0; i < nres; i++) {
        respuestaCheckbox1[i] = xmlDoc.getElementById("jaap005").getElementsByTagName("answer")[i].innerHTML;
    }

    var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    var opcionesCheckbox2 = [];
    var nopt2 = xmlDoc.getElementById("jaap006").getElementsByTagName('option').length;
    for (i = 0; i < nopt2; i++) {
        opcionesCheckbox2[i] = xmlDoc.getElementById("jaap006").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml(tituloCheckbox2, 2, opcionesCheckbox2);
    var nres2 = xmlDoc.getElementById("jaap006").getElementsByTagName('answer').length;
    for (i = 0; i < nres2; i++) {
        respuestaCheckbox1[i] = xmlDoc.getElementById("jaap006").getElementsByTagName("answer")[i].innerHTML;
    }

    // Preguntas multiple
    var tituloMultiple1 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesMultiple1 = [];
    var noptmultiple = xmlDoc.getElementById("jaap007").getElementsByTagName('option').length;
    for (i = 0; i < noptmultiple; i++) {
        opcionesMultiple1[i] = xmlDoc.getElementById("jaap007").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultipleHtml(tituloMultiple1, 1, opcionesMultiple1);
    var nres3 = xmlDoc.getElementById("jaap007").getElementsByTagName('answer').length;
    for (i = 0; i < nres3; i++) {
        respuestaMultiple1[i] = xmlDoc.getElementById("jaap007").getElementsByTagName("answer")[i].innerHTML;
    }

    var tituloMultiple2 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    var opcionesMultiple2 = [];
    var noptmultiple2 = xmlDoc.getElementById("jaap008").getElementsByTagName('option').length;
    for (i = 0; i < noptmultiple2; i++) {
        opcionesMultiple2[i] = xmlDoc.getElementById("jaap008").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultipleHtml(tituloMultiple2, 2, opcionesMultiple2);
    var nres4 = xmlDoc.getElementById("jaap007").getElementsByTagName('answer').length;
    for (i = 0; i < nres4; i++) {
        respuestaMultiple2[i] = xmlDoc.getElementById("jaap007").getElementsByTagName("answer")[i].innerHTML;
    }

    // Preguntas radio

    var tituloRadio1 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    var opcionesRadio1 = [];
    var noptradio1 = xmlDoc.getElementById("jaap003").getElementsByTagName('option').length;
    for (i = 0; i < noptradio1; i++) {
        opcionesRadio1[i] = xmlDoc.getElementById("jaap003").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadioHtml(tituloRadio1, 1, opcionesRadio1);
    respuestaRadio1 = xmlDoc.getElementById("jaap003").getElementsByTagName("answer")[0].innerHTML;


    var tituloRadio2 = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    var opcionesRadio2 = [];
    var noptradio2 = xmlDoc.getElementById("jaap004").getElementsByTagName('option').length;
    for (i = 0; i < noptradio2; i++) {
        opcionesRadio2[i] = xmlDoc.getElementById("jaap004").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadioHtml(tituloRadio2, 2, opcionesRadio2);
    respuestaRadio2 = xmlDoc.getElementById("jaap004").getElementsByTagName("answer")[0].innerHTML;

}

// ****************************************************************************************************
// poner los datos recibidos en el HTML
function ponerDatosInputHtml(t, pos) {
    document.getElementById("input" + pos).innerHTML = t;
}

function ponerDatosSelectHtml(t, pos, opt) {
    document.getElementById("select" + pos).innerHTML = t;

    var select = document.getElementById("selectOptions" + pos);

    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosMultipleHtml(t, pos, opt) {
    document.getElementById("multiple" + pos).innerHTML = t;

    var select = document.getElementById("multipleOptions" + pos);

    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}


function ponerDatosCheckboxHtml(t, pos, opt) {
    document.getElementById('checkbox' + pos).innerHTML = t;

    var checkboxContainer = document.getElementById('checkboxDiv' + pos);

    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "color_" + pos + i);
        input.type = "checkbox";
        input.name = "color" + pos;
        input.id = "color_" + pos + i;;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement("br"));
    }
}

function ponerDatosRadioHtml(t, pos, opt) {
    document.getElementById("radio" + pos).innerHTML = t;

    var radioContainer = document.getElementById("radioDiv" + pos);

    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "radio" + i)
        input.type = "radio";
        input.name = "radio" + pos;
        input.id = "radio";
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    }

function corregirTexto1() {
        //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
        //en este ejemplo hace una comparación de números enteros
        var s = document.getElementById("inputText1").value;
        if (s == respuestaTexto1) {
            darRespuestaHtml("P1: Exacto!");
            nota += 1;
        } else {
            darRespuestaHtml("P1: Incorrecta!");
        }
    }

function corregirTexto2() {
        //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
        //en este ejemplo hace una comparación de números enteros
        var s = document.getElementById("inputText2").value;
        if (s == respuestaTexto1) {
            darRespuestaHtml("P7: Exacto!");
            nota += 1;
        } else {
            darRespuestaHtml("P7: Incorrecta!");
        }
    }




function corregirSelect() {
        var sel = document.getElementById("selecOptions1");
        if (sel.selectedIndex - 1 == respuestaSelect1) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
            darRespuestaHtml("P4: Exacto!");
            nota += 1;
        } else darRespuestaHtml("P4: Incorrecta!");
    }

function corregirSelect2() {
        var sel = document.getElementById("selectOptions2");
        if (sel.selectedIndex - 1 == respuestaSelect2) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
            darRespuestaHtml("P8: Exacto!");
            nota += 1;
        } else darRespuestaHtml("P8: Incorrecta!");
    }


function corregirCheckbox1(){
    	var notaCheckbox = 0;
    	var f=formElement;
    	var escorrecta = [];
    	for (i = 0; i < f.color1.length; i++) {  //"chckbx" es el nombre asignado a todos los checkbox
    		if (f.color1[i].checked) {
    			escorrecta[i]=false;
    			for (j = 0; j < respuestaCheckbox1.length; j++) {
    				if (i==respuestaCheckbox[j]) escorrecta[i]=true;
    			}
    			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    			if (escorrecta[i]) {
    				nota +=1.0/respuestaCheckbox.length;  //dividido por el número de respuestas posibles
    				notaCheckbox +=1.0/respuestaCheckbox.length;
    			} else {
    				nota -=1.0/respuestaCheckbox.length;  //dividido por el número de respuestas posibles
    			}
    		}
    	}
    	if (notaCheckbox != 1){
    		darRespuestaHtml("En la P2 tienes: " + notaCheckbox + " puntos")
    	} else darRespuestaHtml("En la P2 tienes: " + notaCheckbox + " punto")

    }
    function corregirCheckbox2(){
    	var notaCheckbox = 0;
    	var f=formElement;
    	var escorrecta = [];
    	for (i = 0; i < f.color2.length; i++) {  //"chckbx" es el nombre asignado a todos los checkbox
    		if (f.color2[i].checked) {
    		escorrecta[i]=false;
    			for (j = 0; j < respuestaCheckbox2.length; j++) {
    				if (i==respuestaCheckbox2[j]) escorrecta[i]=true;
    			}
    			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    			if (escorrecta[i]) {
    				nota +=1.0/respuestaCheckbox2.length;  //dividido por el número de respuestas posibles
    				notaCheckbox +=1.0/respuestaCheckbox2.length;
    			} else {
    				nota -=1.0/respuestaCheckbox2.length;  //dividido por el número de respuestas posibles
    			}
    		}
    	}
    	if (notaCheckbox != 1){
    		darRespuestaHtml("En la P5 tienes: " + notaCheckbox + " puntos")
    	} else darRespuestaHtml("En la P5 tienes: " + notaCheckbox + " punto")
    }


    function corregirRadio1(){
    	var notaRadio = 0;
    	var f=formElement;
    	var escorrecta = null;
    	for (i = 0; i < f.radio1.length; i++) {
    		if (f.radio1[i].checked) {
    			escorrecta=false;
    			if (i==respuestaRadio1) escorrecta=true;
    			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    			if (escorrecta) {
    				notaRadio +=1.0;  //dividido por el número de respuestas posibles
    				nota +=1.0;
    			}
    		}
    	}
    	if (notaRadio != 1){
    		darRespuestaHtml("4ª pregunta: " + notaRadio + " puntos")
    	} else darRespuestaHtml("4ª pregunta: " + notaRadio + " punto")
    }


    function corregirRadio2(){
    	var notaRadio = 0;
    	var f=formElement;
    	var escorrecta = null;
    	for (i = 0; i < f.radio2.length; i++) {  //"rd" es el nombre asignado a todos los radio.
    		if (f.radio2[i].checked) {
    			escorrecta=false;
    			if (i==respuestaRadio2) escorrecta=true;
    			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    			if (escorrecta) {
    				notaRadio +=1.0;  //dividido por el número de respuestas posibles
    				nota +=1.0;
    			}
    		}
    	}
    	if (notaRadio != 1){
    		darRespuestaHtml("9ª pregunta: " + notaRadio + " puntos")
    	} else darRespuestaHtml("9ª pregunta: " + notaRadio + " punto")
    }


    function corregirMultiple1(){
    	var f = formElement;
    	var escorrecta = [];
    	var multiple = document.getElementById("multipleOptions1");
    	var puntuacion = 0;
    	for (var i = 0; i<multiple.options.length; i ++){
    		if (multiple.options[i].selected){
    			for (var j = 0; j<respuestaMultiple1.length; j++){
    				if (multiple.options[i].value == respuestaMultiple1[j]){
    					escorrecta.push(multiple.options[i].value);
    				}
    			}
    		}
    	}
    	if (escorrecta.length > 0){
    		puntuacion = escorrecta.length / respuestaMultiple1.length;
    		nota += puntuacion;
    	}
    	if (puntuacion != 1 & puntuacion != 0){
    		darRespuestaHtml("5ª pregunta: " + puntuacion.toFixed(1) + " puntos")
    	} else if (puntuacion == 0){
    		darRespuestaHtml("5ª pregunta: 0 puntos");
    	}else darRespuestaHtml("5ª pregunta: 1 punto")
    }
    function corregirMultiple2(){
    	var f = formElement;
    	var escorrecta = [];
    	var multiple = document.getElementById("multipleOptions2");
    	var puntuacion = 0;
    	for (var i = 0; i<multiple.options.length; i ++){
    		if (multiple.options[i].selected){
    			for (var j = 0; j<respuestaMultiple2.length; j++){
    				if (multiple.options[i].value == respuestaMultiple2[j]){
    					escorrecta.push(multiple.options[i].value);
    				}
    			}
    		}
    	}
    	if (escorrecta.length > 0){
    		puntuacion = escorrecta.length / respuestaMultiple2.length;
    		nota += puntuacion;
    	}
    	if (puntuacion != 1 & puntuacion != 0){
    		darRespuestaHtml("10ª pregunta: " + puntuacion.toFixed(1) + " puntos")
    	} else if (puntuacion == 0){
    		darRespuestaHtml("10ª pregunta: 0 puntos");
    	}else darRespuestaHtml("10ª pregunta: 1 punto")
    }



    function darRespuestaHtml(r){
     var p = document.createElement("p");
     var node = document.createTextNode(r);
     p.appendChild(node);
     document.getElementById('resultadosDiv').appendChild(p);
    }

    function presentarNota(){
       darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
    }

    function inicializar(){
       document.getElementById('resultadosDiv').innerHTML = "";
       nota=0.0;
    }




}
