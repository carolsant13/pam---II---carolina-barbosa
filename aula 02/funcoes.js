let num1 = 3
const num2 = 2
var msg = "ola amigos! esse é o numero: "

console.log (msg, num1);
console.log (num1 , num2);
console.log(typeof num1);
console.log(typeof msg);

function Somar (){
    n1= 2
    n2= 5
    console.log ("o resultado é: ", n1 + n2 );
}
 Somar()
 Somar()

 function SomarComParametros (n1 , n2) {
     let resultado = "o resultado é: "+ (n1+n2);
     console.log(resultado);
 }

 SomarComParametros(16, 30);
 SomarComParametros(70, 54);

 const Teste = (n) => {
     let result =n % 2;

     if (result==1){
         return "Numero impar"
     }
     return "Numero par"
 }

 console.log (Teste(2));
 console.log (Teste(7));
