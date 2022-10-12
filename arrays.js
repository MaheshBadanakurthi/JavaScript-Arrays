var x=['Car', 123,567,'Jaguar', 'tiger'];
// len=x.length;  // used to know length of array
// console.log(len); // printing length
// console.log(x[2]);// accessing a perticular element
// console.log(x[0]);
// console.log(x[7]);

// console.log(len-4);

x.push('TVS',2345);  // adding items to array
len2=x.length;
console.log(len2);

console.log(x);
x.unshift('TVS');
console.log(len2);
console.log(x);
x.pop('Jaguar');
console.log(x);


// one array contains multiple arrays we converted to single array
let shortArr=[
    [12,345,'naresh',678,9,0,34],
    [324,4,546,78,89,90,09],
    [21345,56,7,89,900],
    ['mahi','nani','rani','madhupriya','navya',['raju','ajay','shekar','pa1']]
]
let shot=shortArr.reduce((accum,curElm)=>{
    return accum.concat(curElm);
})
console.log(shot)



