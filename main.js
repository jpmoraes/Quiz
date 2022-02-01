function mostrarValor(){
   alert('Resultado é ' + getResultado())

}

function getResultado(){

var q1 = document.querySelector('input[name="selector"]:checked').value;
var q2 = document.querySelector('input[name="selector1"]:checked').value;
var resul = 0;

if (q1 === '2'){
    
    resul = resul + 10;
} else{
    resul = resul + 0;
}

if (q2 === '1'){
    
    resul = resul + 10;
} else{
    resul = resul + 0;
}

return resul;

}