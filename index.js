function myBind(){
    console.log(this);
}

let arr = 1;
let str = '1234'

let obj = {
    a : 1
}

let res = myBind.bind(arr);

res()

console.log(typeof Object(arr));
console.log(Object(str));