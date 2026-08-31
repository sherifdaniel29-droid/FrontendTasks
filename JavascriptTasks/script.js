//task1

let a= 5;
let b= 10;
let temp = a;
a=b;
b=temp;
console.log("A: ", a);
console.log("B: ", b);

//task2

let numbers = [4,9,2,7,5];
let max = numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log("Max: ",max);

//task3

let str="JavaScript is awesome";
let countvowels =0;
for(let i =0;i<str.length;i++){
    if(str.charAt(i)=='A' ||str.charAt(i)=='a'||
        str.charAt(i)=='O'|| str.charAt(i)=='o'||
        str.charAt(i)=='E'|| str.charAt(i)=='e'||
        str.charAt(i)=='I' || str.charAt(i)=='i'||
        str.charAt(i)=='U'|| str.charAt(i)=='u'){
            countvowels++;
        }
}
console.log("Number of Vowels: ",countvowels);

//task4 
function isPrime(num){
    if(num==2){
        return true;
    }
    for(let i =2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(17));

//task5

function reverseString(str){
    let res=""
    for(let i=str.length-1;i>=0;i--){
        res+=str.charAt(i);
    }
    return res;
}
console.log(reverseString("olleh"));

//task6

function sumOnlyEven(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 == 0){
            sum+=nums[i];
        }
    }
    return sum;
}
let nums = [1,2,3,4,5,6];
console.log(sumOnlyEven(nums));

//task7

let arr = [1, 2, 3, 2, 4, 1, 5];

let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArr); 

//task8

for(let i =1 ;i<=30;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        continue;
    }
    if(i%3==0){
        console.log("Fizz");
        continue;
    }
    if(i%5==0){
        console.log("Buzz");
        continue;
    }
    else {
        console.log(i);
    }
}

//task 9

function factorial(n){
    if (n==0){
        return 0;
    }
    let product=1;
    for(let i =n;i>0;i--){
        product*=i;
    }
    return product;
}
console.log(factorial(5));

//task 10

let car = { brand: "Toyota", model: "Corolla", year: 2020, color: "blue" };

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}