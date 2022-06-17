// function double(arr) {
//     return arr.map(function(val) {
//         return val * 2;
//       });
//     }



 
// const double = (arr) => arr.map(val => val *2);



// // function (numbers){
// //     var squares = numbers.map(function(num){
// //       return num ** 2;
// //     });
// //     var evens = squares.filter(function(square){
// //       return square % 2 === 0;
// //     });
// //     return evens;
// //   }

// const squareAndFindEvens = (numbers) => 
//     // let squares = numbers.map(num => num **2);
//     // let evens = squares.filter(square=> square % 2 ===0)
//      evens = numbers.map(num => num **2).filter(num => num % 2 ===0);



const teaOrder = {
    variety: 'oolong',
    teaName: 'winter solstice',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3


};

const {teaName, origin, price} = teaOrder;
    


const {brewTemp = 175 } = teaOrder;

const { teaName: tea } = teaOrder;

const order1 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,

}

function checkOut(tea){
    const {quantity = 1, price} = tea;
    return quantity * price;
}

checkOut(teaOrder);