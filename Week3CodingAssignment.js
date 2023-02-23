// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
difference = (ages[ages.length - 1]) - ages[0];
console.log(difference);
// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(100);
difference = (ages[ages.length - 1]) - ages[0];
console.log(difference);
//1c.	Use a loop to iterate through the array and calculate the average age. 
var sum = 0;
for(let i = 0; i<ages.length;i++){
    sum+=ages[i];
    average = sum/ages.length;
}
console.log(average);
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
var sum = 0;
for(let i=0; i<names.length;i++){
    sum+=names[i].length;
    average = sum/ages.length;
}
console.log(average);
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
var total = "";
for(let i = 0;i<names.length;i++){
    total += names[i] + " "
}
console.log(total);

//3.	How do you access the last element of any array? 
// You can access the last element of any array can be called by calling array[array.length-1]

//4.	How do you access the first element of any array?
// You can access the last element of any array can be called by calling array[0]

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for(let i = 0; i<names.length;i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum = 0;
for(let i = 0; i<nameLengths.length;i++){
    sum+=nameLengths[i]
}
console.log(sum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordConcat(word, n){
    i = 0;
    let concat = "";
    while(i<n){
        concat+=word;
        i++
    }
    return concat;
}
console.log(wordConcat("Hello", 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Kyle", "Carleton"));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isGreaterThan100(numbers){
    sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    if(sum>100){
        return true;
    }
    else{
        return false;
    }
}
console.log(isGreaterThan100([20,40,60,80,100]));
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAverage(numbers){
    sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    average = sum/numbers.length;
    return average;
}
console.log(arrayAverage([20,40,60,80,100]));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function greaterArray(array1, array2){
    sum1 = 0;
    sum2 = 0;
    for(let i = 0; i<array1.length; i++){
        sum1+=array1[i];
    }
    average1 = sum1/array1.length;
    for(let j = 0; j<array2.length; j++){
        sum2+=array2[j];
    }
    average2 = sum2/array2.length;

    if(average1>average2){
        return true;
    }
    else{
        return false;
    }
}
console.log(greaterArray([1,2,3,4,5], [6,7,8,9,10]));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(moneyInPocket, isHotOutside){
    if(isHotOutside && (moneyInPocket == 10.50)){
        return true;
    }
    else{
        return false;
    }
}

//13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
// This function calculates the final cost of an item with user provided sales tax and cost of item.
function salesTaxCalculator(){
    price = prompt("Enter the price of your item: ");
    salesTax = prompt("Enter your state sales tax: ");

    total = price * (1+(salesTax/100));

    console.log(`The total price with sales tax is `+total);
}
salesTaxCalculator()