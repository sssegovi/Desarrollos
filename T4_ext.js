
function respuestaejer() {
    alert ('  Ver resultado por consola ')
}

class Gelatina {
  constructor(marca,azucar,sabor,color,proteina,tipo)
    {
        this.marca      =  marca;    //Marca
        this.azucar     =  azucar;   //Nivel de Azucar
        this.sabor      =  sabor;    //Sabor
        this.color      =  color;    //Color
        this.proteina   =  proteina; //Cantidade de Protenas
        this.tipo       =  tipo;     //Polvo o Solida
    }
    //marca
    MarcaGel(){
        return "La Marca de la Gelatina es " + this.marca;
    }
    //azucar 
    NivelAzu(){
        return "EL nivel de Azucar es " + this.azucar;
    }
    //sabor
    SaborGel(){
        return "EL Sabor es " + this.sabor;
    }
    //color
    ColorGel(){
        return "EL color es " + this.color;
    }
    //proteinas
    PorteGel(){
        return "EL nivel de proteinas es " + this.proteina;
    }
    //tipo
    TipoGel(){
        return "EL tipo es " + this.tipo;
    }

}

var GelatinaN1 =  new Gelatina ("Frutiño",90,"FRESA","ROJO",80,"POLVO") 
var GelatinaN2 =  new Gelatina ("Royal",60,"UVA","MORADO",85,"SOLIDA") 
var GelatinaN3 =  new Gelatina ("Caserito",30,"PIÑA","AMARILLO",88,"POLVO") 
var GelatinaN4 =  new Gelatina ("Nacional",10,"MELOCOTON","ANARANJADO",90,"SOLIDA") 
var GelatinaN5 =  new Gelatina ("Inportado",20,"NARANJA","ANARANJADO",95,"POLVO") 
var GelatinaN6 =  new Gelatina ("Sorpresa",50,"MORA","ROJO",92,"SOLIDA") 


console.log(" El resultado por consola es ......");
console.log(GelatinaN1.MarcaGel() );
console.log(GelatinaN2.MarcaGel() +  " y " + GelatinaN2.ColorGel());
console.log(GelatinaN3.MarcaGel() +  " y " + GelatinaN3.NivelAzu());
console.log(GelatinaN4.MarcaGel() +  " y " + GelatinaN4.PorteGel());
console.log(GelatinaN5.MarcaGel() +  " y " + GelatinaN5.SaborGel());
console.log(GelatinaN6.MarcaGel() +  " y " + GelatinaN6.TipoGel());
    
   
    
    