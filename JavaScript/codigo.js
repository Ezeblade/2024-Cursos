/*amor = "panda <3";
sting = "Me encantan los pandas";
Number = 0.5;
Boolean = true;
alert (Number);
alert (amor);

const pi = 3.14;//no cambia su valor
let numero; //se puede establecer un valor, Undefined
numero = 9;
alert (numero);
alert (pi);

let numero = 23, numero2 = 9, numero3 = 13; // se pueden establecer varias divididas por ","

let numero = null;

let numero1 = 5, numero2 = 10;
alert (numero1 + numero2);


let nombre = prompt ("cual es tu nombre?")

alert ("hola " +  nombre)
*/


//let numero = 10;
//numero +=10 //suma
//numero %= 3 //resto
//numero **= 3 //exponencial
//animal = "Pandaaass"
//favorito = "Que animal te gustaaa? "
//numero1 = 5;
//numero2 = 10;
//frase =  numero1.concat(numero2)//necesita si o si un string
//nombre = "eze"
//cadena = `Soy ${nombre} me gustan los pandas`
   //opcion mas facil en vez del concat
//alert (cadena)
//frase = `mi nombre es "eze" y soy crack`; no me funciono
//document.write(frase);

/*let numero = 2;
let numero2 = 3;
let texto = "panda";
let texto2 = "panda";
document.write(texto == texto2); //son iguales
document.write(texto === texto2); // estrictamente iguales
document.write(texto !== texto2); //estrictamente distinto de dato y numero
document.write(texto != texto2); //distinto


let valor = true;
let valor2= true;

let resultado = valor && valor2;
let resultado = valor || valor2;
let resultado = valor = valor2;

num1 = 2;
num2 = 4;

afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;
document.write(!afirmacion1); // && and // || si una es verdadero todos // ! contrario


num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = true


animal = "gato"
if ( animal == "tigre") {
   alert ("tu animal es tigre");
}
else if (animal == "panda") {
   alert ("tu animal es panda");
}
else {
   alert ("tu animal es otro");
}
*/

dineroRoberto = prompt ("cuanto dinero tienes, roberto?");
dineroPedro = prompt ("cuanto dinero tienes, Pedro?");
dineroCofla = prompt ("cuanto dinero tienes, Cofla?");

palitoAgua = 0.6;
palitoCrema = 1;
bombonHeladix = 1.6;
bombonHeladovich = 1.7;
bombonHelardo = 1.8;
potecitoConfites = 2.9;
poteCuarto = 2.9;

if (dineroRoberto >= palitoAgua && dineroRoberto < palitoCrema) {
   alert ("Roberto comprate el palito de agua :D")
}
else if (dineroRoberto >= palitoCrema && dineroRoberto < bombonHeladix){
   alert ("Roberto comprate el palito de crema :D");
}
else if (dineroRoberto >= bombonHeladix && dineroRoberto < bombonHeladovich){
  alert ("Roberto comprate el bombon de heladix :D");
}
else if (dineroRoberto >= bombonHeladovich && dineroRoberto < bombonHelardo){
   alert ("Roberto comprate el bombon de heladovich :D");
}
else if (dineroRoberto >= bombonHelardo && dineroRoberto < potecitoConfites){
   alert ("Roberto comprate el bombon de helardo :D");
}
else if (dineroRoberto >= potecitoConfites){
   alert ("Roberto comprate el potecito de confites y el de medio cuarto :D");
}
else {
   alert ("raja que no tenes plata :D");
}


if (dineroPedro >= palitoAgua && dineroPedro < palitoCrema) {
   alert ("Pedro comprate el palito de agua :D")
}
else if (dineroPedro >= palitoCrema && dineroPedro < bombonHeladix){
   alert ("Pedro comprate el palito de crema :D");
}
else if (dineroPedro >= bombonHeladix && dineroPedro < bombonHeladovich){
  alert ("Pedro comprate el bombon de heladix :D");
}
else if (dineroPedro >= bombonHeladovich && dineroPedro < bombonHelardo){
   alert ("Pedro comprate el bombon de heladovich :D");
}
else if (dineroPedro >= bombonHelardo && dineroPedro < potecitoConfites){
   alert ("Pedro comprate el bombon de helardo :D");
}
else if (dineroPedro >= potecitoConfites){
   alert ("Pedro comprate el potecito de confites y el de medio cuarto :D");
}
else {
   alert ("raja que no tenes plata :D");
}

if (dineroCofla >= palitoAgua && dineroCofla < palitoCrema) {
   alert ("Cofla comprate el palito de agua :D")
}
else if (dineroCofla >= palitoCrema && dineroCofla < bombonHeladix){
   alert ("Cofla comprate el palito de crema :D");
}
else if (dineroCofla >= bombonHeladix && dineroCofla < bombonHeladovich){
  alert ("Cofla comprate el bombon de heladix :D");
}
else if (dineroCofla >= bombonHeladovich && dineroCofla < bombonHelardo){
   alert ("Cofla comprate el bombon de heladovich :D");
}
else if (dineroCofla >= bombonHelardo && dineroCofla < potecitoConfites){
   alert ("Cofla comprate el bombon de helardo :D");
}
else if (dineroCofla >= potecitoConfites){
   alert ("Cofla comprate el potecito de confites y el de medio cuarto :D");
}
else {
   alert ("raja que no tenes plata :D");
}