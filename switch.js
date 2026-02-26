// se utiliza para elegir un camino de varios preestablecidos. Tenemos 2 tipos principales:

// * Sintaxis simple:
// switch(evaluacion){
//    case n1:
//    //codigo
//    breack;
//    case n2:
//    //codigobreack;
//    default:
//    //codigo
// }

// * Sintaxis multiple:
//     switch(evaluacion){
//         case n1:
//         case n2:
//         case n3:
//         //codigo;
//         breack;
//         default:
//         //codigo
//     }


let n4 = 2;

switch(n4){
    case 1: 
        console.log(`${n4} tiene el valor 1`);
        break;
    case 2:
        console.log(`${n4} tiene el valor 2`);
        break;
    default:
        console.log(`${n4} no es ni 1 ni 2`);
        break;
}

switch(n4){
    case 1:
    case 3:
    case 5:
        console.log(`${n4} es impar`);
    break;
    case 2:
    case 4:
        console.log(`${n4} es par`);
}