//task-1

// const user = {
//  name:"Ayxan",
//  gender:"K",
//  birthday: 24.05
// }
// console.log(user.birthday);

//task-2

// const user = {
//  name:"Ayxan",
//  gender:"K",
//  birthday: 24.05
// }
// user.age = 19
// delete user.birthday
// console.log(user);

//task-3

// const user = {
//   name: "Ayxan",
//   gender: "K",
//   birthday: 24.05,
//   setAge: function (personAge) {
//     if(personAge>=0 && personAge<=65 && personAge !== +""){
//         user.age = personAge;
//     }else{
//         alert("Mırtdaşırsan mənnən?")
//     }
//   },
//   getYearsBeforeRetirement: function (userAge){
//     const retirementAge = 65
//     if(userAge){
//         user.year = retirementAge - userAge
//     }
//   }
// };
// user.age = +"";
// delete user.birthday;
// let yourAge = +prompt("Yaşınızı girin")
// user.setAge(yourAge)
// user.year = +" "
// user.getYearsBeforeRetirement(user.age)
// if (user.year){
//     console.log(user.year);
// }

//task-4

// const client = {
//   fullName: "Ayxan Amirov",
//   creditLimit: 1500,
//   balans: -100,
//   precentOfMinPayment: 20,
//   getBalance: (balans) => {
//     if (balans > 0) {
//       return `Balansınız ${balans}`;
//     } else {
//       return `borcunuz ${balans} `;
//     }
//   },
//   getMinPayment: (balans, minPay) => {
//     if (balans > 0) {
//       return `Sizin borcunuz yoxdur`;
//     } else {
//       let minimumOdenis = (balans * minPay) / 100;
//       return `Minimum ödənişiniz ${minimumOdenis}`;
//     }
//   },
//   withdraw: (azaldilan) => {
//     let cariBalans = client.balans + client.creditLimit;
//     if (client.balans >= azaldilan) {
//       client.balans = client.balans - azaldilan;
//       return `balansiniz ${client.balans}`;
//     } else if (cariBalans >= azaldilan ) {
//       if (client.balans > 0 ) {
//         let totalBalans = client.balans - azaldilan;
//         client.balans = client.balans - azaldilan;
//         client.creditLimit = client.creditLimit + totalBalans;
//         return `balansiniz: ${client.balans},Kredit Limitiniz: ${client.creditLimit}`;
//       }else{
//         client.creditLimit = client.creditLimit - azaldilan;
//         client.balans = client.balans - azaldilan
//         return `Balansiniz: ${client.balans}, Kredit Limitiniz:${client.creditLimit}`
//       }
//     }else{

//       return `movcud balans kifayet deyil : ${cariBalans} `
//     }
//   },
//   refill: (artirilan) => {
//     client.balans = client.balans + artirilan;
//     return `balansiniz ${client.balans}`;
//   },
// };
// let balans = client.balans;
// let minPayment = client.precentOfMinPayment;
// console.log(client.getBalance(balans));
// console.log(client.getMinPayment(balans, minPayment));
// console.log(client.withdraw(1800));
// console.log(client.refill(100));

//task-5

// let calc = {
//   history: "",
//   answer: "",
//   toplama: function (a, b) {
//     this.answer = a + b;
//   },
//   cixma: function (a, b) {
//     this.answer = a - b;
//   },
//   vurma: function (a, b) {
//     this.answer = a * b;
//   },
//   bolme: function (a, b) {
//     this.answer = a / b;
//   },
//   addToHistory: function (param) {
//     this.history = param;
//   },
//   showHistory: function () {
//     console.log(this.history);
//   },
//   removeHistory: function () {
//     this.history = "";
//   },
// };

// calc.vurma(10, 10);
// calc.showHistory()
// calc.addToHistory(calc.answer)
// calc.showHistory()
// calc.removeHistory()
// calc.showHistory()
