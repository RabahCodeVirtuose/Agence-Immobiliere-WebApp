let xmlhttp = new XMLHttpRequest();

function loadXMLDocAndDisplayBiens(){       
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            displayBienById();
        }
    };

    xmlhttp.open("GET","../data/details.xml", true);
    xmlhttp.send();
}

function displayBienById() {    

    let bienid;
    //Récupérer bienid  dans la chaîne de requête
    let urlParams = new
    URLSearchParams(window.location.search);
     bienid = urlParams.get('id');

    let i;        
    let xmlDoc = xmlhttp.responseXML;    
    let x = xmlDoc.getElementsByTagName("INFOPROP");    
    
    for (i = 0; i < x.length; i++) {        
        if (x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue ==bienid){
            document.getElementById("NOM").innerHTML=x[i].getElementsByTagName("NOM")[0].childNodes[0].nodeValue;
            document.getElementById("PIECES").innerHTML=x[i].getElementsByTagName("PIECES")[0].childNodes[0].nodeValue;
            document.getElementById("CHAUFFAGE").innerHTML=x[i].getElementsByTagName("CHAUFFAGE")[0].childNodes[0].nodeValue;
            document.getElementById("TYPE").innerHTML=x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue;
            document.getElementById("SUPERFICIE").innerHTML=x[i].getElementsByTagName("SUPERFICIE")[0].childNodes[0].nodeValue;
            document.getElementById("LOCALISATION").innerHTML=x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue;
            document.getElementById("CONSO_ENERGETIQUE").innerHTML=x[i].getElementsByTagName("CONSO_ENERGETIQUE")[0].childNodes[0].nodeValue;
            document.getElementById("ETAGE").innerHTML=x[i].getElementsByTagName("ETAGE")[0].childNodes[0].nodeValue;
            document.getElementById("ASCENSEUR").innerHTML=x[i].getElementsByTagName("ASCENSEUR")[0].childNodes[0].nodeValue;
            document.getElementById("JARDIN").innerHTML=x[i].getElementsByTagName("JARDIN")[0].childNodes[0].nodeValue;
            document.getElementById("PISCINE").innerHTML=x[i].getElementsByTagName("PISCINE")[0].childNodes[0].nodeValue;
            document.getElementById("PRIX").innerHTML=x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue+" €";
            document.getElementById("DESCRIPTION").value=x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue;
            document.getElementById("DIAGNOSTICS").value=x[i].getElementsByTagName("DIAGNOSTICS")[0].childNodes[0].nodeValue;

            document.getElementById("image1").src=x[i].getElementsByTagName("SRC1")[0].childNodes[0].nodeValue;
            document.getElementById("image2").src=x[i].getElementsByTagName("SRC2")[0].childNodes[0].nodeValue;;
            document.getElementById("image3").src=x[i].getElementsByTagName("SRC3")[0].childNodes[0].nodeValue;;

        }
    }
} 