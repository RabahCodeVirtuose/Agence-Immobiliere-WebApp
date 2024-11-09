///////////////////////////// place cocernant le chargement du login 
function loadLoginPage(){
    window.location.href="./pages/signIn.html";
}

/////////////////////////////
function chargerdetails(id){
    window.location.href="details.html?id="+id+"";
}
function chargerdetailsdansPagesprincipales(id){
    window.location.href="./pages/details.html?id="+id+"";
}


  ////////////////////////////////////////////
let xmlhttp = new XMLHttpRequest();
let nbPage = 0;
let pageSize =5;
let startIndex = 0;
let endIndex = 0;
let page = 1;

function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            showPageLinks();
            fetchData();
        }
    };
    xmlhttp.open("GET", "../data/bdd.xml", true);
    xmlhttp.send();
}
let xmlGlob;
function fetchData(){
    let i;
    let xmlDoc=xmlhttp.responseXML;
    let table = "<tr><th>TYPE</th><th>SUPERFICIE</th><th>LOCALISATION        </th><th>CONSO_ENERGETIQUE</th><th>ETAGE</th><th>ASCENSEUR</th><th>JARDIN</th><th>PISCINE</th><th>PRIX</th></tr>";
    let x = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER"); 
    startIndex = (page-1)*pageSize;
    endIndex = startIndex+pageSize;
    for (i =startIndex; i <endIndex; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("SUPERFICIE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("CONSO_ENERGETIQUE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("ETAGE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("ASCENSEUR")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("JARDIN")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("PISCINE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue +
        "</td><td>"+
        "<td><button type=\"button\" class=\"btn btn-info\"  onclick=\"chargerdetails(" +
        x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
        "Details</button></td>" +
        "<td><button type=\"button\" class=\"btn btn-warning\"  onclick=\"editBien(" +
        x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
        "Modifier</button></td>" +
        "<td><button type=\"button\" class=\"btn btn-danger\" onclick=\"deleteBien(" +
        x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
        "Supprimer</button></td>" + 
                       
        "</tr>";
    }
    document.getElementById("data").innerHTML = table;
}     



///////////////////////////////
function loadPage(pageNumber) {
    page = pageNumber;
    fetchData();
}       

function showPageLinks() {
     
    let nb_button= xmlhttp.responseXML.getElementsByTagName("BIEN_IMMOBILIER").length/pageSize;
    let divpl = document.getElementById("pageLinks");
    divpl.style.display = "block";
    let divModif=document.getElementById("pageLinks");
    


    let pageLinks="";
    for(i=1;i<=nb_button;i++){
        pageLinks+="<input type='button' class=\"btn btn-light\" onclick='loadPage("+i+")'value='"+i+"'></input>"+"<span></span>";
    }
 
    divModif.innerHTML=pageLinks;
}
//////////////////////////////
//ce qui concerce la page détail:
//////////////////////////////


function editBien(id) {
    let xmlDoc= xmlhttp.responseXML;
    let ajouterBien = document.getElementById("mytab");
    let type11 = document.getElementById("type11");
    let superficie = document.getElementById("superficie");
    let localisation = document.getElementById("localisation");
    let consoEnergetique = document.getElementById("consoEnergetique");
    let etaAge = document.getElementById("etaAge");
    let assenceur = document.getElementById("assenceur");
    let jaRDin = document.getElementById("jaRDin");
    let piscinE=document.getElementById("piscinE");
    let prix= document.getElementById("prix");
    let hId=document.getElementById("hId");

   
    let biens = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
    let bien;

    for (i = 0; i < biens.length; i++) {
        if (biens[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            bien = biens[i];

        }
    }

    ajouterBien.style.display = "block";
    hId.value = bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
    type11.value = bien.getElementsByTagName("TYPE")[0].childNodes[0].nodeValue;
    superficie.value = bien.getElementsByTagName("SUPERFICIE")[0].childNodes[0].nodeValue;
    localisation.value = bien.getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue;
    consoEnergetique.value = bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].childNodes[0].nodeValue;
    etaAge.value = bien.getElementsByTagName("ETAGE")[0].childNodes[0].nodeValue;
    assenceur.value = bien.getElementsByTagName("ASCENSEUR")[0].childNodes[0].nodeValue;
    jaRDin.value = bien.getElementsByTagName("JARDIN")[0].childNodes[0].nodeValue;
    piscinE.value = bien.getElementsByTagName("PISCINE")[0].childNodes[0].nodeValue;
    prix.value = bien.getElementsByTagName("PRIX")[0].childNodes[0].nodeValue;
}



function updateBien() {
    let xmlDoc= xmlhttp.responseXML;
     let id = document.getElementById("hId").value;
    let biens = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
    let bien;

    for (i = 0; i < biens.length; i++) {
        if (biens[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            bien = biens[i];
        }
    }
    let type11 = document.getElementById("type11");
    let superficie = document.getElementById("superficie");
    let localisation = document.getElementById("localisation");
    let consoEnergetique = document.getElementById("consoEnergetique");
    let etaAge = document.getElementById("etaAge");
    let assenceur = document.getElementById("assenceur");
    let jaRDin = document.getElementById("jaRDin");
    let piscinE = document.getElementById("piscinE");
    let prix = document.getElementById("prix");
    bien.getElementsByTagName("TYPE")[0].childNodes[0].nodeValue =type11.value;
    bien.getElementsByTagName("SUPERFICIE")[0].childNodes[0].nodeValue =superficie.value;
    bien.getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue =localisation.value;
    bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].childNodes[0].nodeValue =consoEnergetique.value;
    bien.getElementsByTagName("ETAGE")[0].childNodes[0].nodeValue =etaAge.value;
    bien.getElementsByTagName("ASCENSEUR")[0].childNodes[0].nodeValue =assenceur.value;
    bien.getElementsByTagName("JARDIN")[0].childNodes[0].nodeValue =jaRDin.value;
    bien.getElementsByTagName("PISCINE")[0].childNodes[0].nodeValue =piscinE.value;
    bien.getElementsByTagName("PRIX")[0].childNodes[0].nodeValue =prix.value;
    showPageLinks();
    fetchData();
}

function deleteBien(id) {
    let xmlDoc= xmlhttp.responseXML;
    let biens = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
    let bien;

    for (i = 0; i < biens.length; i++) {
        if(biens[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            bien = biens[i];
        }
    }
    
    xmlDoc.documentElement.removeChild(bien);
    showPageLinks();
    fetchData();
}


function showForm() {
    let tblCars = document.getElementById("mytab");
    tblCars.style.display ="block";
    }

function addbien(){
    let xmlDoc=xmlhttp.responseXML;
    let biens=xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
    let bien=xmlDoc.createElement("BIEN_IMMOBILIER");
    let ID=xmlDoc.createElement("ID");
     
    let type11q=xmlDoc.createElement("TYPE");
    let superficieq=xmlDoc.createElement("SUPERFICIE");
    let localisationq=xmlDoc.createElement("LOCALISATION");
    let consoEnergetiqueq=xmlDoc.createElement("CONSO_ENERGETIQUE");
    let etaAgeq=xmlDoc.createElement("ETAGE");
    let assenceurq=xmlDoc.createElement("ASCENSEUR");
    let jaRDinq=xmlDoc.createElement("JARDIN");
    let piscineq=xmlDoc.createElement("PISCINE");
    let priXq=xmlDoc.createElement("PRIX");

   
    let type11_value = document.getElementById("type11").value;
    let superficie_value =document.getElementById("superficie").value;
    let localisation_value=document.getElementById("localisation").value;
    let consoEnergetique_value=document.getElementById("consoEnergetique").value;
    let etaAge_value=document.getElementById("etaAge").value;
    let assenceur_value=document.getElementById("assenceur").value;
    let jardinVal=document.getElementById("jaRDin").value;
    let piscinE=document.getElementById("piscinE").value;
    let priXVal=document.getElementById("prix").value;
   
       let id_Rabah =xmlDoc.createTextNode(biens.length+1);
       ID.appendChild(id_Rabah);
       let type11_Text=xmlDoc.createTextNode(type11_value);
       type11q.appendChild(type11_Text);
       let superficie_Text = xmlDoc.createTextNode(superficie_value);
       superficieq.appendChild(superficie_Text);
       let localisation_Text = xmlDoc.createTextNode(localisation_value);
       localisationq.appendChild(localisation_Text);
       let consoEnergetique_Text = xmlDoc.createTextNode(consoEnergetique_value);
       consoEnergetiqueq.appendChild(consoEnergetique_Text);
       let etaAge_Text = xmlDoc.createTextNode(etaAge_value);
       etaAgeq.appendChild(etaAge_Text);//
       let assenceur_Text = xmlDoc.createTextNode(assenceur_value);
       assenceurq.appendChild(assenceur_Text);
       let jaRDin_Text = xmlDoc.createTextNode(jardinVal);
       jaRDinq.appendChild(jaRDin_Text);
       let piscineText = xmlDoc.createTextNode(piscinE);
       piscineq.appendChild(piscineText);
       let PRIX_Text2 = xmlDoc.createTextNode(priXVal);
       priXq.appendChild(PRIX_Text2);
       bien.append(ID);
       bien.appendChild(type11q);
       bien.appendChild(superficieq);
       bien.appendChild(localisationq);
       bien.appendChild(consoEnergetiqueq);
       bien.appendChild(etaAgeq);
       bien.appendChild(assenceurq);
       bien.appendChild(jaRDinq);
       bien.appendChild(piscineq);
       bien.appendChild(priXq);
     let Agence=xmlDoc.getElementsByTagName("AGENCE_IMMOBILIERE")[0];
       Agence.appendChild(bien);
       showPageLinks();
       fetchData();
   
   }


   function saveBiens() {  
    let xmlDoc=xmlhttp.responseXML;
    let create =document.getElementById("btnSave");
    let link = document.createElement('a');
    link.setAttribute('download','BEINrt_bdd.xml');
        const s = new XMLSerializer();

    link.href = makeTextFile(s.serializeToString(xmlDoc));
    document.body.appendChild(link);
    window.requestAnimationFrame(function () {
        let event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}
///////////////////////////zone filtres:////////////////////////////////
 // Fonction pour afficher les biens
 var xmlData;
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         xmlData = this.responseXML;
         afficherBiens();
     }
 };
 xhttp.open("GET", "../data/bdd.xml", true);
 xhttp.send();
var xmlDoc2;
function afficherBiens() {

    // Récupérer tous les éléments BIEN_IMMOBILIER de la base de données XML
    var biens = xmlData.getElementsByTagName("BIEN_IMMOBILIER");

    // Récupérer les valeurs des filtres depuis les champs du formulaire
    var prixMin = document.getElementById("prixMin").value;
    var prixMax = document.getElementById("prixMax").value;
    var quartier = document.getElementById("quartier").value;
    var typeBien = document.getElementById("typeBien").value;
    var textBiensTrie="<AGENCE_IMMOBILIERE>";
    // Parcourir tous les biens
    for (var i = 0; i < biens.length; i++) {
        var bien = biens[i];
        var prix = parseFloat(bien.querySelector("PRIX").textContent);
        var localisation = bien.querySelector("LOCALISATION").textContent;
        var type = bien.querySelector("TYPE").textContent;
        var id= bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;


        // Appliquer les filtres
        if (
            (prix >= prixMin && prix <= prixMax) &&
            (quartier === "Tous" || localisation.includes(quartier)) &&
            (typeBien === "Tous" || type === typeBien)
        ) {
           textBiensTrie+="<BIEN_IMMOBILIER>"+ "<ID>"+id+"</ID>"+"<PRIX>"+prix+" €"+"</PRIX>"+ "<LOCALISATION>"+localisation+"</LOCALISATION>"+"<TYPE>"+type+"</TYPE>"+"</BIEN_IMMOBILIER>";

            // Ajouter l'élément div au conteneur des résultats
        }
    }
    textBiensTrie+="</AGENCE_IMMOBILIERE>";
    //////dagui a seyigh athid afechigh amek akken i nexeddem di le tp
    var parser,
    parser = new DOMParser();
    xmlDoc1 = parser.parseFromString(textBiensTrie,"text/xml");
    showPageLinks1();
    fetchData1();

    /*let table="<tr><th>PRIX</th><th>LOCALISATION</th><th>TYPE</th></tr>";
    let x =xmlDoc1.getElementsByTagName("BIEN_IMMOBILIER");
    
    for (i = 0; i < x.length; i++) {
        table+= "<tr><td>" +
        x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
        "</td>" +         
        "</tr>";

    }
         resultatsDiv.innerHTML = table;*/
    ///////////////////////////////////////////////


}
// Fonction pour trier les biens par prix
function trierBiens() {
    let xmlDoc=xmlDoc2;
    tabResultat=document.getElementById("resultats");
    tabResultat.innerHTML ="<tr><th>PRIX</th><th>LOCALISATION</th><th>TYPE</th></tr>";
    var tri = document.getElementById("tri").value;
    let biens=xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
    const biensArray = Array.from(biens);
    biensArray.sort(function(a, b) { //dagui ixedem le tri
        const prixA = parseInt(a.getElementsByTagName('PRIX')[0].textContent, 10);
        const prixB = parseInt(b.getElementsByTagName('PRIX')[0].textContent, 10);
        return (tri === "asc") ? prixA - prixB : prixB - prixA;
    });
// Ajouter les biens triés au tableau
let i=1;
biensArray.forEach((bien)=> { //dagui nexedem une boucle pour parcourir les biens 
    const row = tabResultat.insertRow(-1); //pour chaque bien une nouvelle ligne est inséré dans le tableau nni andakken ara ad nettafichi i html
         // -1 indique d'ajouter une nouvelle ligne à la fin du tableau
    // Ajouter les cellules avec les données du bien
    const cells = [ 'PRIX', 'LOCALISATION','TYPE'];  // il sert juste akken an3awed la déclaration n la premire ligne nni => d assemi kan issent issema ifekka assent issemawen ara ath i3iwnen akken ad yaf les données di la base de données
    cells.forEach(cellName => {
      const cell = row.insertCell(-1);
      cell.textContent = bien.getElementsByTagName(cellName)[0].textContent;
    });
  });
}

/*gher bien wagui */
/*
const cells = [ 'PRIX', 'LOCALISATION','TYPE'];  un tableau cells est défini et il contient 
les noms de propriétés qu'on souhaite afficher 
dans le tableau html ces nom corrésponds au balises xml
qu'on a dans chaque bien immmobilier 

cells.forEach(cellName => { ... cela commence une autre 
    boucle ilehoun af les nom de propriété dans le tableaux cells 
    const cell = row.insertCell(-1); ... pour chaque propriété une 
    nouvelle cellule <td> est inséré dans la ligne <tr> 
    du tableau  le -1 nni indique toujours d'ajouter la cellule à la fin de
    la ligne.
    
cell.textContent = bien.getElementsByTagName(cellName)[0].textContent;
le contenu textuel de la cellule est défini s wayen 
akken ara ad nawi di la balise correspondate 
dans le bien immobilier actuel 
getElementsByTagName(cellName)[0].textContent
awid le premier elt avec le nom de la balise spécifié 
'cellName' dans le bien immobilier et 'textContent' 
récupére le texte à l'intérieur de cet elt

amek illehou: arnou la ligne, gezemittt, ameritt



*/
/*dagui ad xedma la pagination i les filtres nni  bighthid emporté ginna le tp*/
let nbPage1 = 0;
let pageSize1 = 5;
let startIndex1 = 0;
let endIndex1= 0;
let page1 = 1;
var xmlDoc1;
///////////////////////////input base de données:
function viderres1(){
    document.getElementById("resultats").innerHTML="";
    }
function rechercher1(event) {
    event.preventDefault(); // akken ur ixeddem ara refrech i la page nni après
    var termeRecherche = document.getElementById("inputbdd").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            afficherResultats1(this.responseXML, termeRecherche);
        }
    };
    xhttp.open("GET", "../data/bdd.xml", true);
    xhttp.send();
}
var xmlDoc1;
function afficherResultats1(xml, termeRecherche) {
    var resultatDiv = document.getElementById("resultats");
    resultatDiv.innerHTML = "";

    var biens = xml.getElementsByTagName("BIEN_IMMOBILIER");
    var textBiensTrie="<AGENCE_IMMOBILIERE>";

    for (var i = 0; i < biens.length; i++) {
        var bien = biens[i];
        var prix0 = bien.getElementsByTagName("PRIX")[0].textContent;
        var superficie0 = bien.getElementsByTagName("SUPERFICIE")[0].textContent;
        var localisation0 = bien.getElementsByTagName("LOCALISATION")[0].textContent;
        var bienType = bien.getElementsByTagName("TYPE")[0].textContent;
        var SRC0 = bien.getElementsByTagName("SRC1")[0].textContent;
        var etage0 = bien.getElementsByTagName("ETAGE")[0].textContent;
        var consoEnergetique0 = bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].textContent;
        var id= bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;

        // Utiliser une expression régulière pour la recherche dans n'importe quel champ
        var regexTermeRecherche = new RegExp(termeRecherche,'i');

        // Vérifier si le bien correspond aux critères de recherche
        if (
            regexTermeRecherche.test(prix0) ||
            regexTermeRecherche.test(superficie0) ||
            regexTermeRecherche.test(localisation0) ||
            regexTermeRecherche.test(bienType)
        ) {
            textBiensTrie+="<BIEN_IMMOBILIER>"+"<ID>"+id+"</ID>"+"<PRIX>"+prix0+" €"+"</PRIX>"+ "<LOCALISATION>"+localisation0+"</LOCALISATION>"+"<TYPE>"+bienType+"</TYPE>"+"<SUPERFICIE>"+superficie0+"</SUPERFICIE>"+"<SRC1>"+SRC0+"</SRC1>"+"<ETAGE>"+etage0+"</ETAGE>"+"<CONSO_ENERGETIQUE>"+consoEnergetique0+"</CONSO_ENERGETIQUE>"+"</BIEN_IMMOBILIER>";

        }
    }
    textBiensTrie+="</AGENCE_IMMOBILIERE>";
    //////dagui a seyigh athid afechigh amek akken i nexeddem di le tp
    var parser,
    parser = new DOMParser();
    xmlDoc1 = parser.parseFromString(textBiensTrie,"text/xml");
    showPageLinks1();
    fetchData1();
}










function fetchData1() {
    let i;
    let xmlDoc =xmlDoc1; 
    document.getElementById("resultats").innerHTML ="";
    let table1="<tr><th>PRIX</th><th>LOCALISATION</th><th>TYPE</th></tr>";
    let x = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
        
    //Calculer nbPage    
    
    //Caculer startIndex et endIndex  
    startIndex1 = (page1-1)*pageSize1;
    endIndex1 = startIndex1+pageSize1; // d wagui gayed igella le problème 
    var textBiensTrie1="<AGENCE_IMMOBILIERE>";
    //Mettre à jour la boucle en tenant compte startIndex et endIndex
    for (i = startIndex1; i < endIndex1; i++) {
        var id= x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;        
        table1+= "<tr><td>" +
        x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
        "</td>" +         
        "</tr>";
    textBiensTrie1+="<BIEN_IMMOBILIER>"+ "<ID>"+id+"</ID>"+"<PRIX>"+ x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue+"</PRIX>"+ "<LOCALISATION>"+x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue+"</LOCALISATION>"+"<TYPE>"+ x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue+"</TYPE>"+"</BIEN_IMMOBILIER>";

    }
    textBiensTrie1+="</BIEN_IMMOBILIER>";
    var parser,
    parser = new DOMParser();
    xmlDoc2 = parser.parseFromString(textBiensTrie1,"text/xml");
    
    
    document.getElementById("resultats").innerHTML = table1;
}
////////////////////////////////////


function loadPage1(pageNumber1) {
    page1 = pageNumber1;
    fetchData1();
}   
let nb_button1;
function showPageLinks1() {
     let xmlDoc=xmlDoc1;
     nb_button1= xmlDoc.getElementsByTagName("BIEN_IMMOBILIER").length/pageSize;
    let divpl1 = document.getElementById("pageLinks1");
    divpl1.style.display = "block";
    let divModif=document.getElementById("pageLinks1");

    let pageLinks1="";
    for(i=1;i<=nb_button1;i++){
        pageLinks1+="<input type='button' onclick='loadPage1("+i+")'value='"+i+"' class=\"btn btn-light\"></input>";
    }
 
    divModif.innerHTML=pageLinks1;
}






//////////////////////////////////////////Recherche avec input
function viderres(){
document.getElementById("resultats11").innerHTML="";
}


function rechercher(event) {
    event.preventDefault(); // akken ur ixeddem ara refrech i la page nni après
    var termeRecherche = document.getElementById("BVDIDIUZHD").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            afficherResultats(this.responseXML, termeRecherche);
        }
    };
    xhttp.open("GET", "./data/bdd.xml", true);
    xhttp.send();
}
var xmlDoc3;
function afficherResultats(xml, termeRecherche) {
    var resultatDiv = document.getElementById("resultats11");
    resultatDiv.innerHTML = "";

    var biens = xml.getElementsByTagName("BIEN_IMMOBILIER");
    var textBiensTrie="<AGENCE_IMMOBILIERE>";

    for (var i = 0; i < biens.length; i++) {
        var bien = biens[i];
        var prix0 = bien.getElementsByTagName("PRIX")[0].textContent;
        var superficie0 = bien.getElementsByTagName("SUPERFICIE")[0].textContent;
        var localisation0 = bien.getElementsByTagName("LOCALISATION")[0].textContent;
        var bienType = bien.getElementsByTagName("TYPE")[0].textContent;
        var SRC0 = bien.getElementsByTagName("SRC1")[0].textContent;
        var etage0 = bien.getElementsByTagName("ETAGE")[0].textContent;
        var consoEnergetique0 = bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].textContent;
        var id= bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        // Utiliser une expression régulière pour la recherche dans n'importe quel champ
        var regexTermeRecherche = new RegExp(termeRecherche,'i');

        // Vérifier si le bien correspond aux critères de recherche
        if (
            regexTermeRecherche.test(prix0) ||
            regexTermeRecherche.test(superficie0) ||
            regexTermeRecherche.test(localisation0) ||
            regexTermeRecherche.test(bienType)
        ) {
            textBiensTrie+="<BIEN_IMMOBILIER>"+ "<ID>"+id+"</ID>"+"<PRIX>"+prix0+" €"+"</PRIX>"+ "<LOCALISATION>"+localisation0+"</LOCALISATION>"+"<TYPE>"+bienType+"</TYPE>"+"<SUPERFICIE>"+superficie0+"</SUPERFICIE>"+"<SRC1>"+SRC0+"</SRC1>"+"<ETAGE>"+etage0+"</ETAGE>"+"<CONSO_ENERGETIQUE>"+consoEnergetique0+"</CONSO_ENERGETIQUE>"+"</BIEN_IMMOBILIER>";

        }
    }
    textBiensTrie+="</AGENCE_IMMOBILIERE>";
    //////dagui a seyigh athid afechigh amek akken i nexeddem di le tp
    var parser,
    parser = new DOMParser();
    xmlDoc3 = parser.parseFromString(textBiensTrie,"text/xml");
    showPageLinks3();
    fetchData3();
}
///////////////////dagui d les filtres nni illan di la page principale:

var xmlData1;
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         xmlData1 = this.responseXML;
         afficherBiens3();
     }
 };
 xhttp.open("GET", "./data/bdd.xml", true);
 xhttp.send();

let nbPage3 = 0;
let pageSize3 = 3;
let endIndex3= 0;
let page3 = 1;
function afficherBiens3() {

    // Récupérer tous les éléments BIEN_IMMOBILIER de la base de données XML
    var biens = xmlData1.getElementsByTagName("BIEN_IMMOBILIER");

    // Récupérer les valeurs des filtres depuis les champs du formulaire
    var prixMin = document.getElementById("prixMin").value;
    var prixMax = document.getElementById("prixMax").value;
    var quartier = document.getElementById("quartier").value;
    var typeBien = document.getElementById("typeBien").value;
    var textBiensTrie="<AGENCE_IMMOBILIERE>";
    // Parcourir tous les biens
    for (var i = 0; i < biens.length; i++) {
        var bien = biens[i];
        var id= bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        var prix = parseFloat(bien.querySelector("PRIX").textContent);
        var localisation = bien.querySelector("LOCALISATION").textContent;
        var type = bien.querySelector("TYPE").textContent;
        var superficie0 = bien.getElementsByTagName("SUPERFICIE")[0].textContent;
        var SRC0 = bien.getElementsByTagName("SRC1")[0].textContent;
        var etage0 = bien.getElementsByTagName("ETAGE")[0].textContent;
        var consoEnergetique0 = bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].textContent;
        

        // Appliquer les filtres
        if (
            (prix >= prixMin && prix <= prixMax) &&
            (quartier === "Tous" || localisation.includes(quartier)) &&
            (typeBien === "Tous" || type === typeBien)
        ) {
           textBiensTrie+="<BIEN_IMMOBILIER>"+ "<ID>"+id+"</ID>"+"<PRIX>"+prix+" €"+"</PRIX>"+ "<LOCALISATION>"+localisation+"</LOCALISATION>"+"<TYPE>"+type+"</TYPE>"+"<SUPERFICIE>"+superficie0+"</SUPERFICIE>"+"<SRC1>"+SRC0+"</SRC1>"+"<ETAGE>"+etage0+"</ETAGE>"+"<CONSO_ENERGETIQUE>"+consoEnergetique0+"</CONSO_ENERGETIQUE>"+"</BIEN_IMMOBILIER>";

            // Ajouter l'élément div au conteneur des résultats
        }
    }
    textBiensTrie+="</AGENCE_IMMOBILIERE>";
    //////dagui a seyigh athid afechigh amek akken i nexeddem di le tp
    var parser,
    parser = new DOMParser();
    xmlDoc3 = parser.parseFromString(textBiensTrie,"text/xml");
    showPageLinks3();
    fetchData3();
}


function fetchData3() {
    let i;
    let xmlDoc =xmlDoc3; 
    let assmiri=document.getElementById("resultats11");
    assmiri.innerHTML ="";
    let biens = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
        
    //Calculer nbPage    
    
    //Calculer startIndex et endIndex  
    startIndex3= (page3-1)*pageSize3;
    endIndex3 = startIndex3+pageSize3; // d wagui gayed igella le problème 
    var content3="";
    for (i = startIndex3; i < endIndex3; i++) {        
        var bien = biens[i];
        var prix0 = bien.getElementsByTagName("PRIX")[0].textContent;
        var superficie0 = bien.getElementsByTagName("SUPERFICIE")[0].textContent;
        var localisation0 = bien.getElementsByTagName("LOCALISATION")[0].textContent;
        var bienType = bien.getElementsByTagName("TYPE")[0].textContent;
        var SRC0 = bien.getElementsByTagName("SRC1")[0].textContent;
        var etage0 = bien.getElementsByTagName("ETAGE")[0].textContent;
        var consoEnergetique0 = bien.getElementsByTagName("CONSO_ENERGETIQUE")[0].textContent;
        var id= bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
            content3+="<div class=\"col\">"
            content3+="           <div class=\"card shadow-sm\">"
            content3+="              <img src=\""+SRC0+"\" class=\"img-fluid\" width=\"100%\"  alt=\"myImage\">"
            content3+="               <div class=\"card-body\">"
            content3+="                    <p class=\"card-text\"><span class=\"onEuvre\">"+localisation0 +",</span> <br > <div class=\"mon-conteneur\"><span class=\"mon-texte\">"+bienType+"</span></div>"
            content3+="  de <span style=\"font-weight: bold;\">"+superficie0+" </span> , situé au <span style=\"font-weight: bold;\">"+etage0+" étage </span>."
            content3+=" <br>  Sa <span style=\"font-weight: bold;\">consommation energetique </span>  est <span style=\"font-weight: bold;\"> ("+consoEnergetique0+") </span>"
            content3+="<br>  <span id=\"prix\"> "+prix0 +"</span>"+"</p>"
            content3+="                  <div class=\"d-flex justify-content-between align-items-center\">"
            content3+="                        <div class=\"btn-group\">"
            content3+="                           <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" onclick=\"chargerdetailsdansPagesprincipales(" +bien.getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">Consulter</button>"
            content3+="                       </div>"
            content3+="                        <img src=\"./PICTURES/nouVLog/LogoBagita1.png\" class=\"img-thumbnail\" alt=\"lgo\" width=\"50px\">"
            content3+="                   </div>"
            content3+="                </div>"
            content3+="           </div>"
            content3+="        </div>"
        
    }
    

    
    assmiri.innerHTML = content3;
}

function loadPage3(pageNumber) {
    page3 = pageNumber;
    fetchData3();
}   

function showPageLinks3() {
     
    let nb_button=xmlDoc3.getElementsByTagName("BIEN_IMMOBILIER").length/pageSize3;
    let divpl = document.getElementById("pageLinks3");
    divpl.style.display = "block";
    let divModif=document.getElementById("pageLinks3");



    let pageLinks="";
    for(i=1;i<=nb_button;i++){
        pageLinks+="<input type='button' onclick='loadPage3("+i+")'value='"+i+"' class=\"btn btn-light\"></input>";
    }
 
    divModif.innerHTML=pageLinks;
}


//////////////////////////////////////////
//affichage des biens dans une division:

   // Fonction pour charger et afficher les données XML dans une div
   function loadXMLDatacc() {
    // Récupérer la référence à la div où les données seront affichées
    var dataDiv = document.getElementById("miqmiq");

    // Créer un objet XMLHttpRequest pour effectuer la requête XML
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data/bdd.xml", true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Parser le XML
            var xmlDoc = xmlhttp.responseXML;

            let x = xmlDoc.getElementsByTagName("BIEN_IMMOBILIER");
            var content = "";
            startIndex = (page-1)*pageSize;
            endIndex = startIndex+pageSize;
            for (var i =3; i <8; i++) {
                var type0 = x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue;
                var superficie0 = x[i].getElementsByTagName("SUPERFICIE")[0].childNodes[0].nodeValue;
                var localisation0 = x[i].getElementsByTagName("LOCALISATION")[0].childNodes[0].nodeValue;
                var consoEnergetique0 = x[i].getElementsByTagName("CONSO_ENERGETIQUE")[0].childNodes[0].nodeValue;
                var etage0 = x[i].getElementsByTagName("ETAGE")[0].childNodes[0].nodeValue;
                var SRC0 = x[i].getElementsByTagName("SRC1")[0].childNodes[0].nodeValue;
                var prix0 = x[i].getElementsByTagName("PRIX")[0].childNodes[0].nodeValue;
                var details=  +x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue 
                content+="<div class=\"col\">"
                content+="           <div class=\"card shadow-sm\">"
                content+="              <img src=\""+SRC0+"\" class=\"img-fluid\" width=\"100%\"  alt=\"myImage\">"
                content+="               <div class=\"card-body\">"
                content+="                    <p class=\"card-text\"><span class=\"onEuvre\">"+localisation0 +",</span> <br > <div class=\"mon-conteneur\"><span class=\"mon-texte\">"+type0+"</span></div>"
                content+="  de <span style=\"font-weight: bold;\">"+superficie0+" </span> , situé au <span style=\"font-weight: bold;\">"+etage0+" étage </span>."
                content+=" <br>  Sa <span style=\"font-weight: bold;\">consommation energetique </span>  est <span style=\"font-weight: bold;\"> ("+consoEnergetique0+") </span>"
                content+="<br>  <span id=\"prix\">€ "+prix0 +"</span>"+"</p>"
                content+="                  <div class=\"d-flex justify-content-between align-items-center\">"
                content+="                        <div class=\"btn-group\">"
                content+="                           <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"onclick=\"chargerdetailsdansPagesprincipales(" +x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">Consulter</button>"
                content+="                       </div>"
                content+="                       <small class=\"text-body-secondary\">à vendre</small>"
                content+="                        <img src=\"./PICTURES/nouVLog/LogoBagita1.png\" class=\"img-thumbnail\" alt=\"lgo\" width=\"70px\">"
                content+="                   </div>"
                content+="                </div>"
                content+="           </div>"
                content+="        </div>"


            }

            dataDiv.innerHTML = content;
        }
    };
    xmlhttp.send();
}



