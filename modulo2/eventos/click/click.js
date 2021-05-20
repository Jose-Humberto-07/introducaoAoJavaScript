//Eventos de Click

/**
 * onClick: quando o elemento é clicado 1 vez
 * 
 * 
 * onDblClick: quando o elemento é clicado 2 vezes (clique rápido)
 */



 function umClique() {
     document.getElementById("imagem").src="fachada.png";
     document.getElementById("log").innerHTML += "troca para a foto da fachada<br>";
 }


 function doisCliques() {
     document.getElementById("imagem").src="ifrs.png";
     document.getElementById("log").innerHTML += "troca para o logo IFRS_BG<br>";

 }