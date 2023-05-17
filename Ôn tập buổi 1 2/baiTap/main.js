// BÀI 1:  Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
//  Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )

// const arr1 = [1,2,4,5,6];
// const arr2 = [1, 6, 8, 9, 0];
// // dùng inludes để kiểm tra xem number có nằm trong arr2 k
// const Numbers = arr1.filter((number) => arr2.includes(number));

// console.log(Numbers);

// //Bài 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.

// const arr = [1,54,6,7];

// const newArray = arr.map ((value,index)=>{
//     return value + 5;

// })
// console.log (newArray);

//Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
// Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.

function removeElement (){
const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];

const mn = [...m,...n];

const conditionArr = [1,8,10,96,7]

const result = mn.filter((element) =>{
    return !conditionArr.includes(element);

})
    return result;

}
console.log(removeElement());


 // BÀI 4
//  const players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]

// const playersModified = {
//   11: players[0],
//   12: players[1],
//   13: players[2],
//   14: players[3],
//   15: players[4],

// };

//  console.log(playersModified)

