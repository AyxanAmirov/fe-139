//task-1

// let eded = +prompt("2 rəqəmli ədəd daxil edin:");
// while(eded<100){
//     eded+=7
// }
// console.log(eded);

//task-2

// let N = +prompt("Say daxil edin:")
// //10
// i=0;
// while(i<N){
//     i++
//     console.log("I know how to use cycles");
// }

//task-3

// for(i=100 ; i<1000 ; i+=10){
//       console.log(i);
// }

//task-4

//   let n = 0;
//   for (i = 10; i < 100; i++) {
//     if(i%2==1){
//         n+=i
//     }

// }
// console.log(n);

//task-5

// let value = +prompt("Ədəd daxil edin:")
// let n=0
// for(i=100 ; i<1000  ; i++){
//     if(i%value==0){
//         n+=i
//     }
// }
// console.log(n);

//task-6

// let n = +prompt("Ədəd daxil edin :");

// function sadeEded (repeat){
//     if (repeat <= 1) {
//         return false;
//     }
//     for(let i = 2 ; i < repeat ; i++){
//          if(repeat % i===0){
//             return false;
//          }
//     }
//     return true
// }
// function tekrar (n) {
//     for(i = n ; i > 1 ; i-- ){
//       if(sadeEded(i)){
//         console.log(i);
//       }
//     }

// }
// console.log(`${n}-dən 0 a qədər olan sadə ədədlər`);
// tekrar(n)

//task-7

// for(i=1 ; i<=10 ; i++){
//     for(j=1 ; j<=10; j++){
//         console.log(`${i} x ${j} = ${ i*j}`);
//     }
//     console.log("--------------------");
// }

//task-8

// let text = prompt("Mətn daxil edin");
// let umumi = text.length - 1;
// let total = ""
// for (let i = umumi; i >= 0; i--) {
//   let cavab = text.charAt(i);
//   total += cavab
// }
// console.log(total);

//task-9

// let text = prompt("Mətn daxil edin : ")
// let umumi = text.length - 1
// for(let i = 0 ; i<=umumi; i++ ){
//     let cavab = text.charAt(i)
//     if(cavab === "."){
//         console.log(i);
//         break;
//     }
// }

//task-10

// let text = prompt("Mətn Daxil Edin :");
// yoxlama(text)
// function yoxlama(text){
//     let reqemVar = false
//     for (let i = 0; i < text.length; i++) {
        
//         if (!isNaN(text.charAt(i))) {
//             reqemVar = true
//           break;
//         }
//       }
//       if(reqemVar){
//         console.log("Mətndə rəqəmlər var")
//       }else(
//         console.log("Mətndə rəqəmlər yoxdur")
//       )
// }




