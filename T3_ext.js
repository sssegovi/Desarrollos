
valor1 = null;
valor2 = null;
valor3 = null;
valor4 = null;
valor5 = null;
valor6 = null;

function respuestaejer() {

    var  val_1 = document.getElementById("valor1").value;    
    var  val_2 = document.getElementById("valor2").value;
    var  val_3 = document.getElementById("valor3").value;
    var  val_4 = document.getElementById("valor4").value;
    var  val_5 = document.getElementById("valor5").value;
    var  val_6 = document.getElementById("valor6").value;

    
    ArrayOriginal = new Array(6);

    ArrayOriginal[0] = val_1;
    ArrayOriginal[1] = val_2;
    ArrayOriginal[2] = val_3;
    ArrayOriginal[3] = val_4;
    ArrayOriginal[4] = val_5;
    ArrayOriginal[5] = val_6;

    var miArrayOriginal = [ArrayOriginal[0], ArrayOriginal[1], ArrayOriginal[2], ArrayOriginal[3], ArrayOriginal[4], ArrayOriginal[5]];
    
    var miArray = [ArrayOriginal[0], ArrayOriginal[1], ArrayOriginal[2], ArrayOriginal[3], ArrayOriginal[4], ArrayOriginal[5]];
    
    var msg ='El arreglo inicial es: ' + miArrayOriginal +'\n';
    
    msg = msg + 'Ordenado de menor a mayor es ' + miArray.sort(deMenorAMayor)+'\n';
    
    alert(msg);

}
    
    function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
    
    