//ATAJOS DEL VISUAL

////////expresiones y declaraciones.////////
//expresiones: produce un valor y puede ser escrita en cualquier lugar donde espere un valor
//declaracion: ejecuta una accion, sin producir valor.
//             puede ser reemplazada por una expresion.
//alert("hola");
//var nombre = prompt("cual es tu nombre?");
//console.log(nombre);
//console.log(prompt("cual es tu nombre?"));// abre ventana y devuelve el valor que introduscamos
//confirm("eres mayor de 18?");// abre ventana y devueve verdadero o falso

/////////manipulacion de tipos///////

//valores literales: son los valores que toman las variables sin que ningun usuario los ingrese

// convertir de string a num
// parseInt();
// var number = "123";
// console.log(typeof(number));
// number = parseInt(number);
// console.log(typeof(number));

// Number()
// var number = "123";
// console.log(typeof(number));
// number = Number("123");
// console.log(typeof(number));

// =+
// var number = "123";
// console.log(typeof(number));
// number =+ number;
// console.log(typeof(number));

//isNaN: devuelve true cuando el string no se puede convertir number
//b      false cuando el string si se puede convertir a numero
// var numero = isNaN("123");
// console.log(numero);//false
// numero = isNaN("tres");
// console.log(numero);//true

//numero.toString: convertir de numero a string
// var numero = 123;
// console.log(typeof(numero));
// numero = numero.toString();
// console.log(typeof(numero));

//mayusculas y minusculas
// var nombre = "Yeyo";
// console.log(nombre.toUpperCase());//"YEYO"
// console.log(nombre.toLowerCase());//"yeyo"

///////////////////////////////////////////
/////ejercicios/////
//1
// const name = prompt("Cual es tu nombre?");
// console.log ("Tu nombre es " + name);
//2
// const num1=+ prompt("ingrese un numero");
// const num2=+ prompt("ingrese otro numero");
// let result= num1 + num2;
// console.log(" la suma es: " + result);
//3
// const num1=+ prompt("ingrese un numero");
// const num2=+ prompt("ingrese otro numero");
// let result= (num1 + num2) * 2;
// console.log("el doble de la suma es: " + result);
// 4
// const num1=+ prompt("ingrese la base");
// const num2=+ prompt("ingrese la altura");
// let result= num1 * num2;
// console.log("el area es: " + result);
//5
// let nombre = prompt("ingrese su nombre:");
// console.log(nombre.toLowerCase());
//6
// let apellido = prompt("ingrese su apellido:");
// console.log(apellido.toUpperCase());
//7
// let nombre = prompt("ingrese su nombre:");
// let apellido = prompt("ingrese su apellido:");
// let edad = prompt("ingrese su edad:");
// console.log("Nombre: " + nombre);
// console.log("Apellido: " + apellido);
// console.log("Edad: " + edad);

////////////////////////////////////////////
//1
// let numeral="";
// for(i = 0; i<5; i++){
//     numeral = numeral+ "#";
//     console.log(numeral);
// }
//2
// for(i=0; i < 10; i++){
//     if(i%2){
//         console.log(i + " impar");
//     }else{
//         console.log(i + " par")
//     }
// }
//3
// for(i=1;i<16;i++){
//     // if ((i%3) === 0 && (i%5 ) === 0){
//         //     console.log("Fizz Buzz");
//         // }else if((i%3) === 0){
//             //     console.log("Fizz");//Fizz
//             // }else if ((i%5) === 0){
//                 //     console.log("Buzz");//Buzz
//                 // }else{
//                     //     console.log(i);
//                     // }
//     let text = "";
//     if((i%3) === 0){
//         text = text + "Fizz ";
//     }
//     if ((i%5) === 0){
//         text = text + "Buzz";
//     }
//     if (!((i%3) === 0) && !((i%5 ) === 0)){
//         text = text + i;
//     }
//     console.log(text);
// }
