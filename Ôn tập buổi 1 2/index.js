// Arrow function
// Phải khởi tạo trước khi gọi ( không có hoisting như function bthg)\
// Arrow funciton k có context ****************;


// var sum = 0;

// let  Sum =  (a,b) => {

//     return a + b;




// }
// console.log(Sum(2,6));

// let Tich = (a) => {
//     return a * a; // hoặc a **2 ;




// // }
// // console.log(Tich(6));




// // TEMPLATE LITERAL ${tham số} vào dùng ``;*****************************

// const name = 'Hoang Duc';

// const str = ` 
//         Xin chào ${name},
//         Chào mừng đến với website`;
// console.log (str);




// // SPREAD AND REST OPERATOR *****************
// // Định nghĩa : toán tử Spread operator trải thẳng  các phần tử của 1 đối tượng tập hợp (array,object,set);
// // Dùng cú pháp ...

// const arr = [1,2,3];
// console.log (...arr);

// // sao chép 1 array và tạo 2 biến có địa chỉ ô nhớ khác nhau, biến sao chép k đè lên dữ liệu của biến gốc

// const num1 = [1,2,3];
// // const num2 = num1; như này k dùng spread thì sẽ bị ghi đè
// const num2 = [...num1];

// num2[2] = 33 ;
// console.log (num1);
// console.log (num2);

// // Gộp array, object

// const nameAndAge = { name: 'Nguyễn Văn A', age: 18};
// const gpa = {gpa: '3.8'};

// const student = {
//     ...nameAndAge,
//     ...gpa
// }

// console.log (student)

// // ví dụ 2

// const student1 = { name: 'Nguyễn Văn A', age: 18, gpa : 3.9};
// const student2 = { name: 'Đỗ Văn B', age: 19};
// const student3 = {...student1,...student2}; // Spread sẽ ghi đè từ trái qua phải, nếu trùng key sẽ lấy dữ liệu của object đứng sau

// console.log(student3);


// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const arr3 = [...arr1,...arr2];

// console.log(arr3);


// REST OPERATOR
// là cách tạo 1 function với vô số tham số truyền vào
// trong 1 function chỉ có 1 spread operator và spread operator phải nằm ở cuối( ví dụ  function total(a,b,...arr){

// })

// có thể khởi tạo gía trị cho parameter ngay khi khởi tạo ( dạng default value function total(a=1){})

// function total(...arr){
//     let sum = 0;
//     for ( i  = 0; i< arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;

// }
// console.log(total(-1,2,3));
// console.log(total(1,2,3,4,5));


// DESTRUCTURING**********************************8
// tạo ra các biến riêng biệt có giá trị ban đầu là giá trị trong object (unpack)

// // Destructuring trong object
// const teacher = {
//     name: 'TRần thị B',
//     gender: 'female',
// }

// const {gender} = teacher; // nếu truyền vào biến k cùng key trong object thì output sẽ ra undefined

// console.log (teacher);

// // cách gán lại tên biến trong object

// const {gender, name: nameTeacher} = teacher;
// console.log (nameTeacher)

//Detructuring trong array

// const listNumber = [1,2,3];
// const [number] = listNumber;
// // nếu muốn in các số sau thì dùng ',' mỗi dấu ',' tương ứng với 1 số
// // const [,,number];

// console.log (number);

// const A = [1,2,3]
// function Tich(arr){
//     var B = [];
//     for (i = 0; i< arr.length ; i++){
        
//         const newVari= arr[i]*2;
//         console.log(newVari);
//         B.push(newVari);
//     }
//     return B;
// }
// console.log(Tich(A));

// cách 2 : sử dụng hàm map

// const A = [1,2,3];

// // trong hàm map: parameter đầu tiên là curentValue, index, array
// const newArr = A.map((value,index) => {

//     return value * 2 ;

// });
// console.log(newArr);

const B = [1,2,3,4,5];
const newArr = B.filter((value) => value % 2 != 0); // tạo điều kiện cho filter ( ví dụ > 2, % 2 === 0), nếu k thỏa mãn điều kiện sẽ tạo ra 1 mảng rỗng
console.log(newArr);

// findfIndex
// sẽ trả về index đầu tiền đc tìm thấy, nếu k tìm thấy sẽ trả về -1
const C = [1,2,3,4,5];
const  index = B.findIndex((value) => value > 1 );
console.log (index);




